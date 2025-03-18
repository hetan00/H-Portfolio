"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function intro() {
  return (
    <section>
        <div className="flex item-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                  <Image 
                src="/h-img.png"
                alt={"Hetan portrait"} 
                width={192}
                height={192}
                quality={95}
                priority={true}
                className="h-24 w-24 border-[0.35rem]
                border-white rounded-full shadow-xl"/>  
                </motion.div>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duation: 0.7,
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>
    </section>
  )
}