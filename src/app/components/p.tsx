import React from 'react'

type Props = {
    txt:string
    span?:string
    cla?:string

}

export default function p({txt,span ,cla}: Props) {
  return (
    <div>
       <p  className='text-[15px] text-[var(--soft-blue)] ' >{cla} {txt} <span className=" text-white hover:text-[var(--cyan)] font-bold ml-1">{span}</span> </p> 
       
    </div>
  )
}