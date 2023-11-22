import FiltersBackground from '@/components/FilterComponents/FiltersBackground'
import { useUser } from '@/components/UserRoleProvider'
import { ArrowRightOnRectangleIcon, ChevronDownIcon, ComputerDesktopIcon, HeartIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useState } from 'react'

export default function NavControls({displayAddEstate}) {

  const user = useUser().user
  const [dropDown , setDropDown] = useState(false)
  
  return (
    <div className='flex gap-1'>
      <button onClick={() => setDropDown(!dropDown)} className='z-30 flex items-center gap-2 p-[10px] rounded-md font-bold bg-neutral-800 text-white shadow-customeFour'><UserIcon className='w-[1.5rem]'/><ChevronDownIcon strokeWidth={2.5} className={`w-[1.2rem] transition-all ${dropDown && 'rotate-180'}`}/> </button>
      {
        dropDown && (
          <>
            <FiltersBackground display={dropDown} setDisplay={setDropDown}/>
            <ul onClick={() => setDropDown(false)} className='z-30 flex flex-col w-[13rem] rounded-lg border-[1px] overflow-hidden absolute bg-white top-[57px] right-6'>
              <UserInfo/>
              <Link href="/dashboard" className='flex justify-between p-2 px-4 hover:bg-zinc-100 border-t-[1px] border-zinc-200'>Dashboard <ComputerDesktopIcon className='w-[1.5rem]'/> </Link>
              {(user.role === "ADMIN" || user.role === "AGENT") && <AddEstate displayAddEstate={displayAddEstate}/>}
              {user.role === "USER" && <UserFavorites/>}
              <LogOut/>
            </ul>
          </>
        )
      }
    </div>
  )
}

const UserInfo = () => {
  return (
    <li className='flex p-2 gap-2 items-center cursor-default'>
      <UserIcon className='w-[3rem] p-2 rounded-full border-2'/>
      <span>
        <p className='text-sm'>Arsalan ghoochani</p>
        <p className='text-sm'>09136955525</p>
      </span>
    </li>
  )
}

const AddEstate = ({displayAddEstate}) => {
  return (
    <li onClick={() => displayAddEstate(true)} className='cursor-pointer flex justify-between p-2 px-4 hover:bg-zinc-100  border-t-[1px] border-zinc-200'>Add estate <PlusCircleIcon className='w-[1.5rem]'/> </li>
    )
  }
  
const UserFavorites = () => {
  return (
    <li className='cursor-pointer flex justify-between p-2 px-4 hover:bg-zinc-100  border-t-[1px] border-zinc-200'>Favorites <HeartIcon className='w-[1.5rem]'/> </li>
  )
}

const LogOut = () => {

  const setUser = useUser().setUser

  return (
    <li onClick={() => setUser(null)} className='cursor-pointer flex justify-between p-2 px-4 hover:bg-zinc-100  border-t-[1px] border-zinc-200'>Log out <ArrowRightOnRectangleIcon className='w-[1.5rem]'/> </li>
  )
}