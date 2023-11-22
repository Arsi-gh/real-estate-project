import SearchCom from "@/components/FilterComponents/SearchFilterCom";
import SortCom from "@/components/FilterComponents/SortFilterCom";
import { EnvelopeIcon, EyeIcon } from "@heroicons/react/24/outline";
import AgentModal, { AgentMessageForm } from "./AgentModal";
import { useState } from "react";
import MessageForm from "./MessageForm";

export default function AgentsList() {

  const [displayAgent , setDisplayAgent] = useState(false)
  const [displayMessage , setDisplayMessage] = useState(false)

  return (
    <div className="w-full p-4">
        <div className="flex gap-2 items-center">
            <span className="font-bold">Filter : </span>
            <SortCom/>
            <SearchCom/>
        </div>
        <div className="flex gap-3 pt-4">
          <AgentsCon displayAgent={setDisplayAgent} displayMessage={setDisplayMessage}/>
          <MessageForm to="agents"/>
        </div>
        {displayAgent && <AgentModal setDisplay={setDisplayAgent}/>}
        {displayMessage && <AgentMessageForm setDisplay={setDisplayMessage}/>}
    </div>
  )
}

const AgentsCon = ({displayAgent , displayMessage}) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <AgentItem displayAgent={displayAgent} displayMessage={displayMessage}/>
      <AgentItem displayAgent={displayAgent} displayMessage={displayMessage}/>
      <AgentItem displayAgent={displayAgent} displayMessage={displayMessage}/>
      <AgentItem displayAgent={displayAgent} displayMessage={displayMessage}/>
      <AgentItem displayAgent={displayAgent} displayMessage={displayMessage}/>
    </div>
  )
}

const AgentItem = ({displayAgent , displayMessage}) => {
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
        <EnvelopeIcon onClick={() => displayMessage(true)} className="cursor-pointer w-[1.6rem]"/>
        <EyeIcon onClick={() => displayAgent(true)} className="cursor-pointer w-[1.6rem]"/>
      </span>
    </div>
  )
}