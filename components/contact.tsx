'use client'
import React from 'react'
import SectionHeading from '@/components/section-heading'

import { motion } from 'framer-motion'
import { useSectionInWiev } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import SubmitBtn from '@/components/submit-btn'
import toast from 'react-hot-toast'
export default function Contact () {
  const { ref } = useSectionInWiev('Kontakt')

  return (
        <motion.section id="Kontakt"
                        ref={ref}
                        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}>
            <SectionHeading>Kontakt </SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">Skontaktuj się ze mną bezpośrednio przez  {' '}
                 <a className="underline" href="mailto:b.karpinski.kontakt@gmail.com">b.karpinski.kontakt@gmail.com </a>
                albo przez ten formularz
            </p>
            <form className="mt-10 flex flex-col dark:text-black"
                  action={async (formData) => {
                    const { data, error } = await sendEmail(formData)
                    if (error) {
                      toast.error(error)
                      return
                    }
                    toast.success('Email wysłany prawidłowo')
                  }
                  }

            >
                <input type="email"
                       name="senderEmail"
                       className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                       placeholder="Twój email"
                        required={true}
                        maxLength={500}/>
                <textarea name="message" className="h-52 my-3  resize-none
  rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"placeholder="Twoja wiadomość" required={true}
                          maxLength={5000}/>
                <SubmitBtn></SubmitBtn>
            </form>

        </motion.section>
  )
}
