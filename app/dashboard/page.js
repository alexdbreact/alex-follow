'use client'

import MainTable from '@/components/MainTable'



export default function Dashboard() {

  return (
    <div className="space-y-6 animate-fade-in ">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <MainTable />
      </div>     
    </div>
  )
}