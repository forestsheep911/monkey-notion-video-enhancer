import { removeHeightAttributes } from './removeHeightAttributes'
import { enhanceVideo } from './videoEnhancer'

const app = () => {
  // 立即执行手动视频增强功能
  enhanceVideo()

  const executeFunctions = () => {
    // 只对自动触发的功能使用延迟
    setTimeout(() => {
      // 这里可以只保留需要等待DOM加载的功能
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
        // URL变化时也需要重新初始化视频增强功能
        // enhanceVideo()
      }
    })

    observer.observe(document, { subtree: true, childList: true })
  }

  // 初始执行
  executeFunctions()
  observeUrlChange()
}
export default app
