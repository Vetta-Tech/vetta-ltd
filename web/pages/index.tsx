import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  AppDoenload,
  Benifits,
  BrandPromises,
  Hero,
  HowUse,
  LetsDoToghther,
  Navbar,
} from '../src/components'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowUse />
      <Benifits />
      <BrandPromises />
      <LetsDoToghther />
      <AppDoenload />
      <Footer />
    </>
  )
}

export default Home
