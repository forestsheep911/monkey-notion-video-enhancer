import DPlayer from 'dplayer'

export const enhanceVideo = () => {
  const videoBlocks = document.querySelectorAll('video')
  if (videoBlocks.length === 0) {
    return
  }

  setTimeout(() => {
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
  }, 3000)
}
