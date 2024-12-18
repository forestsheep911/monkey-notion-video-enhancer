import app from './app'

async function initDevelopment() {
  try {
    const { isTampermonkey } = await import(/* webpackMode: "eager" */ '@/lib/environment')

    if (isTampermonkey()) {
      const { hotReload } = await import(/* webpackMode: "eager" */ '@/lib/hotReload')
      hotReload()
      app()
    } else {
      const { autoInstall } = await import(/* webpackMode: "eager" */ '@/mock/autoInstall')
      autoInstall()
    }
  } catch (err) {
    console.error('Development initialization failed:', err)
  }
}

if (PRODUCTION) {
  app()
} else {
  console.log('Development mode')
  initDevelopment()
}
