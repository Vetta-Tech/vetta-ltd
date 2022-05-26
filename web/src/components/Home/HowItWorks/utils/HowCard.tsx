import Image from 'next/image'
import React from 'react'

type PropsType = {
  imgSrc: string
  title: string
  description: string
}

export const HowCard = ({ imgSrc, title, description }: PropsType) => {
  return (
    <div className="mx-auto my-10">
      <div className="flex flex-col">
        <div className="mx-auto rounded-3xl p-4 shadow-lg">
          <Image src={imgSrc} width={150} height={150} />
        </div>
        <div className="mx-auto w-4/5 py-6 text-center">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}
