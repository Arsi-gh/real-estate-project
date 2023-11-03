import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function DocumentItem({img}) {
  return (
    <div className='w-[20rem] h-fit rounded-lg shadow-customeOne overflow-hidden'>
        <img className='rounded-lg' src={img} alt="" />
        <div className='p-2 flex flex-wrap gap-2'>
          <strong className='w-full'>Document title</strong>
          <p className='flex gap-1'><UserIcon className='w-[1.1rem]'/>Kambiz jonathan</p>
          <p>Lorem ipsum, dolor sit amet consec Amet dolore facere illo totam.</p>
        </div>
        <button className='p-[6px] border-t-[1px] border-zinc-200 w-full bg-zinc-100 hover:bg-zinc-200'>see more ...</button>
    </div>
  )
}
