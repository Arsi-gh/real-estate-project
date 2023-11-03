import { ComputerDesktopIcon, HomeModernIcon, PlusIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

export default function DashSide() {
  return (
    <ul className='h-fit rounded-lg overflow-hidden cursor-pointer w-[15rem] border-[1px] border-zinc-300'>
      <AdminDashParts/>
      <li className='p-2 border-t-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Log out <ArrowRightOnRectangleIcon className='w-[1.5rem]'/> </li>
    </ul>
  )
}

function AdminDashParts ()  {
    return (
      <>
        <Link href="/dashboard" className='p-2 py-3 hover:bg-zinc-100 flex justify-between'>Dashboard <ComputerDesktopIcon className='w-[1.5rem]'/> </Link>
        <Link href="/dashboard/users" className='p-2 py-3 border-t-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Users <UserIcon className='w-[1.5rem]'/> </Link>
        <Link href="/dashboard/estates" className='p-2 py-3 border-t-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Estates <HomeModernIcon className='w-[1.5rem]'/> </Link>
        <Link href="/dashboard/requests" className='p-2 py-3 border-t-[1px] border-zinc-300 hover:bg-zinc-100 flex justify-between'>Requests <TicketIcon className='w-[1.5rem]'/> </Link>
      </>
    )
  }
