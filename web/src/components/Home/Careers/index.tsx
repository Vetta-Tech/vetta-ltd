import Image from 'next/image'
import React from 'react'

export const Careers = () => {
  return (
    <div className="container mt-10 rounded-3xl bg-gray-100">
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Careers</h1>
        <p className="mx-auto p-4 md:w-2/5">
          Ready for an exciting new challenge? If you’re ambitious, humble, and
          love working with others, then we want to hear from you!
        </p>
        <button className="mt-3 rounded-2xl bg-black px-8 py-4 font-monster text-xl font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-slate-600 hover:transition-shadow md:mt-5">
          Join Us Today
        </button>
      </div>
      <div className="mx-auto flex items-center justify-center">
        <Image
          src="/images/AppPromo/5f89fabd08aca92.png"
          height={500}
          width={1000}
        />
      </div>
    </div>
  )
}
