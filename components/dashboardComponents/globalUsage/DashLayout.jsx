import DashSide from './DashSide'
import DashContainer from './DashContainer'
import { useUser } from '@/components/UserRoleProvider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function DashLayout({children}) {

  const router = useRouter()

  const user = useUser().user

  // useEffect(() => {
  //   if (!user) router.push("/")
  // } , [router])

  if (!user) return <main className="w-full h-[20rem] mx-auto my-[1rem] px-[1rem] flex items-center justify-center gap-4"><h1 className='flex gap-2 font-bold text-[3rem]'> <ExclamationTriangleIcon className='w-[5rem]'/> You dont have permission to enter , please log in </h1></main>

  return (
    <main className="max-w-[1400px] mx-auto my-[1rem] px-[1rem] flex gap-4">
        <DashSide></DashSide>
        <DashContainer>
            {children}
        </DashContainer>
    </main>
  )
}
