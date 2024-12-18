module.exports = (api) => {
  const isProduction = api.env('production')
  console.log('isProduction:', isProduction)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: '120', // 根据需要调整
          },
          corejs: 3,
          useBuiltIns: 'usage',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [isProduction ? ['transform-remove-console', { exclude: ['error', 'warn'] }] : null].filter(Boolean),
  }
}
