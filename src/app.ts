import DPlayer from 'dplayer'

const app = () => {
  // create button
  const button = document.createElement('button')
  button.innerText = '采用自研播放器'
  button.style.marginRight = '2em'
  button.style.marginTop = '2em'
  button.style.marginLeft = 'auto'
  button.style.width = 'fit-content'
  button.style.userSelect = 'none'
  button.style.transition = 'background 20ms ease-in 0s'
  button.style.display = 'inline-flex'
  button.style.alignItems = 'center'
  button.style.justifyContent = 'center'
  button.style.whiteSpace = 'nowrap'
  button.style.borderRadius = '4px'
  button.style.border = '1px solid rgba(55, 53, 47, 0.16)'
  const mains = document.getElementsByTagName('main')
  function enhanceVideo() {
    // check if video exists
    const videoBlocks = document.querySelectorAll('video')
    if (videoBlocks.length !== 0) {
      button.addEventListener('click', () => {
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
          mains[0]?.removeChild(button)
        })
      })
      // append first child
      mains[0]?.insertBefore(button, mains[0].firstChild)
    } else {
      mains[0]?.removeChild(button)
    }
  }

  console.log('monkey jumping on the bed.')
  let oldURL = location.href
  setInterval(function () {
    if (location.href != oldURL) {
      console.log('URL changed')
      oldURL = location.href
      // begin processing
      enhanceVideo()
    }
  }, 12000) // 每12秒检查一次
  setTimeout(() => {
    enhanceVideo()
  }, 7000)
}

export default app
