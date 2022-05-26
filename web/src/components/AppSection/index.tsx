import Image from 'next/image'
import { useState } from 'react'

export const AppDoenload = () => {
  const [android, setAndroid] = useState(true)
  return (
    <div className="container bg-black md:rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto mt-10">
          <Image
            src="/images/AppPromo/free-iphone-12-.png"
            height={500}
            width={400}
          />
        </div>
        <div className="flex flex-col justify-center p-5 text-center text-white md:w-2/3 md:p-5 md:text-center">
          <h1 className="py-4 text-4xl font-bold ">Experience it yourself</h1>
          <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Image
            src="/images/Hero/Download button.png"
            width={400}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}
