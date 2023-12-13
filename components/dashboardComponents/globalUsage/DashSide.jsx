import { useUser } from "@/components/UserRoleProvider";
import { ClipboardDocumentListIcon, ComputerDesktopIcon, EnvelopeIcon, HomeModernIcon, TicketIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { useRouter } from "next/router";

export default function DashSide() {

  const router = useRouter()
  const user = useUser().user
  const setUser = useUser().setUser

  const logOutFn = () => {
    setUser(null)
    router.push("/")
  }

  if (user) return (
    <ul style={{minWidth : '15rem'}} className='h-fit rounded-lg overflow-hidden cursor-pointer shadow-customeOne border-zinc-300'>
      {user.role === "ADMIN" && <AdminParts/>}
      {user.role === "AGENT" && <AgentParts/>}
      <li onClick={logOutFn} className='p-2 hover:bg-zinc-100 flex justify-between'>Log out <ArrowRightOnRectangleIcon className='w-6'/> </li>
    </ul>
  )
}

const AdminParts = () => {
  return (
    <>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Dashboard <ComputerDesktopIcon className='w-6'/> </Link>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard/users" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Users <UserIcon className='w-6'/> </Link>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard/estates" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Estates <HomeModernIcon className='w-6'/> </Link>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard/agents" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Agents <UsersIcon className='w-6'/> </Link>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard/requests" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Requests <TicketIcon className='w-6'/> </Link>
    </>
  )
}

const AgentParts = () => {
  return (
    <>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard/estates" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Estates <HomeModernIcon className='w-6'/> </Link>
      <Link style={{borderBottom : '1px solid rgb(212 , 212 , 216)'}} href="/dashboard/requests" className='p-2 py-3   hover:bg-zinc-100 flex justify-between'>Messages <EnvelopeIcon className='w-6'/> </Link>
    </>
  )
}
