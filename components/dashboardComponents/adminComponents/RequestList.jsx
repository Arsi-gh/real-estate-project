import SearchCom from '@/components/FilterComponents/SearchFilterCom'
import SortCom from '@/components/FilterComponents/SortFilterCom'
import { ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

    const [requests , setRequests] = useState(null)
    const [isLoading , setIsLoading] = useState(false)
    const [displayReq , setDisplayReq] = useState(false)
    const [reqId , setReqId] = useState(null)

    const fetchReqs = async () => {
        setIsLoading(true)
        const {data} = await axios.get('http://localhost:5000/requests')
        setRequests(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchReqs()
    } , [])

    if (isLoading) return <p>loading ...</p>

    if (requests) return (
        <div className="flex flex-col h-[35rem] gap-3 py-1 px-4 overflow-auto">
            {requests.map((req) => {
                return <Request key={req.id} {...req} displayReq={setDisplayReq} changeReqId={setReqId}/>
            })
            }
            {displayReq && <RequestModal id={reqId} displayReq={setDisplayReq}/>}
        </div>
    )
}

const Request = ({id , category , email , created_At , subject , displayReq , changeReqId}) => {

    const handleClick = (id) => {
        displayReq(true)
        changeReqId(id)
    }
    
    return (
        <div className='w-full p-2 flex items-center gap-3 rounded-lg shadow-customeOne bg-white'>
            <p className='flex gap-2 items-center w-[15rem]'> <TicketIcon className='w-[1.5rem]'/> <b>Title : </b>{subject.length > 20 ? subject.slice(0 , 18) + '...' : subject}</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className='text-red-500 w-[8rem]'><b className='text-neutral-800'>Category : </b>{category}</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className='w-[20rem]'><b>Email : </b>{email}</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <p className='flex-1'><b>created at : </b>{created_At.slice(0 , 10)}</p>
            <span className='h-[1.5rem] w-[1px] bg-zinc-300'></span>
            <button onClick={() => handleClick(id)} className='p-2 rounded-lg bg-zinc-100 shadow-customeOne hover:bg-zinc-200'>See more</button>
        </div>
    )
}

const RequestModal = ({id , displayReq}) => {

    const [req , setReq] = useState(null)
    const [isLoading , setIsLoading] = useState(false)

    const fetchReq = async () => {
        setIsLoading(true)
        const {data} = await axios.get(`http://localhost:5000/requests/${id}`)
        setReq(data)
        setIsLoading(false)
    }

    useEffect(()=> {
        fetchReq()
    } , [id])

    if (isLoading) return <p>Loading ...</p>
    
    if (req) return (
        <>
            <div onClick={() => displayReq(false)} className='w-screen h-screen fixed left-0 top-0 z-30 bg-black opacity-70'></div>
            <div className='p-4 flex flex-col fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[40rem]  bg-white z-30 rounded-lg'>
            <div className='flex items-center justify-between'>
                <b className='flex gap-2 items-center text-lg'> <ChatBubbleLeftRightIcon className='w-[1.8rem]'/> Answer request</b>
                <XMarkIcon onClick={() => displayReq(false)} className='w-[1.8rem] cursor-pointer'/>
            </div>
            <span className='my-3 w-full h-[1px] bg-zinc-300'></span>
            <div className='w-full flex gap-2 text-neutral-800'>
                <div className='flex-1 flex flex-col gap-3'>
                    <p className='text-lg'><b>Title : </b>{req.subject}</p>
                    <p><b>Category : </b>{req.category}</p>
                    <p className='p-2 rounded-lg bg-zinc-50 shadow-customeOne max-h-[12rem] overflow-scroll'><b>Description : </b>{req.desc}</p>
                    <p><b>Created at : </b>{req.created_At.slice(0 , 10)}</p>
                    <p><b>Email : </b>{req.email}</p>
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