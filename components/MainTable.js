"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";


export default function DataTables() {
  const [data, setData] = useState([]);

  const [search2, setSearch2] = useState("");
  const [search5, setSearch5] = useState("");
  const [search6, setSearch6] = useState("");
  const [search7, setSearch7] = useState("");
  const [generalSearch, setGeneralSearch] = useState("");


  const [dayFilter, setDayFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  {/*
       const handlePrint = () => {
      window.print();
    };
    */}
 

  useEffect(() => {
    const getmains = async () => {
      try {
        const res = await fetch("/api/mains", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const fetchedData = await res.json();
        console.log("Fetched Data:", fetchedData);

        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else if (fetchedData.mains && Array.isArray(fetchedData.mains)) {
          setData(fetchedData.mains);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    getmains();
  }, []);

  const filteredData = data
  .filter((main) => {
    const mainDate = dayjs(main.createdAt);
    const matchesGeneralSearch = 
      main.tit?.toLowerCase().includes(generalSearch.toLowerCase()) ||
      main.summ?.toLowerCase().includes(generalSearch.toLowerCase()) ||
      main.tash?.toLowerCase().includes(generalSearch.toLowerCase()) ||
      main.start?.toLowerCase().includes(generalSearch.toLowerCase())||
      main.reference?.toLowerCase().includes(generalSearch.toLowerCase());
    
    return (
      matchesGeneralSearch &&
      main.place2.toLowerCase().includes(search2.toLowerCase()) &&
      main.place5.toLowerCase().includes(search5.toLowerCase()) &&
      main.place6.toLowerCase().includes(search6.toLowerCase()) &&
      main.place7.toLowerCase().includes(search7.toLowerCase()) &&
      (dayFilter === "" || mainDate.date() === parseInt(dayFilter)) &&
      (monthFilter === "" || mainDate.month() + 1 === parseInt(monthFilter))
    );
  })
  .sort((a, b) => {
    return dayjs(a.startDateout).isBefore(dayjs(b.startDateout)) ? -1 : 1;
  });

// Finally apply pagination to the sorted data
const totalPages = Math.ceil(filteredData.length / rowsPerPage);
const paginatedData = filteredData.slice(
  (currentPage - 1) * rowsPerPage,
  currentPage * rowsPerPage
);

  return (
    <div className="min-h-screen p-2 bg-gray-100 flex flex-col items-center w-full">
      <h1 className="text-xl font-bold mb-4">الموضوعات الحالية </h1>

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
     
     className="toggle toggle-info toggle-sm" 
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
      className="toggle toggle-info toggle-sm" />

  </label>
  <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-48 px-1 py-0 rounded-md flex justify-between items-center shadow">
  <div className="flex items-center space-x-2">
      <h2 className="text-xs">السكرتير العام المساعد</h2>
    </div>
    <input type="checkbox" 
     checked={search7}
     onChange={() => setSearch7("السكرتير العام المساعد")}
    className="toggle toggle-info toggle-sm " />

  </label>
       </div>
       <div className="w-full mb-4">
  <input
    type="text"
    placeholder="بحث عــام"
    className="w-full p-2 border rounded"
    value={generalSearch}
    onChange={(e) => setGeneralSearch(e.target.value)}
  />
</div>
       
        <select
          value={search2}
          placeholder="Search by Department"
          onChange={(e) => setSearch2(e.target.value)}
          className="border p-1 rounded ml-2 h-10"
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
              <th className="p-1 w-36 text-center text-blue-900">العنوان</th>

              <th className="p-1 w-36 text-center text-teal-900">التأشيرة</th>
              <th className="p-1 text-center text-blue-900"> متابعة الموضوع / الردود الواردة</th>
              <th className="p-1 w-16 text-center text-blue-900"> الحالة</th>
              <th className="p-1 text-center text-blue-900">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {paginatedData.map((main) => (
              <tr
                key={main.id || main._id}
                className="border-t divide-y divide-gray-300 text-sm w-8"
              >
                <td className=" bg-slate-200 text-xs text-center ">

                  {main.records !== 0 && filteredData.indexOf(main) + 1}
                  {/*
                  
                   {paginatedData.indexOf(main) + 1}
                  */}
                 
                  {/*
                      <div className=" text-blue-800">
                    {main.createdAt.slice(0, 10)}
                  </div>
                  */}
                </td>
                <td className=" bg-blue-200 text-center p-2 flex flex-col justify-center items-center w-48  ">
                  
                  <div className="font-bold" > {main.tit}</div>
                  <div className=" text-xs bg-sky-700 text-sky-50 p-1 rounded-md  text-balance text-center">{main.summ}</div>
                  <div className="text-xs"> وارد من : {main.start}</div>
                  <div className="text-xs"> بتاريخ  : {main.startDate.slice(0, 10)}</div>
                 
                  
                </td>

                <td className=" relative p-2 bg-blue-700 text-blue-50 font-bold  max-w-lg rounded-lg text-center  ">
                    {main.importance ? (  
                    
                                    <span className="absolute top-1 right-0 -mt-2 -mr-2 flex h-6 w-20 rounded-lg bg-blue-300 text-center">
        <span className="absolute top-1 right-0 left-1 bottom-0 animate-ping rounded-lg bg-sky-600 opacity-75 text-center"></span>
        <span className="px-1 py-1 m-auto align-baseline font-bold text-center"> 
      {main.importance }
                 
        </span>
      </span>

                  ) : ( 
                    <span className=" w-16 bg-transparent p-1 text-slate-50 rounded-md text-center">
                    </span>
                  )}
<div className=" text-balance" >
    {main.tash}
</div>
                
                  {main.startDateout.slice(0, 10)}
                
               {/*
                                 <span className="text-xs">
                     {main.place}

 
</span>
               */}

                  
                  
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
                            {main.place}
                            {main.place2}
                        {main.place3}
                          {main.place4}
                         {main.place5}
                           {main.place6}
                           {main.place7}
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
                    <div className="bg-sky-200 rounded-md p-1">{main.from1}</div>
                    <div className="bg-sky-400 rounded-md p-1">{main.respo1}</div>
                    <div className="bg-sky-100 rounded-md p-1">{main.datos1}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{main.from2}</div>
                    <div className="bg-sky-400 rounded-md p-1">{main.respo2}</div>
                    <div className="bg-sky-100 rounded-md p-1">{main.datos2}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{main.from3}</div>
                    <div className="bg-sky-400 rounded-md p-1">{main.respo3}</div>
                    <div className="bg-sky-100 rounded-md p-1">{main.datos3}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{main.from4}</div>
                    <div className="bg-sky-400 rounded-md p-1">{main.respo4}</div>
                    <div className="bg-sky-100 rounded-md p-1">{main.datos4}</div>
                  </div>
                 
                </td>

                <td className="p-3 text-center ">
                  {main.respo1 || main.respo2 || main.respo3 ? (
                    <div className=" w-16 bg-teal-500 p-1 text-slate-50 rounded-md text-center">
                      تم الــرد
                    </div>
                  ) : (
                    <div className=" w-16 bg-pink-600 p-1 text-slate-50 rounded-md text-center">
                      جاري الرد
                    </div>
                  )}
                  <div>   {main.comment} </div>
                 
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
                 

                  <RemoveBtn id={main._id} />

                  <Link href={`/dashboard/editMain/${main._id}`}>
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
{/*
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
          <option value={20}>20 rows</option>
          <option value={40}>40 rows</option>
          <option value={60}>60 rows</option>
        </select>
      </div>
*/}
<div className="mt-4 flex items-center space-x-2">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    className="px-6 py-1 bg-blue-500 text-white rounded"
    disabled={currentPage === 1}
  >
    السابق
  </button>
  
  <button
    onClick={() => setCurrentPage(1)}
    className="px-4 py-1 bg-gray-200 text-gray-700 rounded"
    disabled={currentPage === 1}
  >
    الأولى
  </button>
  
  <span className="px-2">
    صفحة {currentPage} من {totalPages}
  </span>
  
  <button
    onClick={() => setCurrentPage(totalPages)}
    className="px-4 py-1 bg-gray-200 text-gray-700 rounded"
    disabled={currentPage === totalPages}
  >
    الأخيرة
  </button>
  
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    className="px-6 py-1 bg-blue-500 text-white rounded"
    disabled={currentPage === totalPages}
  >
    التالي
  </button>
  
  <select
    value={rowsPerPage}
    onChange={(e) => {
      setRowsPerPage(parseInt(e.target.value));
      setCurrentPage(1); // Reset to first page when changing rows per page
    }}
    className="border p-2 rounded"
  >
    <option value={10}>10 صف</option>
    <option value={20}>20 صف</option>
    <option value={30}>30 صف</option>
  </select>
</div>
 
    </div>
  );
}
