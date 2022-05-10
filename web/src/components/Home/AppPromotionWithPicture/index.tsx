import Image from 'next/image'
import React from 'react'
import { Button } from '../../../container'

export const BrandPromises = () => {
  return (
    <div className="mt-16 mb-16 p-4 font-monster sm:p-0">
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-auto">
            <Image src="/images/AppPromo/arive.png" height={600} width={500} />
          </div>
          <div className="text-center md:text-left">
            <p
              style={{ color: '#83A2BE' }}
              className="mt-5 font-monster text-xl font-medium md:text-4xl"
            >
              Get it now
            </p>
            <h1 className="font-monster text-3xl font-bold md:my-6 md:text-6xl">
              Experience it yourself
            </h1>
            <p style={{ color: '#747474' }} className="mb-8 md:my-6 md:w-2/3">
              Headquartered in Munich. Also available in Berlin, Frankfurt,
              Düsseldorf and Hamburg. arive is a VC-backed company.
            </p>
            <Button title="get the app" />
          </div>
        </div>
      </div>
    </div>
  )
}
