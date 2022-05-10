import Image from 'next/image'
import React from 'react'
import { DoCard } from './utils/DoCard'

export const LetsDoToghther = () => {
  return (
    <div className="mt-16 mb-16 bg-black p-4 font-monster sm:p-0">
      <div className="container mx-auto py-10">
        <h2 className="mb-10 text-center text-xl font-bold uppercase text-white md:text-3xl lg:text-4xl">
          Let’s do it together
        </h2>
        <div className="grid grid-cols-1 text-center text-white sm:py-10 md:grid-cols-3">
          <DoCard
            imgSrc="/images/letsdo/rider-image.png"
            title="Become a rider"
            description="Be your own boss! Enjoy flexibility, freedom and competitive earnings by delivering with Glovo."
            buttonTxt="Join Us"
          />
          <DoCard
            imgSrc="/images/letsdo/partners-image.png"
            title="Become a partner"
            description="Grow with Glovo! Our technology and user base can help you boost sales and unlock new opportunities!"
            buttonTxt="Join Us"
          />
          <DoCard
            imgSrc="/images/letsdo/carrers-image.png"
            title="Careers"
            description="Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!"
            buttonTxt="Join Us"
          />
        </div>
      </div>
    </div>
  )
}
