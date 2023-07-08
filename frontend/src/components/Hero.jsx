import { useState } from 'react';

import { motion } from 'framer-motion';

import { InvitationModal } from './InvitationModal';

const heroProps = {
  title: "Analytic tools suite for developers",
  subtitle: "Discover new data flow",
  description: "Experience seamless business integrations and powerful insights with our cutting-edge analytic tools.",
}

export const Hero = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, subtitle, description } = heroProps;
  return (
    <section
      className="w-screen  flex justify-center items-center bg-neutral mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary-100 text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            {subtitle}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            {title}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-neutral-300 text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            {description}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            {children}
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-neutral-600"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-neutral fill-neutral"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </section>
  )
}
