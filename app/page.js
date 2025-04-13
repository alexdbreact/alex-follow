"use client";
import { useRouter } from "next/navigation";
import { GoSignIn } from "react-icons/go";
import Image from "next/image";
import intro from "../public/4.jpg"


import "./globals.css"


export default function page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
 <Image
    className=" h-screen w-full absolute bg-center  "
      src={intro}
     
      alt="intro"
      
      >
        

      </Image>
   <div className=" z-50 py-12 px-4 mb-36 border border-blue-100 flex flex-col justify-center  items-center rounded-lg bg-gradient-to-b from-blue-100 to-transparent">

     <h1 className="text-3xl font-bold mb-6 text-blue-800 ">لوحة التحكم الرئيسية</h1>
      <button
        className="px-16 py-2 bg-blue-500 text-white font-bold	 rounded"
        onClick={() => router.push("/login")}
      >
    
         <span className="flex flex-row justify-around items-center">
         <GoSignIn className="pr-4" fontSize="2.5em" />    تسجيل الدخول 
         </span>

     </button>
   </div>
     
    </div>
  );
}
