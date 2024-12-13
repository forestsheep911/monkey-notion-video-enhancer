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
      // 直接在原video前插入新播放器
      video.parentElement?.insertBefore(dpElement, video)
      // 只隐藏原始video标签
      video.style.display = 'none'
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

  // set check timing
  const checkIntervalTiming = [3000, 10000, 20000, 30000]
  checkIntervalTiming.forEach((timing) => {
    setTimeout(checkAndChangePlayer, timing)
  })
}
