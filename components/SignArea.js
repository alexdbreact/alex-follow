"use client";
import React, { useState } from "react";import { IoStorefrontOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { SiHomeassistant } from "react-icons/si";


export const SignArea = () => {
     
     
      
  return (
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
  )
}

