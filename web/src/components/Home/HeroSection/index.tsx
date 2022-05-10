import Image from 'next/image'

import { ArrowRightIcon } from '@heroicons/react/outline'

import { Client } from './utils/Feature'
import { Button } from '../../../container'

export const Hero = () => {
  return (
    <div className="no-scrollbar mb-4 h-[115vh] scroll-m-6 overflow-x-scroll bg-black scrollbar-hide sm:h-[60vh] md:h-[80vh] ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 sm:py-2">
        <div className="mt-20">
          <Image
            src="/images/Hero/bharatpe_team.png"
            width={550}
            height={500}
          />
        </div>
        <div className="mt-10 text-center sm:mt-20 sm:text-left">
          <h2 className="mx-auto w-5/6 font-monster text-3xl font-bold leading-relaxed text-white sm:mx-0 sm:w-auto lg:mt-12">
            THE LAST BUSINESS CARD YOU’LL EVER BUY
          </h2>
          <h3 className="mt-4 text-2xl font-semibold text-gray-500 sm:mt-8">
            Make Better <span className="text-red-600">Connections</span>
          </h3>
          <p className="mx-auto mt-4 w-5/6 font-monster text-gray-400 sm:mx-0 sm:w-auto sm:text-xl">
            V1CE business cards come with integrated NFC technology, which
            enables you to transmit your contact details,
          </p>
          <Button title="Get The app" />
        </div>
      </div>
      <Client />
    </div>
  )
}
