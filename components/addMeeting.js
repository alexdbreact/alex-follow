"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdLogout } from "react-icons/md";


const Form = () => {

 

  const [tit, setTit] = useState("");
  const [summ, setSumm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [tash, setTash] = useState("");
  const [refer, setRefer] = useState("");
  const [place, setPlace] = useState("");
  const [place2, setPlace2] = useState("");
  const [place3, setPlace3] = useState("");
  const [place4, setPlace4] = useState("");
  const [place5, setPlace5] = useState("");
  const [place6, setPlace6] = useState("");
  const [place7, setPlace7] = useState("");
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
  
    if (!tit || !tash ) {
      alert("يجب ادخال العنوان و الجهة الوارد منها");
      return;
    }
  
    try {
      const res = await fetch("/api/alls", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({  tit, summ,  tash, startDate,  place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3, respo4, from1, from2, from3, from4, datos1, datos2, datos3, datos4, statuz, comment , refer }),
      });
  
      if (res.ok) {
        router.push("/dashboard/allSending");
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
      autoComplete="on"
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
            className="peer bg-transparent h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-teal-600 focus:outline-none focus:border-rose-600"
            placeholder=" موضوع الإجتماع"
          />
          <label
            htmlFor="title"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-teal-600 peer-focus:text-sm transition-all"
          >
             موضوع الإجتماع
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
            placeholder=" الحضور  "
            rows={2}
          />
          <label
            htmlFor="summary"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-teal-600 peer-focus:text-sm transition-all"
          >
             الحضور
          </label>
        </div>
      </div>

      {/* comming Date */}
      <div dir="rtl" className="bg-white py-2 px-4 rounded-lg sm:col-span-1">
        <div className="relative bg-inherit ">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="  h-10  rounded-lg text-gray-900  ring-2 px-2 ring-gray-500 focus:ring-teal-600 focus:outline-none focus:border-rose-600"
          />

          <CiCalendarDate
            className="absolute right-32 top-0 text-teal-300 "
            fontSize="2.5em"
          />

          <label
            htmlFor="summary"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-teal-600 peer-focus:text-sm transition-all"
          >
            تاريخ الإجتماع
          </label>
        </div>
      </div>
      {/* Start */}
      {/*
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
      
      */}
   
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
          placeholder="  ملخص الإجتماع / القرارات الصادرة / التعليمات  "
          className=" text-wrap peer bg-transparent h-16 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />
          <label
            htmlFor="signature"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-teal-600 peer-focus:text-sm transition-all"
          >
  ملخص الإجتماع / القرارات الصادرة / التعليمات         </label>
        </div>
      </div>
       {/* out Date */}
       {/*
        <div dir="rtl" className="bg-white py-2 px-4 rounded-lg sm:col-span-1">
        <div className="relative bg-inherit ">
          <DatePicker
            selected={startDateout}
            onChange={(date) => setStartDateout(date)}
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
       */}
      
    
    
      {/* test 
            <div dir="rtl" className=" relative w-full  bg-white px-6 pt-2 pb-2 mt-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl rounded-xl sm:px-2">
  <div className="mx-auto px-0 ">
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-0 text-center text-xl font-bold tracking-tight md:text-xl text-sky-700">
نطاق الإجتماع      </h2>
  
    </div>
    <div className="mx-auto mt-2 grid max-w-xl divide-y divide-slate-100 ">
    
      <div className="py-2 px-2 bg-teal-300 rounded-lg mt-2 ">
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
          <select
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        >
          <option value="">  اختر الإدارة المختصة أو جميع الإدارات</option>
          <option value="جميع الإدارت"> جميع الإدارت</option>
          <option value="ش ع">الإدارة العامة للموارد البشرية</option>
          <option value="ش ق">الإدارة العامة للشئون القانونية </option>
          <option value="ش م">الإدارة العامة للشئون المالية</option>
          <option value="ش إ">الإدارة العامة للشئون الإدارية</option>
          <option value="علاقات">الإدارة العامة للعلاقات العامة</option>
          <option value="حوكمة">الإدارة العامة للحوكمة </option>
          <option value="متابعة">الإدارة العامة للمتابعة </option>
          <option value="رصد">الإدارة العامة للرصد البيئي </option>
          <option value="تخطيط">الإدارة العامة للتخطيط العمراني </option>
          <option value="سياحة">الإدارة المركزيه للسياحه و المصايف  </option>
          <option value="تجميل">الإدارة المركزيه لتجميل المدينه   </option>
          <option value="الازمات">مركز السيطرة</option>
          <option value="المعلومات">مركز المعلومات</option>
          <option value="مركز ذ">المركز الذكى</option>
        </select>
        </details>
      </div>
      <div className="py-2 px-2 bg-teal-200 rounded-lg mt-2">
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
      <div className="py-2 px-2 bg-teal-300 rounded-lg mt-2">
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
      <div className="py-2 px-2 bg-teal-200 rounded-lg mt-2">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <MdLogout  fontSize="1.5em" className=" ml-0 "/>

            <span>جهة خارجية</span>
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
      <div className="space-y-4 mt-2">
  <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-72 px-4 py-2 rounded-md flex justify-between items-center shadow">
    <div className="flex items-center space-x-5">
      <div className="flex items-center"></div>
      <h2 className="text-lg">نائب المحافظ</h2>
    </div>
    <input
     type="checkbox"
     
     className="toggle toggle-success" 
     checked={place5}
     onChange={() => setPlace5("نائب المحافظ")}

     />

  </label>
  <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-72 px-4 py-2 rounded-md flex justify-between items-center shadow">
    <div className="flex items-center space-x-5">
      <div className="flex items-center"></div>
      <h2 className="text-lg">السكرتير العام</h2>
    </div>
    <input type="checkbox" 
     checked={place6}
     onChange={() => setPlace6("السكرتير العام")}
      className="toggle toggle-success" />

  </label>
  <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-72 px-4 py-2 rounded-md flex justify-between items-center shadow">
    <div className="flex items-center space-x-5">
      <div className="flex items-center"></div>
      <h2 className="text-lg">السكرتير العام المساعد</h2>
    </div>
    <input type="checkbox" 
     checked={place7}
     onChange={() => setPlace7("السكرتير العام المساعد")}
    className="toggle toggle-success" />

  </label>
</div>

    
    </div>
  </div>

</div>
      */}

{/* reference number */}
<div className="bg-white py-2 px-4 rounded-lg">
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
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-teal-600 peer-focus:text-sm transition-all"
          >
            رقم مرجعي
          </label>
        </div>
      </div>

   

      {/* Submit Button */}
      <div className="sm:col-span-2 m-auto">
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-block m-4 mb-8 rounded bg-teal-500 px-12 py-2 text-white focus:outline-none"
        >
          {isDisabled ? "جاري الإرسال..." : "إضافة الإجتماع "}
        </button>
      </div>
    </form>
  );
};

export default Form;
