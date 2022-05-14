import React, { Component } from 'react'
import { FeaturesCardLeft } from './utils/featuresCardLeft'
import { FeaturesCardRight } from './utils/featuresCardRight'

export default class CompanyQuality extends Component {
  render() {
    return (
      <div className="container mx-auto my-10 rounded-3xl bg-gray-50">
        <FeaturesCardLeft />
        <FeaturesCardRight />
      </div>
    )
  }
}
