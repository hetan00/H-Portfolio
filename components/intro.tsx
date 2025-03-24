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

        <p className="mb-10 mt-4 
        px-4 text-2xl 
        font-medium !leading-[1.5]
        sm:text-4xl">
        <span className="font-bold">Hello, I'm Hetan.</span> I'm a Computer Science Graduate and I specialise in{" "}
        <span className="font-bold">full-stack development</span>. {" "}
        I enjoy
        building <span className="italic">sites and applications</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span> {"and"} <span className="underline">Python</span>.
        </p>
    </section>
  )
}