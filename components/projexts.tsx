'use client'
import React from 'react'

import SectionHeading from '@/components/section-heading'
import { projectsData } from '@/lib/data'
import Project from '@/components/project'

import { useSectionInWiev } from '@/lib/hooks'
export default function Projects () {
  const { ref } = useSectionInWiev('Projekty', 0.5)
  return (
        <section ref={ref} id="Projekty" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}><Project {...project} /></React.Fragment>

                ))}
            </div>

        </section>
  )
}
