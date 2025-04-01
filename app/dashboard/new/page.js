import React from 'react'
import AddForm from '@/components/addForm'
import { PiFolderStarBold } from "react-icons/pi";
import Link from 'next/link'
import { SiBeatstars } from "react-icons/si";

const page = () => {
  return (
    <>
    {/* head section */}
    <div className="max-w-md mx-auto mt-4 bg-white shadow-xl rounded-lg overflow-hidden px-2">
     <div className='flex flex-row justify-evenly'>
      <Link href={"../dashboard/vipdashboard"} className="  btn bg-teal-200  text-center mb-2 mr-2 p-2 ">
   

   
   <PiFolderStarBold fontSize="2em" className='text-teal-700' />
   <span className=" text-center text-lg text-teal-700">الموضوعات الهامة</span>
 
 
 
   </Link>
    <Link href={"../dashboard/vip"} className="  btn bg-indigo-200 text-center mb-2 p-2 ">
   

   
   <SiBeatstars fontSize="2em" className='text-indigo-700'/>
   <span className=" text-center text-lg text-indigo-700">إضافة موضوع هام</span>
 
 
 
   </Link>
      </div>
              <div className="text-l py-2 px-4 bg-blue-500 text-white text-center rounded-lg  uppercase">
              إضافة موضوع / اجراءات / تعليمات

              </div>
              <AddForm />
              </div>

  </>
  )
}

export default page
