import { BuildingOffice2Icon, BuildingStorefrontIcon, ChevronDownIcon, HomeModernIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FiltersBackground from "./FiltersBackground";

export default function PropertyCom() {

  const [dropDown , setDropDown] = useState(false)

  return (
    <>
    <FiltersBackground display={dropDown} setDisplay={setDropDown}/>
    <div className={`relative ${dropDown && 'z-40'}`}>
        <button onClick={() => setDropDown(!dropDown)} className='flex gap-2 items-center p-[6px] px-2 bg-white shadow-customeOne rounded-md'>Property type <ChevronDownIcon className='w-[1.2rem]'/></button>
        {
          dropDown && (
            <ul className="w-[10rem] absolute rounded-lg shadow-customeOne overflow-hidden top-[120%] cursor-pointer">
              <li className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100">all <Squares2X2Icon className="w-[1.5rem]"/> </li>
              <li className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100 border-t-[1px] border-zinc-300">apartment <BuildingOffice2Icon className="w-[1.5rem]"/> </li>
              <li className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100 border-t-[1px] border-zinc-300">house <HomeModernIcon className="w-[1.5rem]"/> </li>
              <li className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100 border-t-[1px] border-zinc-300">commercial <BuildingStorefrontIcon className="w-[1.5rem]"/> </li>
            </ul>
          )
        }
    </div>
    </>
  )
}
