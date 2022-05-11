import React from 'react'
import { BenifitCard } from '../../container'

export const PartnerBenifits = () => {
  return (
    <div className="mt-16 bg-gray-50 font-monster">
      <div className="container m-auto py-10">
        <div className="text-center">
          <p style={{ color: '#747474' }} className="text-2xl">
            Partnerships
          </p>
          <h1 className="my-2 text-4xl font-bold tracking-wide md:text-6xl">
            The advantages
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <BenifitCard
            index={1}
            title="Visibility"
            description="Enhance your visibility and become part of exclusive curations and product placements."
          />
          <BenifitCard
            index={2}
            title="Audience"
            description="Engage with your target audience in completely new ways and build closer connections."
          />
          <BenifitCard
            index={3}
            title="Content"
            description="Participate in live-shopping events, get access to our influencer community, and be part of exclusive content drops."
          />
          <BenifitCard
            index={4}
            title="Cooperation"
            description="Nationwide marketing campaigns, online and offline."
          />
          <BenifitCard
            index={5}
            title="Data"
            description="Access to extensive D2C data and learnings."
          />
          <BenifitCard
            index={6}
            title="Collaboration"
            description="From product development to exclusive partnerships."
          />
        </div>
      </div>
    </div>
  )
}
