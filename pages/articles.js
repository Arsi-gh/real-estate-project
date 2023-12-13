import DocumentAdviceCon from '@/components/DocumentAdvice'
import DocumentItem from '@/components/DocumentItem'
import { PropertySort } from '@/components/FilterAccordions'
import SideFilter from '@/components/SideFilter'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Articles() {
  return (
    <div style={{maxWidth : '1500px'}} className='mx-auto px-4'>
      <main className='flex gap-4 m-4 my-8 max-md:flex-col'>
        <div className='h-fit sticky top-20 max-md:hidden'>
          <SideFilter>
            <PropertySort/>
          </SideFilter>
          <DocumentAdviceCon/>
        </div>
        <button className='hidden gap-2 items-center w-fit font-semibold max-md:flex'> <AdjustmentsHorizontalIcon className='w-7'/> Filters</button>
        <div className='ml-8 flex gap-6 flex-wrap max-md:mx-auto max-md:gap-3'>
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
