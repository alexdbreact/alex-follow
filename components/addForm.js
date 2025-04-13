"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import { IoStorefrontOutline } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { SiHomeassistant } from "react-icons/si";

import  {SignArea}  from "./SignArea";



const Form = () => {

 

  const [records, setRecords] = useState(0);
  const [tit, setTit] = useState("");
  const [summ, setSumm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDateout, setStartDateout] = useState("");
  const [start, setStart] = useState("");
  const [tash, setTash] = useState("");
  const [importance, setImportance] = useState("");
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
      const [place, setPlace] = useState("");
      const [place2, setPlace2] = useState("");
      const [place3, setPlace3] = useState("");
      const [place4, setPlace4] = useState("");
      const [place5, setPlace5] = useState("");
      const [place6, setPlace6] = useState("");
      const [place7, setPlace7] = useState("");
      

      const [place8, setPlace8] = useState("");
      const [place9, setPlace9] = useState("");
      const [place10, setPlace10] = useState("");
      const [place11, setPlace11] = useState("");
      const [place12, setPlace12] = useState("");
      const [place13, setPlace13] = useState("");
      const [place14, setPlace14] = useState("");
      const [place15, setPlace15] = useState("");
      const [place16, setPlace16] = useState("");
      const [place17, setPlace17] = useState("");
      const [place18, setPlace18] = useState("");
      const [place19, setPlace19] = useState("");
      
      const [place20, setPlace20] = useState("");
      const [place21, setPlace21] = useState("");
      const [place22, setPlace22] = useState("");
      const [place23, setPlace23] = useState("");
      const [place25, setPlace25] = useState("");
      const [place26, setPlace26] = useState("");
      const [place27, setPlace27] = useState("");
      const [place28, setPlace28] = useState("");
      const [place29, setPlace29] = useState("");
      const [place30, setPlace30] = useState("");

 

  
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
        body: JSON.stringify({ records,tit, summ, start, tash, startDate, startDateout,importance,place,  place2, place3 , place4 ,place5,place6,place7, place8,place9,place10,place11,place12,place13,place14,place15,place16,place17,place18,place19,place20,place21,place22,place23,place25,place26,place27,place28,place29,place30,respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer }),
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
      className="mx-auto mt-1 max-w-xl sm:mt-4 px-2 "
      onSubmit={handleSubmit}
    >
      {/* reference number */}
<div className="bg-white py-1 px-4 rounded-lg flex flex-row-reverse justify-center items-center">

        <div className="relative bg-inherit">
          <input
            dir="rtl"
            type="tel"
            id="records"
            name="records"
            placeholder="رقم التسجيل"
            value={records}
            onChange={(e) => setRecords(e.target.value)}
            className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />
          <label
           htmlFor="records"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            رقم التسجيل
          </label>
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
      </div>
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

      {/* comming Date

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
      
      
      */}
    
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
                value={importance}
                onChange={(e) => setImportance(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              >
                <option value="">اختر درجة الأهمية</option>
                <option value="هام">هام</option>
                  <option value="عاجل">عاجل</option>
                  
                  <option value="عاجل جداً">عاجل جداً</option>
                
              </select>
              </details>
            </div>
       {/* out Date */}
       <div dir="rtl" className="bg-white py-2 px-4 rounded-lg sm:col-span-1 flex flex-row-reverse justify-center items-center">
        {/* reference number */}
<div className="bg-white py-4 px-4 rounded-lg">
        <div className="relative bg-inherit">
          <input
            dir="rtl"
            type="tel"
            id="refer"
            name="refer"
            placeholder="رقم الصادر"
            value={refer}
            onChange={(e) => setRefer(e.target.value)}
            className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />
          <label
           htmlFor="refer"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            رقم الصادر
          </label>
        </div>
      </div>
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
     <div>
              <div dir="rtl" className=" relative w-full  bg-white px-2 py-2 mt-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl rounded-xl sm:px-2">
      <div className="mx-auto  ">
        <div className="flex flex-col items-center w-full">
          <h2 className="mt-0 text-center text-xl font-bold tracking-tight md:text-xl text-sky-700">
    نطاق التأشيرة      </h2>
      
        </div>
        <div className="mx-auto mt-2 grid max-w-xl divide-y divide-slate-100 ">
        <fieldset className="fieldset p-2 bg-sky-50 border border-black-900 rounded-box w-full shadow-xl">
      <legend className="fieldset-legend p-1 text-sky-600">مكاتب قيادية</legend>
      <div>
      <label className="fieldset-label px-1">
      <input type="checkbox" 
      
          checked={place5}
          onChange={() => setPlace5("نائب المحافظ")}
          className="checkbox checkbox-sm checkbox-info" />
    نائب المحافظ  </label>
      </div>
      <div>
      <label className="fieldset-label px-1">
      <input type="checkbox"  className="checkbox checkbox-sm checkbox-info" 
         checked={place6}
         onChange={() => setPlace6("السكرتير العام")}/>
      <span > السكرتير العام  </span>   </label>
      </div>
      <div>
      <label className="fieldset-label px-1">
        <input type="checkbox"  className="checkbox checkbox-sm checkbox-info" 
          checked={place7}
          onChange={() => setPlace7("السكرتير العام المساعد")}/>
                      <span > السكرتير العام المساعد </span>
    
    </label>
      </div>
      
      
      
    </fieldset>
         
        <div className="py-2 px-2 bg-sky-300 rounded-lg mt-2 ">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <IoStorefrontOutline fontSize="1.5em" className=" ml-2 "/>
    
              <span> الإدارات العامة و المركزية -1- </span>
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
              <fieldset className="fieldset p-2 bg-sky-50 border border-black-900 rounded-box w-full shadow-xl">
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place8}
          onChange={() => setPlace8("الإدارة المركزيه للسياحه و المصايف")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة المركزيه للسياحه و المصايف </span>
      </label>
    </div>
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place9}
          onChange={() => setPlace9("الإدارة العامة للنظافة و تجميل المدينة")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة المركزيه للنظافة و تجميل المدينة </span>
      </label>
    </div>
     
            
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place10}
          onChange={() => setPlace10("الإدارة العامة للشئون القانونية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للشئون القانونية </span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place11}
          onChange={() => setPlace11("الإدارة العامة للشئون المالية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للشئون المالية </span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place12}
          onChange={() => setPlace12("الإدارة العامة للتخطيط و التنمية العمرانية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2" >الإدارة العامة للتخطيط و التنمية العمرانية </span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place13}
          onChange={() => setPlace13("مكتب المستشار القانوني")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">مكتب المستشار القانوني</span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place14}
          onChange={() => setPlace14("جهاز حماية أملاك الدولة")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">جهاز حماية أملاك الدولة</span>
      </label>
    </div>
     
      
      
    </fieldset>
            </details>
          </div>
        <div className="py-2 px-2 bg-sky-200 rounded-lg mt-2 ">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <IoStorefrontOutline fontSize="1.5em" className=" ml-2 "/>
    
              <span> الإدارات العامة و المركزية -2- </span>
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
              <fieldset className="fieldset p-2 bg-sky-50 border border-black-900 rounded-box w-full shadow-xl">
            
     
            
     
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place15}
          onChange={() => setPlace15("إدارة الحفاظ علي التراث")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">إدارة الحفاظ علي التراث</span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place16}
          onChange={() => setPlace16("الإدارة العامة للموارد البشرية ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للموارد البشرية </span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place17}
          onChange={() => setPlace17("الإدارة العامة للتخطيط و المتابعة ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للتخطيط و المتابعة </span>
      </label>
    </div>
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place18}
          onChange={() => setPlace18("الإدارة العامة للشئون الإدارية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للشئون الإدارية </span>
      </label>
    </div>
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place19}
          onChange={() => setPlace19("الإدارة العامة للمتابعة ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للمتابعة </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place20}
          onChange={() => setPlace20("الإدارة العامة للمشروعات و الورش ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للمشروعات و الورش </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place21}
          onChange={() => setPlace21("الإدارة العامة للعلاقات العامة ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للعلاقات العامة </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place22}
          onChange={() => setPlace22("الإدارة العامة للأمن ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للأمن </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place23}
          onChange={() => setPlace23("الإدارة العامة للمراجعة الداخلية و الحوكمة ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">الإدارة العامة للمراجعة الداخلية و الحوكمة </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place25}
          onChange={() => setPlace25("وحدة تطوير العشوائيات")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">وحدة تطوير العشوائيات</span>
      </label>
    </div>   
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place26}
          onChange={() => setPlace26("إدارة الرقابة و الرصد البيئي")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">إدارة الرقابة و الرصد البيئي</span>
      </label>
    </div>   
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place27}
          onChange={() => setPlace27("إدارة الاتصال السياسي")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">إدارة الاتصال السياسي</span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place28}
          onChange={() => setPlace28("إدارة الحماية المدنية ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">إدارة الحماية المدنية </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place29}
          onChange={() => setPlace29("إدارة  المرور")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">إدارة المرور </span>
      </label>
    </div>   
     
    <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place30}
          onChange={() => setPlace30(" شرطة المرافق ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">شرطة المرافق  </span>
      </label>
    </div>   
     
                
    </fieldset>
            </details>
          </div>
        
          <div className="py-2 px-2 bg-sky-300 rounded-lg mt-2 ">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <IoStorefrontOutline fontSize="1.5em" className=" ml-2 "/>
    
              <span> الديوان العام</span>
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
             
              <option value="">  اختر الإدارة المختصة </option>
              <input type="text"
              name="place"
               placeholder="اسم الجهة : " 
              className="input mt-2"
              value={place}
              onChange={(e) => setPlace(e.target.value)} />
    
              
            </details>
          </div>
          <div className="py-2 px-2 bg-sky-200 rounded-lg mt-2">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <IoHomeOutline fontSize="1.5em" className=" ml-2 "/>
    
                <span>  الأحياء</span>
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
              value={place2}
              onChange={(e) => setPlace2(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
            >
              <option value=""> اختر الحي المختص أو كل الأحياء</option>
              <option value="جميع الاحياء">جميع الأحياء</option>
                <option value="شرق">شرق</option>
                <option value="وسط">وسط</option>
                <option value="غرب">غرب</option>
                <option value="المنتزه أول">المنتزه أول</option>
                <option value="المنتزه ثان">المنتزه ثان</option>
                <option value="الجمرك">الجمرك</option>
                <option value="العجمي">العجمي</option>
                <option value="العامرية أول">العامرية أول</option>
                <option value="العامرية ثان">العامرية ثان</option>
                <option value="برج العرب">برج العرب</option>
            </select>
            </details>
          </div>
          <div className="py-2 px-2 bg-sky-300 rounded-lg mt-2">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <MdOutlineMapsHomeWork fontSize="1.5em" className=" ml-0 "/>
    
                <span> المديريات</span>
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
              value={place3}
              onChange={(e) => setPlace3(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
            >
              <option value=""> اختر المديرية المختصة</option>
              <option value="جميع المديريات">جميع المديريات</option>
                <option value="مديرية الشباب و الرياضة">مديرية الشباب و الرياضة</option>
                <option value="مديرية التربية و التعليم">"مديرية التربية و التعليم"</option>
                <option value="مديرية الشئون الصحية">"مديرية الشئون الصحية"</option>
                <option value="مديرية التموين">"مديرية التموين" </option>
                <option value="مديرية الشئون البيطرية">"مديرية الشئون البيطرية" </option>
                <option value="مديرية الاسكان">"مديرية الاسكان"</option>
                <option value="مديرية الطرق و النقل">"مديرية الطرق و النقل"</option>
       
            </select>
            </details>
          </div>
          <div className="py-2 px-2 bg-sky-200 rounded-lg mt-2 ">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <SiHomeassistant fontSize="1.5em" className=" ml-2 "/>
    
              <span> المرافق </span>
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
              <fieldset className="fieldset p-2 bg-sky-50 border border-black-900 rounded-box w-full shadow-xl">
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place8}
          onChange={() => setPlace8("شركة الإسكندرية لتوزيع الكهرباء ")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">شركة الإسكندرية لتوزيع الكهرباء</span>
      </label>
    </div>
     
            
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place10}
          onChange={() => setPlace10("شركة مياه الشرب بالإسكندرية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">شركة مياه الشرب بالإسكندرية</span>
      </label>
    </div>
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place11}
          onChange={() => setPlace11("شركة الصرف الصحي بالإسكندرية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2">شركة الصرف الصحي بالإسكندرية</span>
      </label>
    </div>
    {/*
              <div>
      <label className="fieldset-label px-1">
        <input 
          type="checkbox" 
          checked={place12}
          onChange={() => setPlace12("الإدارة العامة للتخطيط و التنمية العمرانية")}
          className="checkbox checkbox-sm checkbox-info " 
        />
        <span className="mr-2" >الإدارة العامة للتخطيط و التنمية العمرانية </span>
      </label>
    </div>
    */}
    
    
     
      
      
    </fieldset>
            </details>
          </div>
        
          <div className="py-2 px-2 bg-sky-300 rounded-lg mt-2">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <MdLogout  fontSize="1.5em" className=" ml-0 "/>
    
                <span>جهة اخري -1</span>
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
              <input type="text"
              name="place4"
               placeholder="اسم الجهة : " 
              className="input mt-2"
              value={place4}
              onChange={(e) => setPlace4(e.target.value)} />
    
            </details>
          </div>
      
        
        
    
        
        </div>
      </div>
    
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
