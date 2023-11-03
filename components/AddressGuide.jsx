import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function AddressGuide() {
  
  const route = useRouter()

  const [currentPage , setCurrentPage ] = useState('')

  useEffect(() => {
      !route.asPath.endsWith('/') && setCurrentPage(route.asPath.slice(1))
  } , [])

  return (
    currentPage && (
        <header className='max-w-[1400px] mx-auto text-xl font-bold mt-[1rem] p-5 py-2 flex gap-4 items-end'>
            <p>Home</p>
            <ChevronRightIcon className='w-[1.5rem] text-zinc-600'/>
            <p className='capitalize'>{currentPage}</p>
        </header>
    )
  )
}
