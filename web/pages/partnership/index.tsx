import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from 'react'
import {
  Navbar,
  PartnerBenifits,
  PartnerHandShake,
  PartnershipHero,
  Footer,
  NewsLetter,
} from '../../src/components'

export default class Partnership extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Partner up with us</title>
        </Head>
        <Navbar />
        <PartnershipHero />
        <PartnerBenifits />
        <PartnerHandShake />
        <NewsLetter color="black" />
        <Footer />
      </div>
    )
  }
}
