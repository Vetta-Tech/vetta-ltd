import React from 'react'
import { ReviewCard } from './utils/ReviewCard'

export const Review = () => {
  return (
    <div className="container my-16">
      <h1 className="my-16 text-center text-3xl font-bold scrollbar-hide md:text-5xl">
        Our Happy Customers
      </h1>
      <div className="flex justify-between overflow-auto p-4">
        <ReviewCard
          name="First Name"
          address="Uttara, Dhaka"
          imgSrc="/images/review/image.png"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        libero necessitatibus quibusdam possimus"
        />
        <ReviewCard
          name="First Name"
          address="Uttara, Dhaka"
          imgSrc="/images/review/image.png"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        libero necessitatibus quibusdam possimus"
        />
        <ReviewCard
          name="First Name"
          address="Uttara, Dhaka"
          imgSrc="/images/review/image.png"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        libero necessitatibus quibusdam possimus"
        />
      </div>
    </div>
  )
}
