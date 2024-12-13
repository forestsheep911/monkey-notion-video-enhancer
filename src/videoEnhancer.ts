import DPlayer from 'dplayer'
export const enhanceVideo = () => {
  // 跟踪已增强的视频
  const enhancedVideos = new Set<string>()

  const replaceVideoPlayer = () => {
    // 明确指定 HTMLVideoElement 类型
    const videos = document.querySelectorAll('video:not([data-enhanced])')

    videos.forEach((element) => {
      // 类型断言
      const video = element as HTMLVideoElement

      // 使用可选链和空值检查
      const videoId = video.src || Math.random().toString()

      if (enhancedVideos.has(videoId)) {
        return
      }

      // 类型安全的父元素检查
      const parentElement = video.parentElement
      if (!parentElement) {
        return
      }

      // 检查现有播放器
      const existingPlayer = parentElement.querySelector('.dplayer')
      if (existingPlayer) {
        return
      }

      try {
        const dpElement = document.createElement('div')
        dpElement.className = 'custom-dplayer'

        new DPlayer({
          container: dpElement,
          video: {
            url: video.src || '',
            type: 'auto',
          },
        })

        parentElement.insertBefore(dpElement, video)
        video.style.display = 'none'

        video.setAttribute('data-enhanced', 'true')
        enhancedVideos.add(videoId)
      } catch (err) {
        console.error('Failed to enhance video:', err)
      }
    })
  }

  // 使用类型安全的防抖
  let timeout: ReturnType<typeof setTimeout>
  const debouncedReplace = () => {
    clearTimeout(timeout)
    timeout = setTimeout(replaceVideoPlayer, 500)
  }

  // 使用类型化的事件处理器
  const handler = (e: KeyboardEvent) => {
    if (e.altKey && e.key.toLowerCase() === 'z') {
      e.preventDefault()
      debouncedReplace()
    }
  }

  document.removeEventListener('keydown', handler)
  document.addEventListener('keydown', handler)
}
