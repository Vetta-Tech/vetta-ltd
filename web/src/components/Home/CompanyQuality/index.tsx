import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { FeaturesCardLeft } from './utils/featuresCardLeft'
import { FeaturesCardRight } from './utils/featuresCardRight'

export default class CompanyQuality extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 2 }}
        className="container mx-auto my-10 rounded-3xl bg-gray-50 md:w-3/5"
      >
        <FeaturesCardLeft />
        <FeaturesCardRight />
        <FeaturesCardLeft />
      </motion.div>
    )
  }
}
