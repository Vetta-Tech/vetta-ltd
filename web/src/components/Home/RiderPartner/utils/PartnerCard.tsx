import Image from 'next/image'
import React from 'react'

export const PartnerCard = () => {
  return (
    <div className="mx-auto font-monster md:p-10">
      <div className="mx-auto mb-4 p-3 text-center md:w-2/3">
        <h1 className="text-2xl font-bold">Become a rider</h1>
        <p>
          Be your own boss! Enjoy flexibility, freedom and competitive earnings
          by delivering with Vetta.
        </p>
        <button className="mt-3 rounded-2xl bg-black px-8 py-4 font-monster text-xl font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-slate-600 hover:transition-shadow md:mt-5">
          Join Us Today
        </button>
      </div>
      <div className="flex justify-center">
        <Image src="/images/partnership/Image-2.png" height={300} width={500} />
      </div>
    </div>
  )
}
