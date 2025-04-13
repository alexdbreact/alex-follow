import React from 'react'
import AddMeeting from '@/components/addMeeting'

const page = () => {
  return (
    <>
    {/* head section */}
    <div className="max-w-md mx-auto mt-4 bg-white shadow-xl rounded-lg overflow-hidden px-2">
              <div className="text-l py-2 px-4 bg-teal-500 text-white text-center rounded-lg  uppercase">
              إضافة قرارات اجتماع / اجراءات / تعليمات

              </div>
              <AddMeeting />
              </div>

  </>
  )
}

export default page