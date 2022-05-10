import React from 'react'

export const HowUse = () => {
  return (
    <div className="mt-16 mb-16 p-4 font-monster sm:p-0">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-xl font-bold md:text-3xl lg:text-4xl">
          SEE HOW OUR CUSTOMERS ARE USING THEIR CARDS.
        </h2>
        <div className="grid grid-cols-2 text-center md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-auto mt-6">
            <img
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/buscard-v1ce_f0217b58-bda3-453f-999f-9a470522738b_155x.png?v=1631282807"
            />
            <div className="mt-4">
              <h2 className="font-bold uppercase">Business Card</h2>
            </div>
          </div>
          <div className="mt-6">
            <img
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/profile-v1ce_155x.png?v=1629373238"
            />
            <div className="mt-4">
              <h2 className="font-bold uppercase">Profile Hub</h2>
            </div>
          </div>
          <div className="mt-6">
            <img
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/leadstool-v1ce_155x.png?v=1629373294"
            />
            <div className="mt-4">
              <h2 className="font-bold uppercase">Lead Generation</h2>
            </div>
          </div>
          <div className="mt-6">
            <img
              className="mx-auto"
              src="https://cdn.shopify.com/s/files/1/0263/6156/1168/files/url-v1ce_155x.png?v=1629373316"
            />
            <div className="mt-4">
              <h2 className="font-bold uppercase">Link To Any URL</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
