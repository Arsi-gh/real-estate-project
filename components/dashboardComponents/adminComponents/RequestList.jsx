import SearchCom from '@/components/FilterComponents/SearchFilterCom'
import SortCom from '@/components/FilterComponents/SortFilterCom'
import { ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function RequestList() {
  return (
    <div className="w-full h-full">
        <RequestCategory/>
        <RequestCon/>
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

const RequestCon = () => {

    const [displayReq , setDisplayReq] = useState(false)

    return (
        <div className="flex flex-col  h-[35rem] gap-3 py-1 px-4 overflow-auto">
            <Request displayReq={setDisplayReq}/>
            <Request displayReq={setDisplayReq}/>
            <Request displayReq={setDisplayReq}/>
            <Request displayReq={setDisplayReq}/>
            {displayReq && <RequestModal displayReq={setDisplayReq}/>}
        </div>
    )
}

const Request = ({displayReq}) => {
    return (
        <div className='w-full justify-between p-2 flex items-center gap-3 rounded-lg shadow-customeOne bg-white'>
            <p className='flex gap-2 items-center '> <TicketIcon className='w-[1.5rem]'/> <b>Title : </b> Error loging into site</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className='text-red-500'><b className='text-neutral-800'>Category : </b> Error in site</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className=''><b>Email : </b> arsalanghoochani15@gmail.com</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className=''><b>created at : </b> 2023 - 5 - 4</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <button onClick={() => displayReq(true)} className='p-2 rounded-lg bg-zinc-100 shadow-customeOne hover:bg-zinc-200'>See more</button>
        </div>
    )
}

const RequestModal = ({displayReq}) => {
    return (
        <>
            <div onClick={() => displayReq(false)} className='w-screen h-screen fixed left-0 top-0 z-30 bg-black opacity-70'></div>
            <div className='p-4 flex flex-col fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[40rem]  bg-white z-30 rounded-lg'>
            <div className='flex items-center justify-between'>
                <b className='flex gap-2 items-center text-lg'> <ChatBubbleLeftRightIcon className='w-[1.8rem]'/> Answer request</b>
                <XMarkIcon onClick={() => displayReq(false)} className='w-[1.8rem] cursor-pointer'/>
            </div>
            <span className='my-3 w-full h-[1px] bg-zinc-300'></span>
            <div className='w-full flex items-center gap-2 text-neutral-800'>
                <div className='flex-1 flex flex-col gap-3'>
                    <p className='text-lg'><b>Title : </b>Error loading users in site</p>
                    <p><b>Category : </b>Error in site</p>
                    <p className='p-2 rounded-lg bg-zinc-50 shadow-customeOne'><b>Description : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae necessitatibus voluptatibus similique cupiditate a mollitia ullam voluptatem ad magnam, vero autem nulla optio tempore laborum atque harum delectus doloribus maxime!</p>
                    <p><b>Created at : </b>2023 - 5 - 4</p>
                    <p><b>Email : </b>arsalanghoochani15@gmail.com</p>
                </div>
                <span className='h-[20rem] w-[1px] bg-zinc-200 mx-3'></span>
                <div className='flex-1 h-full'>
                    <textarea className='p-2 w-full h-[20rem] bg-white border-[1px] border-zinc-200 rounded-lg shadow-customeThree outline-neutral-800' placeholder='Asnwer ticket'></textarea>
                    <button className='p-2 w-full bg-neutral-800 rounded-md text-white font-bold shadow-customeFour'>submit answer</button>
                </div>
            </div>
            </div>
        </>
    )
}