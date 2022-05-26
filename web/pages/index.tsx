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
  CompanyQuality,
  HowSection,
  Careers,
  RiderPartner,
  HowItWork,
} from '../src/components'
import Footer from '../src/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vetta - Brands in a moment</title>
      </Head>
      <Navbar />
      <Hero />
      <CompanyQuality />
      {/* <HowSection />
      <Careers />
      <RiderPartner />
      <LetsDoToghther /> */}
      <HowItWork />
      <AppDoenload />
      <Footer />
    </>
  )
}

export default Home
