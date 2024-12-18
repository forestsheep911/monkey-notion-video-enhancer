import DPlayer from 'dplayer'

export const enhanceVideo = () => {
  const replaceVideoPlayer = () => {
    const videos = document.querySelectorAll(
      'video:not(.dplayer-video):not([data-enhanced])',
    ) as NodeListOf<HTMLVideoElement>
    if (videos.length === 0) {
      console.log('No video elements found or already enhanced')
      return
    }

    videos.forEach((video) => {
      // 防止重复处理已增强的视频
      if (video.getAttribute('data-enhanced')) {
        return
      }

      // 向上查找4层父元素，并转换类型
      const parent4 = video.parentElement?.parentElement?.parentElement?.parentElement as HTMLElement
      if (!parent4 || !parent4.parentElement) {
        console.log('Cannot find proper parent element for a video')
        return
      }

      try {
        const dpElement = document.createElement('div')
        new DPlayer({
          container: dpElement,
          video: {
            url: video.getAttribute('src') || '',
            type: 'auto',
          },
        })

        parent4.parentElement.insertBefore(dpElement, parent4)
        parent4.style.display = 'none'
        video.setAttribute('data-enhanced', 'true')
      } catch (err) {
        console.error('Failed to enhance a video:', err)
      }
    })
  }

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'z') {
      e.preventDefault()
      replaceVideoPlayer()
    }
  })

  GM_registerMenuCommand('使用 DPlayer 播放', replaceVideoPlayer)
}
