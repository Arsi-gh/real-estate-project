import SearchCom from '@/components/FilterComponents/SearchFilterCom'
import SortCom from '@/components/FilterComponents/SortFilterCom'
import {ChatBubbleLeftRightIcon, DocumentTextIcon, Squares2X2Icon, TicketIcon, XMarkIcon } from '@heroicons/react/24/outline'
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
            <b className=''>Requests : </b>
            <button className='flex items-center gap-2 p-2 pr-4 rounded-lg bg-white shadow-customeOne border-zinc-300 hover:bg-neutral-800 hover:text-white group hover:shadow-none'> <Squares2X2Icon className='bg-neutral-200 w-8 p-1 rounded-md group-hover:bg-white  group-hover:text-neutral-800'/> All </button>
            <button className='flex items-center gap-2 p-2 pr-4 rounded-lg bg-white shadow-customeOne border-zinc-300 hover:bg-neutral-800 hover:text-white group hover:shadow-none'> <DocumentTextIcon className='bg-neutral-200 w-8 p-1 rounded-md group-hover:bg-white  group-hover:text-neutral-800'/> Agents </button>
            <button className='flex items-center gap-2 p-2 pr-4 rounded-lg bg-white shadow-customeOne border-zinc-300 hover:bg-neutral-800 hover:text-white group hover:shadow-none'> <DocumentTextIcon className='bg-neutral-200 w-8 p-1 rounded-md group-hover:bg-white  group-hover:text-neutral-800'/> Users </button>
            <span className='flex-1'></span>
            <b className=''>Filter : </b>
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
        <div style={{height : '35rem'}} className="flex flex-col gap-3 py-1 px-4 overflow-auto">
            {requests.map((req) => {
                return <Request isMinify={false} key={req.id} {...req} displayReq={setDisplayReq} changeReqId={setReqId}/>
            })
            }
            {displayReq && <RequestModal id={reqId} displayReq={setDisplayReq}/>}
        </div>
    )
}

export const Request = ({id , category , email , created_At , subject , displayReq , changeReqId , isMinify}) => {

    const handleClick = (id) => {
        displayReq(true)
        changeReqId(id)
    }
    
    return (
        <div className='w-full p-2 flex items-center gap-3 rounded-lg shadow-customeOne bg-white'>
            <p className='flex gap-2 items-center w-60 truncate'> <TicketIcon className='w-6'/> <b>Title : </b>{subject}</p>
            <span style={{width : '1px'}} className='h-6 bg-zinc-300'></span>
            <p className='text-red-500 w-32'><b className='text-neutral-800'>Category : </b>{category}</p>
            {
                !isMinify && (
                    <>
                    <span style={{width : '1px'}} className='h-6 bg-zinc-300'></span>
                    <p className='w-80'><b>Email : </b>{email}</p>
                    <span style={{width : '1px'}} className='h-6 bg-zinc-300'></span>
                    <p className='flex-1'><b>created at : </b>{created_At.slice(0 , 10)}</p>
                    <span style={{width : '1px'}} className='h-6 bg-zinc-300'></span>
                    <button onClick={() => handleClick(id)} className='p-2 rounded-lg bg-zinc-100 shadow-customeOne hover:bg-zinc-200'>See more</button>
                    </>
                )
            }
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
            <div style={{width : '40rem'}} className='p-4 flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white z-30 rounded-lg'>
            <div className='flex items-center justify-between'>
                <b className='flex gap-2 items-center text-lg'> <ChatBubbleLeftRightIcon className='w-7'/> Answer request</b>
                <XMarkIcon onClick={() => displayReq(false)} className='w-7 cursor-pointer'/>
            </div>
            <span style={{height : '1px'}} className='my-3 w-full bg-zinc-300'></span>
            <div className='w-full flex gap-2 text-neutral-800'>
                <div className='flex-1 flex flex-col gap-3'>
                    <p className='text-lg'><b>Title : </b>{req.subject}</p>
                    <p><b>Category : </b>{req.category}</p>
                    <p><b>From : </b> {req.from} </p>
                    <p><b>Autherization : </b> {req.role} </p>
                    <p className='p-2 rounded-lg bg-zinc-50 shadow-customeOne max-h-48 overflow-scroll'><b>Description : </b>{req.desc}</p>
                    <p><b>Created at : </b>{req.created_At.slice(0 , 10)}</p>
                    <p><b>Email : </b>{req.email}</p>
                </div>
                <span style={{width : '1px'}} className='h-80 bg-zinc-200 mx-3'></span>
                <div className='flex-1 h-full'>
                    <textarea className='p-2 w-full h-80 bg-white border-2 border-zinc-200 rounded-lg shadow-customeThree outline-neutral-800' placeholder='Asnwer ticket'></textarea>
                    <button className='p-2 w-full bg-neutral-800 rounded-md text-white font-bold shadow-customeFour'>submit answer</button>
                </div>
            </div>
            </div>
        </>
    )
}