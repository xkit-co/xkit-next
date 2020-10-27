import { useState, useCallback } from 'react'

export default function Xkit() {
  const [xkit, setXkit] = useState(window.xkit)

  const ref = useCallback((node) => {
    if (xkit.renderCatalog == null) {
      xkit.ready(() => setXkit(Object.assign({}, window.xkit)))
      return
    }
    if (node != null) {
      xkit.renderCatalog(node, {
        routerType: 'memory'
      })

      return () => {
        xkit.unmountCatalog(node)
      }
    }
  }, [xkit])

  return <div ref={ref}></div>
}
