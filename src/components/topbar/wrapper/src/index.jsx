import React from 'react'

const Topbar = ({left, right}) => {
  return (
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

export default Topbar