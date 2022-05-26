import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
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
  Review,
} from '../src/components'
import Footer from '../src/components/Footer'

import en from '../src/locals/Home/en'
import bn from '../src/locals/Home/bn'

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : bn
  console.log(t)
  return (
    <>
      <Head>
        <title>Vetta - Brands in a moment</title>
      </Head>

      <Navbar />
      <Hero locals={t} />
      <CompanyQuality />
      {/* <HowSection />
      <Careers />
      <RiderPartner />
      <LetsDoToghther /> */}
      <HowItWork />
      <AppDoenload />
      <Review />
      <Footer />
    </>
  )
}

export default Home
