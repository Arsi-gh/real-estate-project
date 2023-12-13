import { BarsArrowDownIcon, BarsArrowUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FiltersBackground from "./FiltersBackground";

export default function SortCom() {

  const [dropDown , setDropDown] = useState(false)

  return (
    <>
    <FiltersBackground display={dropDown} setDisplay={setDropDown}/>
    <div className={`relative ${dropDown && 'z-40'}`}>
        <button onClick={() => setDropDown(!dropDown)} className='flex gap-2 items-center p-2 px-2 bg-white shadow-customeOne rounded-md'>Sort <ChevronDownIcon className='w-5'/></button>
        {
          dropDown && (
            <ul className="absolute rounded-lg shadow-customeOne overflow-hidden top-12 cursor-pointer">
              <li className="flex gap-2 p-2 px-4 bg-white hover:bg-zinc-100">Ascending <BarsArrowUpIcon className="w-6"/> </li>
              <li style={{borderTop : '1px solid rgb(212 , 212 , 216)'}} className="flex gap-2 p-2 px-4 bg-white hover:bg-zinc-100 border-zinc-300">Decending <BarsArrowDownIcon className="w-6"/> </li>
            </ul>
          )
        }
    </div>
    </>
  )
}
