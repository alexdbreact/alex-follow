import Link from 'next/link'
import { AiFillSignature } from "react-icons/ai";
import { GrMultiple } from "react-icons/gr";
import { IoDocumentsOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaPeopleRoof } from "react-icons/fa6";







const Footer = () => {
  return (
    <div className="btm-nav ">
      
  <Link href={"../dashboard/new"} className="   border-blue-500 focus:border-blue-900 focus:outline-none bg-orange-200 text-orange-900 focus:bg-blue-700 focus:text-slate-100 	 ">
  <AiFillSignature fontSize="1.5em"/>

    <span className="btm-nav-label text-center text-sm">إضافة موضوع</span>
   
  </Link>
 
  <Link href={"../dashboard"} className="   focus:border-blue-900 focus:outline-none  bg-fuchsia-200 text-fuchsia-900 focus:bg-blue-700 focus:text-slate-100 ">
   

   
  <IoDocumentsOutline fontSize="1.5em" />
  <span className="btm-nav-label text-center text-sm">متابعة موضوع</span>



  </Link>
 
  <Link href={"../dashboard/meeting"} className="  focus:border-blue-900 focus:outline-none  bg-teal-200 text-teal-900 focus:bg-blue-700 focus:text-slate-100 ">
  <HiOutlineClipboardDocumentList fontSize="1.5em"/>

  <span className="btm-nav-label text-center text-sm">إضافة اجتماع</span>
   
  </Link>
  
  <Link href={"../dashboard/allSending"} className="  focus:border-blue-900 focus:outline-none  bg-rose-200 text-rose-900 focus:bg-blue-700 focus:text-slate-100 ">
  <FaPeopleRoof  fontSize="1.5em"/>

    <span  className="btm-nav-label text-center text-sm ">متابعة إجتماع</span>
   
  </Link>
 
</div>
  )
}

export default Footer