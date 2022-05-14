import React from 'react'

interface Props {
  index: number
  title: string
  description: string
}

export const Card = ({ index, title, description }: Props) => {
  return (
    <div className="mx-auto flex items-center space-x-3 p-10 font-monster">
      <div>
        <button className="rounded-full border-2 p-10 text-2xl font-bold">
          {index}
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
