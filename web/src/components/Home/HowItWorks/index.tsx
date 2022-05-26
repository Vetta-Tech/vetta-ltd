import React from 'react'
import { HowCard } from './utils/HowCard'

export const HowItWork = () => {
  return (
    <div className="mb-16 flex-1 flex-grow bg-gray-50 py-16 font-monster">
      <div className="container my-16">
        <h1 className="my-16 text-center text-5xl font-bold">How it works</h1>
        <div className="grid grid-cols-1 bg-gray-100 drop-shadow-xl md:grid-cols-3">
          <HowCard
            imgSrc="/images/howicons/order.png"
            title="Place an order"
            description="Choose from our wide range of products"
          />
          <HowCard
            imgSrc="/images/howicons/Speed.png"
            title="Place an order"
            description="Choose from our wide range of products"
          />
          <HowCard
            imgSrc="/images/howicons/gift.png"
            title="Place an order"
            description="Choose from our wide range of products"
          />
        </div>
      </div>
    </div>
  )
}
