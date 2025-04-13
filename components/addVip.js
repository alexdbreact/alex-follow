"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";




const AddVip = () => {

 

  const [tit, setTit] = useState("");
  const [records, setRecords] = useState(0);
  const [summ, setSumm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [start, setStart] = useState("");
  const [tash, setTash] = useState("");
  const [startDateout, setStartDateout] = useState("");  
  const [refer, setRefer] = useState("");
 
   const [respo1, setRespo1] = useState("");
   const [respo2, setRespo2] = useState("");
   const [respo3, setRespo3] = useState("");
   const [respo4, setRespo4] = useState("");
   const [respo5, setRespo5] = useState("");
   const [respo6, setRespo6] = useState("");
   const [respo7, setRespo7] = useState("");
   const [respo8, setRespo8] = useState("");
   const [respo9, setRespo9] = useState("");
   const [respo10, setRespo10] = useState("");

      
      const [from1, setFrom1] = useState("");
      const [from2, setFrom2] = useState("");
      const [from3, setFrom3] = useState("");
      const [from4, setFrom4] = useState("");
      const [from5, setFrom5] = useState("");
      const [from6, setFrom6] = useState("");
      const [from7, setFrom7] = useState("");
      const [from8, setFrom8] = useState("");
      const [from9, setFrom9] = useState("");
      const [from10, setFrom10] = useState("");
 
     
      const [datos1, setDatos1] = useState("");
      const [datos2, setDatos2] = useState("");
      const [datos3, setDatos3] = useState("");
      const [datos4, setDatos4] = useState("");
      const [datos5, setDatos5] = useState("");
      const [datos6, setDatos6] = useState("");
      const [datos7, setDatos7] = useState("");
      const [datos8, setDatos8] = useState("");
      const [datos9, setDatos9] = useState("");
      const [datos10, setDatos10] = useState("");
    
      
      const [statuz, setStatuz] = useState("");
      const [comment, setComment] = useState("");

 

  
  const [isDisabled, setIsDisabled] = useState(false);  
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
  
    if (!tit || !start ) {
      alert("يجب ادخال عنوان الموضوع و المسئول عنه ");
      return;
    }
  
    try {
      const res = await fetch("/api/vips", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({  records,tit, summ, start, tash, startDate, startDateout,  respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9,respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment, refer  }),
      });
  
      if (res.ok) {
        router.push("/dashboard/vipdashboard");
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
            placeholder=" المسئول عن الموضوع"
          />
          <label
            htmlFor="start"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
 المسئول عن الموضوع         </label>
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
          placeholder=" الاجراءات أو التعليمات المطلوبة "
          className=" text-wrap peer bg-transparent h-16 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          />
          <label
            htmlFor="signature"
            className="absolute cursor-text right-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
الاجراءات أو التعليمات المطلوبة           </label>
        </div>
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

export default AddVip;
