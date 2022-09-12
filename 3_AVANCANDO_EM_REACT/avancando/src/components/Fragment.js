import React from 'react'

function Fragment({propsFragment}) {
  return (
    <>
        <h2>Primeiro Titulo</h2>
        <h3>Segundo Titulo</h3>
        <h4>{propsFragment}</h4>
    </>
  )
}

export default Fragment