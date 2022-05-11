import React from 'react'

interface DataTypes {
  index: number
  title: string
  description: string
}

export const BenifitCard = ({ index, title, description }: DataTypes) => {
  return (
    <div className="m-4 flex min-h-[18rem] max-w-5xl flex-col items-center justify-center rounded-xl bg-gray-100">
      <div className="p-12">
        <div className="flex">
          <button className="mr-3 h-7 w-7 rounded-full bg-red-500 font-bold">
            {index}
          </button>
          <span className="font-bold uppercase text-red-500">{title}</span>
        </div>
        <p className="py-5">{description}</p>
      </div>
    </div>
  )
}
