import SearchCom from "@/components/FilterComponents/SearchFilterCom";
import SortCom from "@/components/FilterComponents/SortFilterCom";
import { EnvelopeIcon, EyeIcon } from "@heroicons/react/24/outline";
import AgentModal from "./AgentModal";
import { useState } from "react";

export default function AgentsList() {

  const [displayAgent , setDisplayAgent] = useState(false)

  return (
    <div className="w-full p-4">
        <div className="flex gap-2 items-center">
            <span className="font-bold">Filter : </span>
            <SortCom/>
            <SearchCom/>
        </div>
        <div className="flex gap-3 pt-4">
          <AgentsCon displayAgent={setDisplayAgent}/>
          <AgentsInformForm/>
        </div>
        {displayAgent && <AgentModal setDisplay={setDisplayAgent}/>}
    </div>
  )
}

const AgentsCon = ({displayAgent}) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <AgentItem displayAgent={displayAgent}/>
      <AgentItem displayAgent={displayAgent}/>
      <AgentItem displayAgent={displayAgent}/>
      <AgentItem displayAgent={displayAgent}/>
      <AgentItem displayAgent={displayAgent}/>
    </div>
  )
}

const AgentsInformForm = () => {
    return (
        <form className="w-[18rem] h-fit flex flex-col gap-2 bg-white p-2 rounded-lg shadow-customeOne">
          <h3 className="flex gap-2 items-center"> <EnvelopeIcon className="w-[1.5rem]"/> Send message to all agents</h3>
          <input className="bg-slate-50 p-2 px-4 outline-neutral-800 rounded-md shadow-customeOne" placeholder="Title" type="text" name="title" />
          <textarea className="bg-slate-50 h-[26rem] outline-neutral-800 p-2 px-4 rounded-md shadow-customeOne" placeholder="Description"></textarea>
          <button className="p-2 px-4 rounded-md shadow-customeOne text-white bg-neutral-800">Send message</button>
        </form>
    )
}

const AgentItem = ({displayAgent}) => {
  return (
    <div className="bg-white justify-between p-2 pl-4 rounded-lg shadow-customeOne flex gap-2 items-center">
      <span>1</span>
      <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
      <p className="">Arsalan ghoochani</p>
      <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
      <p><b>Added properties : </b>22</p>
      <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
      <p><b>Hired since : </b>1 year ago</p>
      <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
      <span className="flex gap-4">
        <EnvelopeIcon className="cursor-pointer w-[1.6rem]"/>
        <EyeIcon onClick={() => displayAgent(true)} className="cursor-pointer w-[1.6rem]"/>
      </span>
    </div>
  )
}