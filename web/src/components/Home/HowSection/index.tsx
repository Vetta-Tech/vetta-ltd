import Image from 'next/image'
import React from 'react'
import { Card } from './utils/Card'

export const HowSection = () => {
  return (
    <div className="container rounded-3xl bg-black">
      <div className="grid grid-cols-1 text-white md:grid-cols-2 md:p-10">
        <div className="mx-auto">
          <Card
            index={1}
            title="Place an order"
            description="Choose from our wide range of products"
          />
          <Card
            index={2}
            title="Feel the speed"
            description="Our delivery man will be at your door
in an hour"
          />
          <Card
            index={3}
            title="Enjoy"
            description="BOOM! Never wait for your orders
            again!"
          />
        </div>
        <div className="mx-auto flex p-10">
          <Image src="/images/AppPromo/Image-1.png" height={400} width={500} />
        </div>
      </div>
    </div>
  )
}
