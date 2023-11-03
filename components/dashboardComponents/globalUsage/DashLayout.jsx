import React from 'react'
import DashSide from './DashSide'
import DashContainer from './DashContainer'

export default function DashLayout({children}) {
  return (
    <main className="max-w-[1400px] mx-auto my-[1rem] px-[1rem] flex gap-4">
        <DashSide></DashSide>
        <DashContainer>
            {children}
        </DashContainer>
    </main>
  )
}
