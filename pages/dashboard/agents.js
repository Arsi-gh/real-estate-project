import AgentsList from '@/components/dashboardComponents/adminComponents/AgentsList'
import DashLayout from '@/components/dashboardComponents/globalUsage/DashLayout'
import React from 'react'

export default function Agents() {
  return (
    <DashLayout>
        <AgentsList/>
    </DashLayout>
  )
}
