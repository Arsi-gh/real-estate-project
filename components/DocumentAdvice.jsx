import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function DocumentAdviceCon() {
  return (
    <div className='w-[18rem] rounded-lg border-[1px] border-zinc-200 flex flex-col gap-2 p-2 mt-2'>
        <strong className='p-2'>Recommended documents</strong>
        <DocumentAdvice img="/documents/1.png"/>
        <DocumentAdvice img="/documents/2.png"/>
        <DocumentAdvice img="/documents/3.png"/>
    </div>
  )
}

const DocumentAdvice = ({img}) => {
    return (
        <div className='flex gap-4 items-center bg-zinc-50 rounded-lg border-[1px] border-zinc-200 p-2 hover:bg-zinc-100 cursor-pointer'>
            <img className='w-[4rem] h-[4rem] shadow-customeOne object-cover rounded-lg' src={img} alt="" />
            <div>
                <strong className='w-full'>Document title</strong>
                <p className='flex gap-1'><UserIcon className='w-[1.1rem]'/>Kambiz jonathan</p>
            </div>
        </div>
    )
}
