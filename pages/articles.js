import DocumentAdviceCon from '@/components/DocumentAdvice'
import DocumentItem from '@/components/DocumentItem'
import { PropertySort } from '@/components/FilterAccordions'
import SideFilter from '@/components/SideFilter'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Articles() {
  return (
    <div className='max-w-[1500px] mx-auto px-4'>
      <main className='flex gap-4 m-[1rem] my-[2rem] max-md:flex-col'>
        <div className='h-fit sticky top-[5rem] max-md:hidden'>
          <SideFilter>
            <PropertySort/>
          </SideFilter>
          <DocumentAdviceCon/>
        </div>
        <button className='hidden gap-2 items-center w-fit font-semibold max-md:flex'> <AdjustmentsHorizontalIcon className='w-[1.8rem]'/> Filters</button>
        <div className='ml-[2rem] flex gap-6 flex-wrap max-md:mx-auto max-md:gap-3'>
          <DocumentItem img="documents/1.png"/>
          <DocumentItem img="documents/2.png"/>
          <DocumentItem img="documents/3.png"/>
          <DocumentItem img="documents/4.png"/>
          <DocumentItem img="documents/1.png"/>
          <DocumentItem img="documents/2.png"/>
          <DocumentItem img="documents/3.png"/>
          <DocumentItem img="documents/4.png"/>
        </div>
      </main>
    </div>
  )
}
