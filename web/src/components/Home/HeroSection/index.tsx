import Image from 'next/image'

import { ArrowRightIcon } from '@heroicons/react/outline'

import { Client } from './utils/Feature'
import { Button } from '../../../container'

export const Hero = () => {
  return (
    <div className="no-scrollbar">
      <div className="container mx-auto grid grid-cols-1 bg-black  lg:grid-cols-2">
        <div className="z-10 block p-0 lg:hidden">
          <Image
            height={700}
            width={500}
            src="https://quomodosoft.com/html/lunatic/lunatic/images/home-mobile-3.png"
          />
        </div>
        <div className="mx-auto mb-4 flex flex-col justify-center text-white md:p-0 lg:p-4 ">
          <div className="text-center md:text-left">
            <p className="mt-4 py-1 font-monster">
              Fastest marketplace in the country
            </p>
            <h1 className="py-1 font-monster text-2xl font-bold capitalize md:text-3xl  lg:py-3">
              Essentials and luxurious <br /> delivered within minute
            </h1>
          </div>
          <div className="p-3 sm:p-0 lg:p-0">
            <Image
              src="/images/Hero/Download button.png"
              width={400}
              height={50}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            height={600}
            width={500}
            src="https://quomodosoft.com/html/lunatic/lunatic/images/home-mobile-3.png"
          />
        </div>
      </div>
      <Client />
    </div>
  )
}
