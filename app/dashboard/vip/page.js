import React from 'react'
import AddVip from '@/components/addVip'
import { PiFolderStarBold } from "react-icons/pi";
import Link from 'next/link'
import { SiBeatstars } from "react-icons/si";



const page = () => {
  return (
    <>
    {/* head section */}
    <div className="max-w-md mx-auto mt-4 bg-white shadow-xl rounded-lg overflow-hidden px-2">
    
   
              <div className="text-l py-2 px-4 bg-blue-500 text-white text-center rounded-lg  uppercase">
              إضافة موضوع / ملف هام

              </div>
              <AddVip />
              </div>

  </>
  )
}

export default page