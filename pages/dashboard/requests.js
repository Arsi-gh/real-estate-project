import RequestList from '@/components/dashboardComponents/adminComponents/RequestList'
import DashLayout from '@/components/dashboardComponents/globalUsage/DashLayout'
import React from 'react'

export default function Requests() {
    return (
        <DashLayout>
            <RequestList/>
        </DashLayout>
      )
}