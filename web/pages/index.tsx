import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
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
import { useScroll } from '../src/lib/hooks/useScroll'

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : bn
  return (
    <motion.div initial="hidden" animate="show">
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
    </motion.div>
  )
}

export default Home
