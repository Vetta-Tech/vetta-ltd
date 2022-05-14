import Image from 'next/image'
import React from 'react'

export const FeaturesCardLeft = () => {
  return (
    <div className="grid grid-cols-1 font-monster md:grid-cols-2">
      <div className="mx-auto">
        <Image
          src="https://quomodosoft.com/html/lunatic/lunatic/images/feature-image-2.png"
          height={700}
          width={450}
        />
      </div>
      <div className="mx-auto flex flex-col justify-center p-2 text-center font-monster md:w-5/6 md:p-0 md:text-left">
        <p className="text-sm text-gray-500 md:text-lg">
          New Meaning for Delivery
        </p>
        <h3 className="py-1 text-xl font-semibold md:py-3 md:text-3xl md:font-bold">
          Your lightning-fast delivery partner.
        </h3>
        <p className="p-3 text-sm text-gray-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  )
}
