'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInWiev } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-setcion-context'

export default function Intro () {
  const { ref } = useSectionInWiev('Start', 0.5)
  const { setActiveSection, setTimeOfLastclick } = useActiveSectionContext()

  return (
            <section ref={ref} id="Start" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
                <div className="flex items-center justify-center">
                    <div className="relative" >
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: 0.2 }}>
                            <Image src="/nowyja.png" alt="photo" width="192" height="192" quality="95" priority={true} className="w-40 h-40 rounded-full object-cover shadow-xl border-[0.35rem] border-white  " />
                        </motion.div>

                        <motion.span className=" absolute bottom-0 right-0 text-4xl" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}>👋</motion.span>
                    </div>
                </div>
                <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="font-bold">Cześć, jestem Bartek.</span> W technikum programistycznym moją pasją stało się{' '}
                    <span className="font-bold">pisanie stron internetowych</span> które rozwijam od 3 lat
                    <span className="font-bold"></span>. Uwielbiam tworzyć i rozwiązywać problemy a pomaga mi to że jestem bardzo kreatywny. Mój nacisk w nauce kieruje się na{' '}
                    <span>React (Next.js)</span>.
                </motion.h1>

                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2  px-4 text-lg font-medium" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <Link href="#Kontakt" onClick={() => {
                      setActiveSection('Kontakt')
                      setTimeOfLastclick(Date.now())
                    }}
                     className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2  dark:bg-white/60 dark:text-[#29313C] rounded-full outline-none  focus:scale-110 hover:scale-110 hover:border-gray-950 active:scale-105 transition ">Kontakt<BsArrowRight className="opacity-70 group-hover:translate-x-1"/> </Link>
                    <a href="/CV.pdf" download className=" group bg-white cursor-pointer border border-black/10   px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition dark:bg-white/10 dark:text-white/60  ">Pobierz CV <HiDownload className="opacity-60 group-hover:translate-y-1"/></a>
                    <a href="https://www.linkedin.com/in/bartłomiej-karpiński-a8940526a/" target="_blank" className=" bg-white text-gray-700 min-h-[52px]  text-[1.35rem] px-4 py-3 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 " rel="noreferrer"><BsLinkedin></BsLinkedin></a>
                    <a href="https://github.com/B4rtex777" target="_blank" className=" bg-white text-gray-700  px-4 py-3 flex items-center text-[1.58rem] min-h-[52px]  gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 cursor-pointer  active:scale-105 transition dark:bg-white/10 dark:text-white/60" rel="noreferrer"><FaGithubSquare></FaGithubSquare></a>
                </motion.div>
            </section>

  )
}
