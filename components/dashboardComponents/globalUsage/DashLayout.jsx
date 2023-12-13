import DashSide from './DashSide'
import DashContainer from './DashContainer'
import { useUser } from '@/components/UserRoleProvider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function DashLayout({children}) {

  const router = useRouter()

  const user = useUser().user

  useEffect(() => {
    if (!user) router.push("/")
  } , [router])

  if (!user) return <main className="w-full h-80 mx-auto my-4 px-4 flex items-center justify-center gap-4"><h1 className='flex gap-2 font-bold text-5xl'> <ExclamationTriangleIcon className='w-20'/> You dont have permission to enter , please log in </h1></main>

  return (
    <main style={{maxWidth : '1500px'}} className="mx-auto my-4 px-4 flex gap-4">
        <DashSide></DashSide>
        <DashContainer>
            {children}
        </DashContainer>
    </main>
  )
}
