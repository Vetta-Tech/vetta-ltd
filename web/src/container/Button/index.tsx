import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'

interface PropsType {
  title: string
}

export const Button = ({ title }: PropsType) => {
  return (
    <button className="mx-auto mt-4 flex items-center justify-center bg-red-700 px-7 py-3 font-bold uppercase text-white sm:mx-0">
      {title}
      <ArrowRightIcon className="ml-4 h-7 w-7" />
    </button>
  )
}
