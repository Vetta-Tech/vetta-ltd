import { PopupButton } from '@typeform/embed-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../container'

export const PartnershipHero = () => {
  return (
    <div>
      {' '}
      <div className="container m-auto mt-10 mb-10 px-2">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-4 text-center sm:text-left">
            <h1 className="text-3xl font-bold sm:w-2/3 md:text-7xl">
              Become part of the experience
            </h1>
            <p
              style={{ color: '#747474' }}
              className="mt-3 py-2 text-xl sm:w-5/6"
            >
              Partnering with arive will place you amongst the most loved brands
              of our time and provide you with access to a whole new community
              full of possibilities.
            </p>
            <div className="flex justify-center sm:justify-start">
              <PopupButton id="yXAv5Rkb">
                <button className="mt-5 rounded-2xl bg-black px-8 py-4 font-monster font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-slate-600 hover:transition-shadow">
                  Get in touch
                </button>
              </PopupButton>
            </div>
          </div>
          <div>
            <Image
              src="/images/partnership/arive-partnership.png"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
