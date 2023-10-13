'use client'

import React, { useState, createContext, useContext } from 'react'
import type { SectionName } from '@/lib/types'

interface ActiveSectionContextPorviderProps {
  children: React.ReactNode
}
interface ActiveSectionContextType {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeoflastclick: number
  setTimeOfLastclick: React.Dispatch<React.SetStateAction<number>>

}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextPorvider ({ children }: ActiveSectionContextPorviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Start')
  const [timeoflastclick, setTimeOfLastclick] = useState(0)

  return (<ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeoflastclick,
        setTimeOfLastclick

      }}>{children}</ActiveSectionContext.Provider>)
}
export function useActiveSectionContext () {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}
