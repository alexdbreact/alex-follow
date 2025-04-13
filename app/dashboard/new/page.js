import React from 'react'
import AddForm from '@/components/addForm'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Link from 'next/link'
import { SiBeatstars } from "react-icons/si";



const page = () => {
  return (
    <>
    {/* head section */}
    <div className="max-w-md mx-auto mt-2 bg-white shadow-xl rounded-lg overflow-hidden px-2">
      <div className='flex flex-row justify-evenly'>
      <Link href={"../dashboard/meeting"} className="  btn bg-teal-200  text-center mb-2 mr-2 p-2 ">
   

   
   <HiOutlineClipboardDocumentList fontSize="2em" className='text-teal-700' />
   <span className=" text-center text-lg text-teal-700"> إضافة اجتماع</span>
 
 
 
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