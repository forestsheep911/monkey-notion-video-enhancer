import { removeHeightAttributes } from './removeHeightAttributes'
import { enhanceVideo } from './videoEnhancer'

const app = () => {
  const executeFunctions = () => {
    setTimeout(() => {
      const layoutContent = document.getElementsByClassName('notion-page-content')[0]
      if (layoutContent) {
        enhanceVideo(layoutContent as HTMLElement)
      }
      removeHeightAttributes()
    }, 3000)
  }

  let oldURL = location.href

  // 监听URL变化
  const observeUrlChange = () => {
    const observer = new MutationObserver(() => {
      if (location.href !== oldURL) {
        oldURL = location.href
        executeFunctions()
      }
    })

    observer.observe(document, { subtree: true, childList: true })
  }

  // 初次执行
  executeFunctions()
  observeUrlChange()
}

export default app
