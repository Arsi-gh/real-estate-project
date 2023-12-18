import { Request } from "@/components/dashboardComponents/adminComponents/RequestList";
import DashLayout from "@/components/dashboardComponents/globalUsage/DashLayout";
import { DocumentIcon, DocumentTextIcon, HomeModernIcon, TicketIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Index() {
  return (
    <DashLayout>
      <div className="w-full h-full p-2 grid gap-3 grid-cols-4 grid-rows-3">
        <UsersInfo/>
        <AgentRequests/>
        <div className="col-start-4 col-end-5 row-start-1 row-end-4 bg-white rounded-lg shadow-customeOne"></div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 bg-white rounded-lg shadow-customeOne"></div>
        <RequestsCon/>
        <EstatesInfo/>
      </div>
    </DashLayout>
  )
}

const UsersInfo = () => {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-white rounded-lg shadow-customeOne overflow-hidden">
      <p className="flex justify-between bg-neutral-800 p-2 text-white font-semibold">Users info <UsersIcon className="w-6"/> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Online users : <b className="text-blue-400">5</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Users logged in today : <b>10</b></p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Users logged in this month : <b>100</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Users logged in this year : <b>400</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Users signed up today : <b>20</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Users signed up this month : <b>200</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Users signed up this year : <b>500</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">All users : <b>2000</b></p>
      <p className="p-2 flex justify-between">Deleted accounts : <b className="text-red-500">100</b></p>
    </div>
  )
}

const EstatesInfo = () => {
  return (
    <div className="col-start-1 col-end-2 row-start-3 row-end-4 bg-white rounded-lg shadow-customeOne overflow-hidden">
      <p className="flex justify-between bg-neutral-800 p-2 text-white font-semibold">Estates info <HomeModernIcon className="w-6"/> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Estates added today : <b className="text-green-500">5</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Estates added this month : <b>35</b></p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Solded estates : <b>100</b></p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="flex justify-between p-2 border-zinc-300">Total estates : <b>400</b></p>
    </div>
  )
}

const RequestsCon = () => {

  const [requests , setRequests] = useState(null)

  const fetchData = async () => {
    const {data} = await axios.get('http://localhost:5000/requests')
    setRequests(data.slice(0 , 2))
  }

  useEffect(() => {
    fetchData()
  } , [])

  return (
    <div className="flex p-2 flex-col gap-2 col-start-2 col-end-4 row-start-3 row-end-4 bg-white rounded-lg shadow-customeOne">
      <b className="flex gap-2 items-center py-1"> <TicketIcon className="w-6"/> Requests : </b>
      {
        requests && requests.map((req) => {
          return <Request isMinify={true} key={req.id} {...req}/>
        })
      }
      <Link href="dashboard/requests" className="w-fit flex gap-2 justify-center p-3 shadow-customeTwo bg-neutral-800 text-white font-semibold rounded-lg text-center"> <TicketIcon className="w-6"/> Go to request <ArrowLongRightIcon className="w-6"/> </Link>
    </div>
  )
}

const AgentRequests = () => {
  return (
    <div className="relative p-2 col-start-2 col-end-4 row-start-1 row-end-3 bg-white rounded-lg shadow-customeOne flex flex-col gap-2">
      <b className="flex gap-2 items-center py-1"> <DocumentTextIcon className="w-6"/> Agent requests : </b>
      <AgentReq isMinify={true}/>
      <AgentReq isMinify={true}/>
      <AgentReq isMinify={true}/>
      <AgentReq isMinify={true}/>
      <AgentReq isMinify={true}/>
      <AgentReq isMinify={true}/>
      <Link className="flex gap-2 absolute bottom-2 p-3 shadow-customeTwo rounded-lg bg-neutral-800 text-white text-center font-semibold" href="/dashboard/AgentRequests"> <DocumentTextIcon className="w-6"/> Go to agent requests <ArrowLongRightIcon className="w-6"/> </Link>
    </div>
  )
}

const AgentReq = ({isMinify}) => {
  return (
    <div className="flex gap-2 items-center p-2 rounded-lg shadow-customeOne bg-zinc-50">
      <p className="w-30"><b>Name : </b>Arsalan ghoochani</p>
      <p className="w-32 text-center"><b>Age : </b>27</p>
      <p className="flex-1"><b>Experiance : </b>3 years </p>
    {
      !isMinify && (
        <>
        <p><b>State : </b>California</p>
        <button className="p-2 rounded-lg bg-zinc-100 shadow-customeOne font-semibold">see more</button>
        </>
      )
    }
    </div>
  )
}