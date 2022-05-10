import Image from 'next/image'
import React from 'react'

interface PropTypes {
  imgSrc: string
  title: string
  description: string
  buttonTxt: string
}

export const DoCard = (props: PropTypes) => {
  return (
    <div className="py-5">
      <Image src={props.imgSrc} width={200} height={200} />
      <h1 className="p-2 text-2xl font-bold">{props.title}</h1>
      <p className="p-2">{props.description}</p>
      <button className="mt-4 rounded-full bg-emerald-500 py-6 px-10 font-bold">
        {props.buttonTxt}
      </button>
    </div>
  )
}
