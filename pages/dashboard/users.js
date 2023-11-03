import UsersList from '@/components/dashboardComponents/adminComponents/UsersList'
import DashLayout from '@/components/dashboardComponents/globalUsage/DashLayout'
import React from 'react'

export default function Users() {
  return (
    <DashLayout>
        <UsersList/>
    </DashLayout>
  )
}
