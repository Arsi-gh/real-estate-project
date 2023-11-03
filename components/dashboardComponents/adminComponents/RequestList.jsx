import SearchCom from '@/components/FilterComponents/SearchCom'
import SortCom from '@/components/FilterComponents/SortCom'
import { TicketIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function RequestList() {
  return (
    <div className="w-full h-full">
        <RequestCategory/>
        <div className="flex flex-col  h-[35rem] gap-3 py-1 px-4 overflow-auto">
            <Request/>
            <Request/>
            <Request/>
            <Request/>
        </div>
    </div>
  )
}

const RequestCategory = () => {
    return (
        <div className='flex items-center gap-x-2 m-4'>
            <SortCom/>
            <SearchCom/>
        </div>
    )
}

const Request = () => {
    return (
        <div className='w-full justify-between p-2 flex items-center gap-3 rounded-lg shadow-customeOne bg-white'>
            <p className='flex gap-2 items-center '> <TicketIcon className='w-[1.5rem]'/> <b>Title : </b> Error loging into site</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className='text-red-500'><b className='text-neutral-800'>Category : </b> Error in site</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className=''><b>Email : </b> arsalanghoochani15@gmail.com</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            {/* <p className=' border-t-[1px] border-zinc-300'><b>Desc : </b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae totam explicabo quibusdam, illum quaerat blanditiis animi pariatur officiis labore cupiditate temporibus dolorum odit magnam alias voluptatem et assumenda ipsum voluptate? </p> */}
            <button className='p-2 rounded-lg bg-zinc-50 shadow-customeTwo'>See more</button>
        </div>
    )
}