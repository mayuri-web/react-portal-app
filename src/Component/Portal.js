import React from 'react'
import ReactDOM from 'react-dom'
function PortalS(props) {
  return (
    ReactDOM.createPortal(<h1>This is react portal</h1>,
        document.getElementById('other-root'))
  )
}

export default PortalS
