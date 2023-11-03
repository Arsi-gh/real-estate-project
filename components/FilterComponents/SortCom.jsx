import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SortCom() {
  return (
    <div>
        <button className='flex gap-2 items-center p-1 px-3 bg-white shadow-customeOne rounded-md'>Sort <ChevronDownIcon className='w-[1.2rem]'/></button>
    </div>
  )
}