const { resolve } = require('path')
const path = require('path')
const commonMeta = require('./common.meta')

const year = new Date().getFullYear()
const getBanner = (meta) => `// ==UserScript==\n${Object.entries(Object.assign(commonMeta, meta))
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map((item) => `// @${key.padEnd(20, ' ')}${item}`).join('\n')
    }
    return `// @${key.padEnd(20, ' ')}${value.replace(/\[year\]/g, year)}`
  })
  .join('\n')}
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
// @[ You can find all source codes in GitHub repo ]`

const relativePath = (p) => path.join(process.cwd(), p)
const src = relativePath('src')

const baseOptions = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, '../dist'),
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [src],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 缓存 Babel 编译结果，加快重新编译速度
            },
          },
        ],
      },
      // 如果需要类型检查，可以保留 ts-loader，但需要注意顺序
      // {
      //   test: /\.(ts|tsx)$/,
      //   include: [src],
      //   exclude: /node_modules/,
      //   use: 'ts-loader',
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
        ],
        include: [src],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
    splitChunks: false,
    runtimeChunk: false,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': src,
    },
  },
  plugins: [],
}

module.exports = {
  getBanner,
  baseOptions,
}
