import React from 'react'

type Props = {
    src: string 
    alt: string
    cn?: string
}

export default function img({src , alt ,cn}: Props) {
  return (
   <div>
    <img className={cn} src={src} alt={alt} />

   </div>
  )
}
