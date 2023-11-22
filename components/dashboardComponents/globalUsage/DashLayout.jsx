import DashSide from './DashSide'
import DashContainer from './DashContainer'
import { useUser } from '@/components/UserRoleProvider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function DashLayout({children}) {

  const router = useRouter()

  const user = useUser().user

  useEffect(() => {
    if (!user) router.push("/")
  } , [router])

  return (
    <main className="max-w-[1400px] mx-auto my-[1rem] px-[1rem] flex gap-4">
        <DashSide></DashSide>
        <DashContainer>
            {children}
        </DashContainer>
    </main>
  )
}
