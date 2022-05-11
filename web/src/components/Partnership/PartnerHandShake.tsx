import Image from 'next/image'
import React, { Component } from 'react'
import { PopupButton } from '@typeform/embed-react'

export default class PartnerHandShake extends Component {
  state = {
    showSurvey: false,
  }

  render() {
    return (
      <div className="container m-auto p-3 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/images/partnership/arive-handshake.png"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p style={{ color: '#747474' }} className="py-2 text-3xl">
              Partnerships
            </p>
            <h1 className="mb-3 py-2 font-monster text-3xl font-bold sm:text-6xl">
              Become a partner today
            </h1>

            <div className="flex justify-center sm:justify-start">
              <PopupButton id="yXAv5Rkb">
                <button className="mt-3 rounded-2xl bg-black px-8 py-4 font-monster text-xl font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-slate-600 hover:transition-shadow md:mt-5">
                  Get in touch
                </button>
              </PopupButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
