import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-setcion-context'
import { useEffect } from 'react'
import type { SectionName } from '@/lib/types'

export function useSectionInWiev (sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, timeoflastclick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeoflastclick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeoflastclick, sectionName])
  return {
    ref
  }
}
