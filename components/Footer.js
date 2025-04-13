import Link from 'next/link'
import { AiFillSignature } from "react-icons/ai";
import { IoDocumentsOutline } from "react-icons/io5";
import { PiFolderStarBold } from "react-icons/pi";

import { FaPeopleRoof } from "react-icons/fa6";







const Footer = () => {
  return (
    <div className="btm-nav ">
      
  <Link href={"../dashboard/new"} className="   border-blue-500 focus:border-blue-900 focus:outline-none bg-orange-200 text-orange-900 focus:bg-blue-700 focus:text-slate-100 hover:animate-pulse hover:animate-infinite 	 ">
  <AiFillSignature fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-sm ">إضافة موضوع</span>
   
  </Link>
 
  <Link href={"../dashboard"} className="hover:animate-[pulse_1s_ease-in-out_infinite] active:animate-[pulse_3s_ease-in-out_infinite] focus:animate-[pulse_3s_ease-in-out_infinite] focus:border-blue-900 focus:outline-none  bg-fuchsia-200 text-fuchsia-900 focus:bg-blue-700 focus:text-slate-100 ">
   

   
  <IoDocumentsOutline fontSize="1.5em" />
  <span className="btm-nav-label text-center text-sm">متابعة موضوع</span>



  </Link>
 
  <Link href={"../dashboard/vipdashboard"} className="  focus:border-blue-900 focus:outline-none  bg-teal-200 text-teal-900 focus:bg-blue-700 focus:text-slate-100 ">
  <PiFolderStarBold fontSize="1.5em"/>

  <span className="btm-nav-label text-center text-sm"> الموضوعات الهامة</span>
   
  </Link>
  
  <Link href={"../dashboard/allSending"} className="  focus:border-blue-900 focus:outline-none  bg-rose-200 text-rose-900 focus:bg-blue-700 focus:text-slate-100 ">
  <FaPeopleRoof  fontSize="1.5em"/>

    <span  className="btm-nav-label text-center text-sm ">متابعة إجتماع</span>
   
  </Link>
 
</div>
  )
}

export default Footer