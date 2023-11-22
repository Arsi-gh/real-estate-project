import AgentReq from '@/components/dashboardComponents/adminComponents/AgentReq'
import DashLayout from '@/components/dashboardComponents/globalUsage/DashLayout'
import { DocumentTextIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Agents() {
    return (
      <DashLayout>
        <div className='m-2 flex gap-2'>
            <button className='flex items-center gap-2 p-2 pr-4 rounded-lg bg-white border-[1px] border-zinc-300 hover:bg-neutral-800 hover:text-white group hover:shadow-none'> <Squares2X2Icon className='bg-neutral-200 w-[2rem] p-1 rounded-md group-hover:bg-white group-hover:bg-opacity-90 group-hover:text-neutral-800'/> All requests</button>
            <button className='flex items-center gap-2 p-2 pr-4 rounded-lg bg-white border-[1px] border-zinc-300 hover:bg-neutral-800 hover:text-white group hover:shadow-none'> <DocumentTextIcon className='bg-neutral-200 w-[2rem] p-1 rounded-md group-hover:bg-white group-hover:bg-opacity-90 group-hover:text-neutral-800'/> New requests</button>
        </div>
        <div className='m-2 flex flex-col gap-2'>
            <AgentReq/>
        </div>
      </DashLayout>
    )
}
  
