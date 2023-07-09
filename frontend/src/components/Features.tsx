import { motion } from 'framer-motion';

import { CheckArrowIcon } from '@/assets/icons/CheckArrowIcon';

export const Features = ({
  title,
  subtitle,
  description,
  content,
  left = false,
  variant,
  ...props
}) => {
  const isDiagonal = (variant === "diagonal");
  return (
    <section
      className={`
        ${isDiagonal ? "bg-neutral" : "bg-neutral-600"}
        w-full mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0`}
      id="features"
    >
      {isDiagonal && (
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
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 ${!left && "order-last"}`}>
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">{subtitle}</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">{title}</h2>
              <p className="mb-10 text-neutral-300 leading-loose">{description}</p>
              <ul className="mb-6 text-white">
                {list.map(({ text }, index) => (
                  <li className="mb-4 flex" key={index + 1}>
                    <CheckArrowIcon />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {props.children}
        </div>
      </motion.div>
      {isDiagonal && (
        <div className="custom-shape-divider-top-1665696661 w-full">
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
      )}
    </section>
  )
};
