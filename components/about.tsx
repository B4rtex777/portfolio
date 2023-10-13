'use client'
import React from 'react'
import SectionHeading from '@/components/section-heading'
import { motion } from 'framer-motion'

import { useSectionInWiev } from '@/lib/hooks'
export default function About () {
  const { ref } = useSectionInWiev('O mnie')

  return <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
                         ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="O mnie">

        <SectionHeading>O mnie </SectionHeading>
        <p className="mb-3 ">
            Podczas nauki w {' '}
            <span className="font-medium">Technikum Programistycznym Infotech</span>, zacząłem się uczyć pisać strony internetowe.
            Bardzo mnie to zainteresowało i sam w domu zacząłem się rozwijać aby zostać Front End Developerem.
            W szkole uzyskałem certyfikaty potwierdzające kwalifikacje zawodowe INF03 Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych i
            INF04 Projektowanie, programowanie i testowanie aplikacji które razem dają tytuł Technik Programista.
            Z moją wiedzą i pasją do tworzenia interaktywnych stron internetowych. Mam umiejętność korzystania z różnych bibliotek i frameworków,
            co pozwala mi tworzyć dynamiczne i atrakcyjne witryny. Oprócz tego, jestem również doświadczony w rozwiązywaniu trudnych problemów programistycznych.
            Moje podejście to nie tylko pisanie kodu, ale także szukanie kreatywnych rozwiązań, które poprawiają jakość użytkowania strony.
            Jestem zawsze gotów na nowe wyzwania i nieustannie się rozwijam, aby być na bieżąco z najnowszymi trendami w świecie front-end developmentu.

        </p>
      <p>
          <span className="italic">Teraz aby pogłebić moją wiedzę idę na studia informatyczne.</span>
      </p>

    </motion.section>
}
