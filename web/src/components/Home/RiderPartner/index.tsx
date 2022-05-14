import React from 'react'
import { PartnerCard } from './utils/PartnerCard'
import { RiderCard } from './utils/RiderCard'

export const RiderPartner = () => {
  return (
    <div className="container mt-10  grid grid-cols-1 rounded-3xl bg-gray-100 p-10 md:grid-cols-2">
      <RiderCard />
      <PartnerCard />
    </div>
  )
}
