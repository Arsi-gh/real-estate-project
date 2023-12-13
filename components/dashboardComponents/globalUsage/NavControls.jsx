import FiltersBackground from '@/components/FilterComponents/FiltersBackground'
import { useUser } from '@/components/UserRoleProvider'
import { ArrowRightOnRectangleIcon, ChevronDownIcon, ComputerDesktopIcon, HeartIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

export default function NavControls({displayAddEstate , displayFavorites}) {

  const user = useUser().user
  const [dropDown , setDropDown] = useState(false)
  
  return (
    <div className='flex gap-1'>
      <button onClick={() => setDropDown(!dropDown)} className='z-30 flex items-center gap-2 p-3 rounded-md font-bold bg-neutral-800 text-white shadow-customeFour'><UserIcon className='w-6'/><ChevronDownIcon strokeWidth={2.5} className={`w-5 transition-all ${dropDown && 'rotate-180'}`}/> </button>
      {
        dropDown && (
          <>
            <FiltersBackground display={dropDown} setDisplay={setDropDown}/>
            <ul onClick={() => setDropDown(false)} className='z-30 flex flex-col w-52 rounded-lg shadow-customeOne overflow-hidden absolute bg-white top-16 transform  right-6'>
              <UserInfo/>
              {(user.role === "ADMIN" || user.role === "AGENT") && (
                <>
                <Link style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} href="/dashboard" className='flex justify-between p-2 px-4 hover:bg-zinc-100 border-zinc-200'>Dashboard <ComputerDesktopIcon className='w-6'/> </Link>
                <AddEstate displayAddEstate={displayAddEstate}/>
                </>
              )}
              {user.role === "USER" && <UserFavorites displayFavorites={displayFavorites}/>}
              <LogOut/>
            </ul>
          </>
        )
      }
    </div>
  )
}

const UserInfo = () => {

  const user = useUser().user

  return (
    <li style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className='flex p-2 gap-2 items-center cursor-default'>
      <UserIcon className='w-12 p-2 rounded-full border-2'/>
      <span>
        <p className='text-sm truncate w-32'>{user.name}</p>
        <p className='text-sm truncate w-32'>{user.email}</p>
      </span>
    </li>
  )
}

const AddEstate = ({displayAddEstate}) => {
  return (
    <li style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => displayAddEstate(true)} className='cursor-pointer flex justify-between p-2 px-4 hover:bg-zinc-100  border-zinc-200'>Add estate <PlusCircleIcon className='w-6'/> </li>
    )
  }
  
const UserFavorites = ({displayFavorites}) => {
  return (
    <li style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => displayFavorites(true)} className='cursor-pointer flex justify-between p-2 px-4 hover:bg-zinc-100  border-zinc-200'>Favorites <HeartIcon className='w-6'/> </li>
  )
}

const LogOut = () => {

  const setUser = useUser().setUser

  return (
    <li style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => setUser(null)} className='cursor-pointer flex justify-between p-2 px-4 hover:bg-zinc-100  border-zinc-200'>Log out <ArrowRightOnRectangleIcon className='w-6'/> </li>
  )
}