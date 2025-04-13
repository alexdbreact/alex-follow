"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import RemoveBtn2 from "./RemoveBtn2";


export default function DataTables() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search5, setSearch5] = useState("");
  const [search6, setSearch6] = useState("");
  const [search7, setSearch7] = useState("");

  const [dayFilter, setDayFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  
    const handlePrint = () => {
      window.print();
    };

  useEffect(() => {
    const getalls = async () => {
      try {
        const res = await fetch("/api/alls", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const fetchedData = await res.json();
        console.log("Fetched Data:", fetchedData);

        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else if (fetchedData.alls && Array.isArray(fetchedData.alls)) {
          setData(fetchedData.alls);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    getalls();
  }, []);

  const filteredData = data.filter((all) => {
    const allDate = dayjs(all.createdAt);
    return (
      all.place.toLowerCase().includes(search.toLowerCase()) &&
      all.place2.toLowerCase().includes(search2.toLowerCase()) &&
      all.place5.toLowerCase().includes(search5.toLowerCase()) &&
      all.place6.toLowerCase().includes(search6.toLowerCase()) &&
      all.place7.toLowerCase().includes(search7.toLowerCase()) &&
      (dayFilter === "" || allDate.date() === parseInt(dayFilter)) &&
      (monthFilter === "" || allDate.month() + 1 === parseInt(monthFilter))
    );
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="min-h-screen p-2 bg-gray-100 flex flex-col items-center w-full">

      <div
        dir="rtl"
        className="mb-4 flex flex-col space-x-4 overflow-hidden md:flex-row "
      >
          <div className="flex flex-col">
                <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-48 px-1 py-0 rounded-md flex justify-between items-center shadow">
    <div className="flex items-center space-x-2">
      <h2 className="text-xs">نائب المحافظ</h2>
    </div>
    <input
     type="checkbox"
     
     className="toggle toggle-info" 
     checked={search5}
     onChange={() => setSearch5("نائب المحافظ")}

     />

  </label>
  <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-48 px-1 py-0 rounded-md flex justify-between items-center shadow">
  <div className="flex items-center space-x-2">
      <h2 className="text-xs">السكرتير العام</h2>
    </div>
    <input type="checkbox" 
     checked={search6}
     onChange={() => setSearch6("السكرتير العام")}
      className="toggle toggle-info" />

  </label>
  <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-48 px-1 py-0 rounded-md flex justify-between items-center shadow">
  <div className="flex items-center space-x-2">
      <h2 className="text-xs">السكرتير العام المساعد</h2>
    </div>
    <input type="checkbox" 
     checked={search7}
     onChange={() => setSearch7("السكرتير العام المساعد")}
    className="toggle toggle-info " />

  </label>
       </div>
        <select
          value={search}
          placeholder="Search by Department"
          onChange={(e) => setSearch(e.target.value)}
          className="border p-1 rounded ml-2"
        >
          <option value="">بحث بالإدارة</option>

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
        <select
          value={search2}
          placeholder="Search by Department"
          onChange={(e) => setSearch2(e.target.value)}
          className="border p-1 rounded ml-2"
        >
          <option value="">بحث بالحي</option>

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
     



        <input
          type="number"
          placeholder="بحث باليوم  "
          className="border p-1 rounded w-24 h-10"
          value={dayFilter}
          onChange={(e) => setDayFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="بحث بالشهر"
          className="border p-1 rounded w-24 h-10"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
        />
      </div>

      <div className="w-full  bg-white shadow-md rounded-lg overflow-hidden ">
        <table
          dir="rtl"
          className="w-full   border-separate border border-gray-400"
        >
          <thead className="bg-gray-200 ">
            <tr>
              <th className="p-0 w-4 text-center text-blue-900">#</th>
              <th className="p-1 w-36 text-center text-blue-900">موضوع الإجتماع</th>


              <th className="p-1 w-36 text-center text-teal-900">نتائج الإجتماع /التعليمات الصادرة</th>
              <th className="p-1 text-center text-blue-900"> متابعة التعليمات / الردود الواردة</th>
              <th className="p-1 w-16 text-center text-blue-900"> الحالة</th>
              <th className="p-1 text-center text-blue-900">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {paginatedData.map((all) => (
              <tr
                key={all.id || all._id}
                className="border-t divide-y divide-gray-300 text-sm w-8"
              >
                <td className=" bg-slate-200 text-xs text-center ">
                  {paginatedData.indexOf(all) + 1}
                  {/*
                      <div className=" text-blue-800">
                    {all.createdAt.slice(0, 10)}
                  </div>
                  */}
                </td>
                <td className=" bg-sky-200 text-center p-2 flex flex-col justify-center items-center w-48  ">
                  
                  <div className="font-bold" > {all.tit}</div>
               <div className=" text-xs bg-sky-700 text-sky-50 p-1 rounded-md text-right"> الحضور / {all.summ}</div>
                  <div className="text-xs"> بتاريخ  : {all.startDate.slice(0, 10)}</div>
                 
                  
                </td>
              

                <td className="p-2 bg-blue-700 text-blue-50 font-bold  max-w-lg rounded-lg text-center  ">
                  {all.tash}
                  {/* 
                    <button
                    className=" w-32 bg-blue-500 p-1 text-slate-50 rounded-md text-center	mt-2"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    نطاق التأشيرة
                  </button>
                  <dialog
                    dir="rtl"
                    id="my_modal_2"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg text-blue-900">نطاق التأشيرة</h3>

                      <div className="modal-action  min-w-500">
                        <form method="dialog">
                          <div className="flex flex-col h-20 justify-center items-center text-blue-900">
                            {all.place}
                            {all.place2}
                        {all.place3}
                          {all.place4}
                         {all.place5}
                           {all.place6}
                           {all.place7}
                          </div>
                          <button className="w-16 bg-blue-500 p-1 text-slate-50 rounded-md text-center">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  */}
                
                </td>

                <td className="p-1 flex  ">
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{all.from1}</div>
                    <div className="bg-sky-400 rounded-md p-1">{all.respo1}</div>
                    <div className="bg-sky-100 rounded-md p-1">{all.datos1}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{all.from2}</div>
                    <div className="bg-sky-400 rounded-md p-1">{all.respo2}</div>
                    <div className="bg-sky-100 rounded-md p-1">{all.datos2}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{all.from3}</div>
                    <div className="bg-sky-400 rounded-md p-1">{all.respo3}</div>
                    <div className="bg-sky-100 rounded-md p-1">{all.datos3}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{all.from4}</div>
                    <div className="bg-sky-400 rounded-md p-1">{all.respo4}</div>
                    <div className="bg-sky-100 rounded-md p-1">{all.datos4}</div>
                  </div>
                 
                </td>

                <td className="p-3 text-center ">
                  {all.respo1 || all.respo2 || all.comment ? (
                    <div className=" w-16 bg-teal-500 p-1 text-slate-50 rounded-md text-center">
                      تم الــرد
                    </div>
                  ) : (
                    <div className=" w-16 bg-pink-600 p-1 text-slate-50 rounded-md text-center">
                      جاري الرد
                    </div>
                  )}
                  <div>   {all.comment} </div>
                 
                </td>
                <td className="p-0 text-center ">
                  {/*
                      <button
                    onClick={handlePrint}
                    className="btn btn-primary btn-sm m-2"
                  >
                    طباعة
                  </button>
                  */}
              

                  <RemoveBtn2 id={all._id} />

                  <Link href={`/dashboard/editAll/${all._id}`}>
                    <button className="btn btn-success btn-sm m-2">
                      إضافة بيانات
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-6 py-1 bg-blue-500 text-white rounded"
        >
          السابق
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-6 py-1 bg-blue-500 text-white rounded"
        >
          التالي
        </button>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
          className="border p-2 rounded"
        >
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={15}>15 rows</option>
        </select>
      </div>
    </div>
  );
}
