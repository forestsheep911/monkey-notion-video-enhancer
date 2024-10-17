export const removeHeightAttributes = () => {
  setTimeout(() => {
    const galleryElements = document.querySelectorAll('.notion-gallery-view')

    galleryElements.forEach((gallery) => {
      const elementsWithHeight = gallery.querySelectorAll('[style*="height"]')

      elementsWithHeight.forEach((element) => {
        const style = element.getAttribute('style')
        if (style) {
          const newStyle = style.replace(/height:\s*[0-9.]+px;?/g, '')
          element.setAttribute('style', newStyle)
        }
      })
    })

    console.log('Height attributes removed from elements within .notion-gallery-view')
  }, 700)
}
