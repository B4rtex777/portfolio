import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Start',
    hash: '#Start'
  },
  {
    name: 'O mnie',
    hash: '#O mnie'
  },

  {
    name: 'Umiejętności',
    hash: '#Umiejętności'
  },
  /* {
    name: 'Projekty',
    hash: '#Projekty'
  }, */

  {
    name: 'Doświadczenie',
    hash: '#Doświadczenie'
  },
  {
    name: 'Kontakt',
    hash: '#Kontakt'
  }
] as const

export const experiencesData = [
  {
    title: 'Stażysta w dziale IT',
    location: 'NASK ',
    description:
        'Nauczyłem się jak naprawdę wygląda praca w firmie programistycznej przy dużym projekcie',
    icon: React.createElement(FaReact),
    date: 'kwi 2021 – sie 2021 · 5 mies.'
  },
  {
    title: 'Stażysta front-end',
    location: 'T-Matic Grupa Computer Plus',
    description:
        'Pracowałem nad programem optymalizującym wybór usługi którą firma sprzedawała używająć HTML, Css, JavaScript, PHP',
    icon: React.createElement(CgWorkAlt),
    date: 'maj 2022 – cze 2022 · 2 mies'
  },
  {
    title: 'Ukończyłem Technikum Programistyczne  ',
    location: 'Infotech',
    description:
            'Ukończyłem technikum ze zdaną Maturą i zawodem Technik Programista',
    icon: React.createElement(LuGraduationCap),
    date: '2023'
  },
  {
    title: 'Zaczynam studia informatyczne  ',
    location: 'Politechnika Wrocławska',
    description:
        '',
    icon: React.createElement(LuGraduationCap),
    date: 'Teraz'
  }

] as const

export const projectsData = [
  {
    title: 'CorpComment',
    description:
            'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg
  },
  {
    title: 'rmtDev',
    description:
            'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg
  },
  {
    title: 'Word Analytics',
    description:
            'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg
  }
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Python',
  'Framer Motion'
] as const
