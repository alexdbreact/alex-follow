'use client'

import { useState } from 'react'
import AllTable from '@/components/AllTable'




export default function Dashboard() {

  return (
    <div className="space-y-2 animate-fade-in">
      <div dir='rtl' className="flex justify-between items-center ">
        <h1 className=" pt-2 text-2xl font-bold text-teal-800 text-center mr-4 ">نتائج الإجتماعات و القرارات و التعليمات الصادرة</h1>
        
       
      </div>

      <div className="bg-white rounded-lg shadow-lg p-2">
        <AllTable />
      </div>

    
    </div>
  )
}