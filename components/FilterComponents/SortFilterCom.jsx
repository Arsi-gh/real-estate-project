import { BarsArrowDownIcon, BarsArrowUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FiltersBackground from "./FiltersBackground";

export default function SortCom() {

  const [dropDown , setDropDown] = useState(false)

  return (
    <>
    <FiltersBackground display={dropDown} setDisplay={setDropDown}/>
    <div className={`relative ${dropDown && 'z-40'}`}>
        <button onClick={() => setDropDown(!dropDown)} className='flex gap-2 items-center p-[6px] px-2 bg-white shadow-customeOne rounded-md'>Sort <ChevronDownIcon className='w-[1.2rem]'/></button>
        {
          dropDown && (
            <ul className="absolute rounded-lg shadow-customeOne overflow-hidden top-[120%] cursor-pointer">
              <li className="flex gap-2 p-2 px-4 bg-white hover:bg-zinc-100">Ascending <BarsArrowUpIcon className="w-[1.5rem]"/> </li>
              <li className="flex gap-2 p-2 px-4 bg-white hover:bg-zinc-100 border-t-[1px] border-zinc-300">Decending <BarsArrowDownIcon className="w-[1.5rem]"/> </li>
            </ul>
          )
        }
    </div>
    </>
  )
}
