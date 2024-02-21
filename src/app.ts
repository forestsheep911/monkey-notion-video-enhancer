import Plyr from 'plyr'

const app = () => {
  console.log('monkey jumping on the bed.')
  const css = GM_getResourceText('plyrcss')
  GM_addStyle(css)
  setTimeout(() => {
    const videoBlock = document.querySelectorAll('video')
    videoBlock.forEach((video) => {
      const parent4 = video.parentElement?.parentElement?.parentElement?.parentElement
      if (parent4) {
        parent4.style.display = 'none'
        const videoClone = video.cloneNode(true) as HTMLElement
        parent4.parentElement?.appendChild(videoClone)
        new Plyr(videoClone, {
          loadSprite: false,
        })
      }
    })
  }, 5000)
}

export default app
