import { BuildingOffice2Icon, BuildingStorefrontIcon, ChevronDownIcon, HomeModernIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FiltersBackground from "./FiltersBackground";

export default function PropertyCom() {

  const [dropDown , setDropDown] = useState(false)

  return (
    <>
    <FiltersBackground display={dropDown} setDisplay={setDropDown}/>
    <div className={`relative ${dropDown && 'z-40'}`}>
        <button onClick={() => setDropDown(!dropDown)} className='flex gap-2 items-center p-2 px-2 bg-white shadow-customeOne rounded-md'>Property type <ChevronDownIcon className='w-5'/></button>
        {
          dropDown && (
            <ul className="w-40 absolute rounded-lg shadow-customeOne overflow-hidden top-12 cursor-pointer">
              <li className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100">all <Squares2X2Icon className="w-6"/> </li>
              <li style={{borderTop : '1px solid rgb(212 , 212 , 216)'}} className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100">apartment <BuildingOffice2Icon className="w-6"/> </li>
              <li style={{borderTop : '1px solid rgb(212 , 212 , 216)'}} className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100">house <HomeModernIcon className="w-6"/> </li>
              <li style={{borderTop : '1px solid rgb(212 , 212 , 216)'}} className="flex justify-between gap-2 p-2 px-4 bg-white hover:bg-zinc-100">commercial <BuildingStorefrontIcon className="w-6"/> </li>
            </ul>
          )
        }
    </div>
    </>
  )
}
