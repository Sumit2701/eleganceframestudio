import React from 'react'

export default function ImageBlob(domE1,image,getImageStyle) {
  return (
    <div><img ref={domE1} className='invisible' src={image.picture} style={getImageStyle()} alt="Generated" /> </div>
  )
}
