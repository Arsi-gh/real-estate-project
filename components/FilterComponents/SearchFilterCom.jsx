import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchCom() {
  return (
    <div className="flex gap-2 items-center">
        <input type="text" className="bg-white shadow-customeOne rounded-md p-[6px] px-2 text-base outline-neutral-800" placeholder="Search"/>
        <MagnifyingGlassIcon strokeWidth={2} className="w-[2.2rem] p-2  rounded-md text-white bg-neutral-800 cursor-pointer"/>
    </div>
  )
}

