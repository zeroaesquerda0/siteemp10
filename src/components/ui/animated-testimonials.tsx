"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  autoplayInterval = 5000,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
}) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleNext = useCallback(() => {
    setDirection("right");
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection("left");
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext, autoplayInterval]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        {/* Images Section */}
        <div className="relative h-80 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.src}-${index}`}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction === "right" ? 100 : -100,
                  filter: "blur(4px)",
                  scale: 0.9,
                  rotateY: direction === "right" ? 15 : -15,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0,
                  x: isActive(index) ? 0 : direction === "right" ? -100 : 100,
                  filter: isActive(index) ? "blur(0px)" : "blur(4px)",
                  scale: isActive(index) ? 1 : 0.95,
                  rotateY: isActive(index) ? 0 : direction === "right" ? -15 : 15,
                  zIndex: isActive(index) ? 40 : testimonials.length - index,
                }}
                exit={{
                  opacity: 0,
                  x: direction === "right" ? -100 : 100,
                  filter: "blur(4px)",
                  scale: 0.9,
                  rotateY: direction === "right" ? -15 : 15,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="absolute inset-0 origin-center"
              >
                <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    priority={isActive(index)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    draggable={false}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                  {testimonials[active].designation}
                </p>
              </div>

              <motion.div className="text-lg text-gray-600 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-4 pt-8 md:pt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-translate-x-1 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:translate-x-1 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};