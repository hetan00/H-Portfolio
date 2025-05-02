"use client"

import type { SectionName } from "@/lib/types"
import { createContext, useContext, useState } from "react"



// type SectionName = typeof links[number]["name"]

type ActiveSectionContextProvider = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProvider) {

const [activeSection, setActiveSection] = useState<SectionName>('Home')
const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when users click on the link 

  return ( <ActiveSectionContext.Provider 
    value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}>
    {children}
  </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }
    return context
}