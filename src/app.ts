import Plyr from 'plyr'

const app = () => {
  console.log('monkey jumping on the bed.')
  // const css = GM_getResourceText('plyrcss')
  // GM_addStyle(css)
  setTimeout(() => {
    const videoBlock = document.querySelectorAll('video')
    console.log(videoBlock)

    videoBlock.forEach((video) => {
      const videoClone = video.cloneNode(true) as HTMLElement
      document.body.appendChild(videoClone)
      console.log(videoClone)

      new Plyr(videoClone)
    })
  }, 5000)
}

export default app
