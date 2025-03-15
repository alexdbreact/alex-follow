import React from 'react'
import AddForm from '@/components/addForm'

const page = () => {
  return (
    <>
    {/* head section */}
    <div className="max-w-md mx-auto mt-4 bg-white shadow-xl rounded-lg overflow-hidden px-2">
              <div className="text-l py-2 px-4 bg-blue-500 text-white text-center rounded-lg  uppercase">
              إضافة موضوع / اجراءات / تعليمات

              </div>
              <AddForm />
              </div>

  </>
  )
}

export default page