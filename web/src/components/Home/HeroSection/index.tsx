import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Client } from './utils/Feature'

type PropsTypes = {
  locals: {
    heroSubHead: string
    heroTxtFirst: string
    heroTxtSecond: string
  }
}

export const Hero = ({ locals }: PropsTypes) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        key="modal"
        // className="no-scrollbar"
      >
        <div className="container mx-auto grid grid-cols-1 bg-black  lg:grid-cols-2">
          <motion.div className="md:0 mx-auto my-10 mb-4 flex flex-col justify-center text-white md:p-0 lg:p-4 ">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center md:text-left"
            >
              <p className="mt-4 py-1 text-xl">{locals.heroSubHead}</p>
              <h1 className="py-1 font-monster text-2xl font-bold capitalize md:text-3xl  lg:py-3">
                {locals.heroTxtFirst} <br /> {locals.heroTxtSecond}
              </h1>
            </motion.div>
            <div className="p-3 sm:p-0 lg:p-0">
              <Image
                src="/images/Hero/Download button.png"
                width={400}
                height={50}
              />
            </div>
          </motion.div>
          {/* <div className="hidden lg:block"> */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              height={600}
              width={500}
              src="https://quomodosoft.com/html/lunatic/lunatic/images/home-mobile-3.png"
            />
          </motion.div>
          {/* </div> */}
        </div>
        <Client />
      </motion.div>
    </AnimatePresence>
  )
}
