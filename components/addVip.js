"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowUpWideShort } from "react-icons/fa6";

import  {SignArea}  from "./SignArea";



const Form = () => {

 

  const [tit, setTit] = useState("");
  const [summ, setSumm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDateout, setStartDateout] = useState("");
  const [start, setStart] = useState("");
  const [tash, setTash] = useState("");
  const [imporatnce, setImporatnce] = useState("");
  const [refer, setRefer] = useState("");
 
   const [respo1, setRespo1] = useState("");
   const [respo2, setRespo2] = useState("");
   const [respo3, setRespo3] = useState("");
   const [respo4, setRespo4] = useState("");
      
      const [from1, setFrom1] = useState("");
      const [from2, setFrom2] = useState("");
      const [from3, setFrom3] = useState("");
      const [from4, setFrom4] = useState("");
     
      const [datos1, setDatos1] = useState("");
      const [datos2, setDatos2] = useState("");
      const [datos3, setDatos3] = useState("");
      const [datos4, setDatos4] = useState("");
      
      const [statuz, setStatuz] = useState("");
      const [comment, setComment] = useState("");

 

  
  const [isDisabled, setIsDisabled] = useState(false);  
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
  
    if (!tit || !start ) {
      alert("يجب ادخال العنوان و الجهة الوارد منها");
      return;
    }
  
    try {
      const res = await fetch("/api/mains", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({  tit, summ, start, tash, startDate, startDateout, place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3, respo4, from1, from2, from3, from4, datos1, datos2, datos3, datos4, statuz, comment , refer }),
      });
  
      if (res.ok) {
        router.push("/dashboard");
        alert("تم إضافة الموضوع بنجاح .. شكراً لسيادتكم");
      } else {
        throw new Error("Failed to create a item");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
    

 

 

  return (
    <form
      name="new"
      id="new"
    //   autoComplete="on"
      className="mx-auto mt-2 max-w-xl sm:mt-10 px-2 "
      onSubmit={handleSubmit}
    >
      {/*  Title */}
      <div className="bg-white py-2 px-4 rounded-lg">
        <div className="relative bg-inherit">
          <input
            dir="rtl"
            type="text"
            id="title"
            name="title"
            value={tit}
            onChange={(e) => setTit(e.target.value)}
            className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder="عنوان الموضوع"
          />
          <label
            htmlFor="title"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            عنوان الموضوع
          </label>
        </div>
      </div>
      {/* Summary */}

      <div className="bg-white py-2 px-4 rounded-lg">
        <div className="relative bg-inherit ">
          <textarea
            dir="rtl"
            type="textarea"
            id="summary"
            name="title"
            value={summ}
            onChange={(e) => setSumm(e.target.value)}
            className=" text-wrap peer bg-transparent h-20 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder="ملخص / وصف الموضوع "
            rows={2}
          />
          <label
            htmlFor="summary"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            ملخص / وصف الموضوع
          </label>
        </div>
      </div>

      {/* comming Date */}
      <div dir="rtl" className="bg-white py-2 px-4 rounded-lg sm:col-span-1">
        <div className="relative bg-inherit ">
          <DatePicker
            selected={startDate}
            dateFormat="dd/MM/yyyy" 
            onChange={(date) => setStartDate(date)}
            className="  h-10  rounded-lg text-gray-900  ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />

          <CiCalendarDate
            className="absolute right-32 top-0 text-sky-300 "
            fontSize="2.5em"
          />

          <label
            htmlFor="summary"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            تاريخ الوارد
          </label>
        </div>
      </div>
      {/* Start */}
      <div className="bg-white py-2 px-4 rounded-lg">
        <div className="relative bg-inherit">
          <input
            dir="rtl"
            type="text"
            id="start"
            name="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
            placeholder=" الجهة الوارد منها "
          />
          <label
            htmlFor="start"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
 الجهة الوارد منها           </label>
        </div>
      </div>
      {/* التاشيره */}
      <div className="bg-white py-2 px-4 rounded-lg">
        <div className="relative bg-inherit">
          <textarea
            dir="rtl"
            type="text"
            id="signature"
            name="signature"
            value={tash}
          onChange={(e) => setTash(e.target.value)}
          placeholder=" التأشيرة الصادرة  "
          className=" text-wrap peer bg-transparent h-16 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />
          <label
            htmlFor="signature"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
التأشيرة الصادرة           </label>
        </div>
      </div>
      {/*   importance */}

       <div dir="rtl" className="py-2 px-8 bg-sky-200 rounded-lg m-2">
              <details className="group">

                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <FaArrowUpWideShort fontSize="1.5em" className=" ml-2 "/>
      
                  <span>درجة الأهمية</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
      
                <select
                value={imporatnce}
                onChange={(e) => setImporatnce(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              >
                <option value="هام">هام</option>
                  <option value="عاجل">عاجل</option>
                  
                  <option value="عاجل جداً">عاجل جداً</option>
                
              </select>
              </details>
            </div>
       {/* out Date */}
       <div dir="rtl" className="bg-white py-2 px-4 rounded-lg sm:col-span-1">
        <div className="relative bg-inherit ">
          <DatePicker
            selected={startDateout}
            onChange={(date) => setStartDateout(date)}
            dateFormat="dd/MM/yyyy"
            className="  h-10  rounded-lg text-gray-900  ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />

          <CiCalendarDate
            className="absolute right-32 top-0 text-sky-300 "
            fontSize="2.5em"
          />

          <label
            htmlFor="summary"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            تاريخ التأشيرة/ الإجراء
          </label>

        </div>
  

      </div>
    
    
      {/* test */}
    <SignArea />
{/* reference number */}
<div className="bg-white py-4 px-4 rounded-lg">
        <div className="relative bg-inherit">
          <input
            dir="rtl"
            type="tel"
            id="refer"
            name="refer"
            placeholder="رقم مرجعي"
            value={refer}
            onChange={(e) => setRefer(e.target.value)}
            className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />
          <label
           htmlFor="refer"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            رقم مرجعي
          </label>
        </div>
      </div>

   

      {/* Submit Button */}
      <div className="sm:col-span-4 m-auto text-center ">
        <button
          type="submit"
          disabled={isDisabled}
          className=" m-4 mb-8 rounded bg-blue-500 px-12 py-2 text-white focus:outline-none"
        >
          {isDisabled ? "جاري الإرسال..." : "إضافة الموضوع "}
        </button>
      </div>
    </form>
  );
};

export default Form;
