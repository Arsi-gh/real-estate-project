import React from 'react'

export default function DashContainer({children}) {
  return (
    <section className='h-[40rem] rounded-lg border-[1px] border-zinc-300 bg-zinc-50 flex-1'>
        {children}
    </section>
  )
}
