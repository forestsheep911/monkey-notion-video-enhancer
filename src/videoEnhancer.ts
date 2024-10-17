import DPlayer from 'dplayer'

const createEnhanceButton = () => {
  const button = document.createElement('button')
  button.innerText = '3秒后将采用自研播放器，点击取消'
  button.style.margin = '2em auto'
  button.style.fontSize = '1.5em'
  button.style.width = 'fit-content'
  button.style.userSelect = 'none'
  button.style.transition = 'background 20ms ease-in 0s'
  button.style.display = 'inline-flex'
  button.style.alignItems = 'center'
  button.style.justifyContent = 'center'
  button.style.whiteSpace = 'nowrap'
  button.style.borderRadius = '4px'
  button.style.border = '1px solid rgba(55, 53, 47, 0.16)'

  return button
}

export const enhanceVideo = (layoutContent: HTMLElement | null = null) => {
  const videoBlocks = document.querySelectorAll('video')
  if (videoBlocks.length === 0) {
    return
  }

  console.log('videoBlocks', videoBlocks)

  const button = createEnhanceButton()
  let countdown = 3

  const updateButtonText = () => {
    if (countdown > 0) {
      button.innerText = `${countdown}秒后将采用自研播放器，点击取消`
      countdown -= 1
    } else {
      clearInterval(countdownTimer)
      button.innerText = '即将采用自研播放器...'
    }
  }

  const countdownTimer = setInterval(updateButtonText, 500)

  const timer = window.setTimeout(() => {
    clearInterval(countdownTimer)
    videoBlocks.forEach((video) => {
      const dpElement = document.createElement('div')
      const dp = new DPlayer({
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
    layoutContent?.parentElement?.removeChild(button)
  }, 3000)

  button.addEventListener('click', () => {
    clearTimeout(timer)
    clearInterval(countdownTimer)
    button.innerText = '已取消自动播放'
    layoutContent?.parentElement?.removeChild(button)
  })

  layoutContent?.parentElement?.insertBefore(button, layoutContent)
}
