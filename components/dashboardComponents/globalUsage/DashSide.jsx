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
    <ul className='h-fit rounded-lg overflow-hidden cursor-pointer min-w-[15rem] border-[1px] border-zinc-300'>
      {user.role === "ADMIN" && <AdminParts/>}
      {user.role === "AGENT" && <AgentParts/>}
      {user.role === "USER" && <UserParts/>}
      <li onClick={logOutFn} className='p-2 hover:bg-zinc-100 flex justify-between'>Log out <ArrowRightOnRectangleIcon className='w-[1.5rem]'/> </li>
    </ul>
  )
}

const AdminParts = () => {

  const userRole = useUser()

  return (
    <>
      <Link href="/dashboard" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Dashboard <ComputerDesktopIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/users" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Users <UserIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/estates" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Estates <HomeModernIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/agents" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Agents <UsersIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/agent-req" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Agent requests <ClipboardDocumentListIcon className='w-[1.5rem]'/></Link>
      <Link href="/dashboard/requests" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Requests <TicketIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/requests" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Messages <EnvelopeIcon className='w-[1.5rem]'/> </Link>
    </>
  )
}

const AgentParts = () => {
  return (
    <>
      <Link href="/dashboard/estates" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Estates <HomeModernIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/requests" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Messages <EnvelopeIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/requests" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Requests <TicketIcon className='w-[1.5rem]'/> </Link>
    </>
  )
}

const UserParts = () => {
  return (
    <>
      <Link href="/dashboard/requests" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Messages <EnvelopeIcon className='w-[1.5rem]'/> </Link>
      <Link href="/dashboard/requests" className='p-2 py-3 border-b-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Requests <TicketIcon className='w-[1.5rem]'/> </Link>
    </>
  )
}