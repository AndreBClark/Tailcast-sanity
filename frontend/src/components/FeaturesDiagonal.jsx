import { useState } from 'react';

import { motion } from 'framer-motion';

import featuresdiagonal from '../assets/images/featuresdiagonal.jpg';
import { InvitationModal } from './InvitationModal';

export const FeaturesDiagonal = ({
  title,
  subtitle,
  description,
  content
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-neutral">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-neutral-600 fill-neutral-600"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-neutral fill-neutral"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-neutral pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              {subtitle}
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              {title}
            </h2>
            <p className="mb-16 text-neutral-300 leading-loose">
              {description}
            </p>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              {content.text}
            </div>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl  border-neutral-100"
            />
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
