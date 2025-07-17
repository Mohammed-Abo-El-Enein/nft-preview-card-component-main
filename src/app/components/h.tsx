import React from 'react'

type Props = {
    text?:string
    h5?:string
}

export default function H({text ,h5}: Props) {
  return (
    <div>
        <h4 className='mt-5'>{text}</h4>
        <h5>{h5}</h5>
    </div>
  )
}