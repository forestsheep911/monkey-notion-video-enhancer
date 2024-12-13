export const removeHeightAttributes = () => {
  const startRemovingHeight = () => {
    let parentElement: Element | null = null

    // 判断 URL 来选择父元素
    if (window.location.href.includes('f47ef8788acb4e12b604011e95fb1738')) {
      parentElement = document.querySelector('.notion-gallery-view')
    } else {
      parentElement = document.querySelector('[data-block-id="f47ef878-8acb-4e12-b604-011e95fb1738"]')
    }

    if (!parentElement) {
      console.warn('No appropriate parent element found')
      return
    }

    const removeHeight = (element: Element) => {
      const elementsWithHeight = element.querySelectorAll('.notion-gallery-view [style*="height"]')
      elementsWithHeight.forEach((elem) => {
        const style = elem.getAttribute('style')
        if (style) {
          const newStyle = style.replace(/height:\s*[0-9.]+px;?/g, '')
          elem.setAttribute('style', newStyle)
        }
      })
    }

    // 初始处理
    console.log('Removing height attributes for elements within the parent element')
    removeHeight(parentElement)

    // 使用 MutationObserver 监视新元素的添加
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            removeHeight(element)
          }
        })
      })
    })

    // 观察 parentElement 的子树变化
    observer.observe(parentElement, {
      childList: true,
      subtree: true,
    })

    console.log('Height attributes removal observer set up for elements within the parent element')
  }

  // 延迟处理，确保内容加载完毕
  setTimeout(startRemovingHeight, 3000)

  // 监听窗口 resize 事件
  window.addEventListener('resize', () => {
    console.log('Window resized, removing height attributes again.')
    setTimeout(startRemovingHeight, 300)
  })
}
