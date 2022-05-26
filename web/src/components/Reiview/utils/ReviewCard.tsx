import Image from 'next/image'
import React from 'react'

type PropsType = {
  imgSrc: string
  name: string
  address: string
  description: string
}

export const ReviewCard = ({
  imgSrc,
  name,
  address,
  description,
}: PropsType) => {
  return (
    <div className="w-full min-w-full rounded  shadow-lg md:min-w-0 md:max-w-sm">
      <div className="bg-gray-50 p-8">
        <div className="flex py-4">
          <Image src={imgSrc} width={50} height={50} />
          <div className="mx-4">
            <h2>{name}</h2>
            <p>{address}</p>
          </div>
        </div>
        <div className="p-2">
          <p>{description}</p>
        </div>
        <div className="flex justify-end">
          <Image src="/images/review/2087858.png" width={70} height={70} />
        </div>
      </div>
    </div>
  )
}
