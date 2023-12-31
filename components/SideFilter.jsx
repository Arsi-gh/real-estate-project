import React from 'react'

export default function SideFilter({children}) {
  return (
    <div className='overflow-hidden flex flex-col h-fit shadow-customeOne border-zinc-200 rounded-lg  max-md:hidden'>
        <h3 className='p-4 px-4 text-lg font-bold'>Filters</h3>
        {children}
    </div>
  )
}
