import DPlayer from 'dplayer'

export const enhanceVideo = () => {
  let isPlayerChanged = false

  function changerPlayer(videoBlocks: NodeListOf<HTMLVideoElement>) {
    videoBlocks.forEach((video) => {
      const dpElement = document.createElement('div')
      new DPlayer({
        container: dpElement,
        video: {
          url: video.getAttribute('src') || '',
          type: 'auto',
        },
      })
      const parent4 = video.parentElement?.parentElement?.parentElement?.parentElement
      parent4?.parentElement?.insertBefore(dpElement, parent4)
      parent4?.style.setProperty('display', 'none')
    })
    isPlayerChanged = true
  }

  const checkAndChangePlayer = () => {
    const videoBlocks = document.querySelectorAll('video')
    if (videoBlocks.length === 0 || isPlayerChanged) {
      return
    }
    changerPlayer(videoBlocks)
  }

  // 初次3秒后检查
  setTimeout(checkAndChangePlayer, 3000)

  // 30秒后再次检查
  setTimeout(checkAndChangePlayer, 30000)
}
