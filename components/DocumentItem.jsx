import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function DocumentItem({img}) {
  return (
    <div className='w-80 h-fit rounded-lg shadow-customeOne overflow-hidden max-md:w-full max-md:flex max-sm:items-center max-sm:ronuded-none max-sm:shadow-none max-sm:border-y-2 max-sm:rounded-none max-sm:p-2 border-zinc-300 max-sm:flex-col'>
        <img className='w-full object-cover rounded-lg max-md:w-60 max-md:rounded-r-none max-sm:rounded-lg max-sm:w-full max-sm:max-h-40' src={img} alt="" />
        <div className='p-2 flex flex-wrap gap-2 max-sm:justify-center'>
          <strong className='w-full max-sm:text-center max-sm:text-sm'>Document title</strong>
          <p className=' flex gap-1 max-sm:text-sm'><UserIcon className='w-4'/>Kambiz jonathan</p>
          <p className='max-sm:text-center max-sm:text-sm'>Lorem ipsum, dolor sit amet consec Amet dolore facere illo totam.</p>
          <button className='p-2 shadow-customeOne rounded-lg border-zinc-200 w-full bg-zinc-100 hover:bg-zinc-200'>see more ...</button>
        </div>
    </div>
  )
}
