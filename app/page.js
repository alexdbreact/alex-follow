"use client";
import { useRouter } from "next/navigation";
import { FaFileSignature } from "react-icons/fa6";
import Image from "next/image";

import "./globals.css"


export default function page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 intro">
   {/*
    <Image
      src={intro}
      width={100}
      height={100}
      alt="intro"
      
      >
        

      </Image>
   
   */}  
   <div className="py-12 px-4 border border-blue-100 flex flex-col justify-center  items-center rounded-lg bg-gradient-to-b from-blue-100 to-transparent">

     <h1 className="text-3xl font-bold mb-6 text-blue-800 ">لوحة التحكم الرئيسية</h1>
      <button
        className="px-16 py-2 bg-blue-500 text-white font-bold	 rounded"
        onClick={() => router.push("/login")}
      >
 تسجيل الدخول      </button>
   </div>
     
    </div>
  );
}
