"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import RemoveBtn3 from "./RemoveBtn3";


export default function DataTables() {
  const [data, setData] = useState([]);
 
  const [dayFilter, setDayFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  
 

  useEffect(() => {
    const getvips = async () => {
      try {
        const res = await fetch("/api/vips", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const fetchedData = await res.json();
        console.log("Fetched Data:", fetchedData);

        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else if (fetchedData.vips && Array.isArray(fetchedData.vips)) {
          setData(fetchedData.vips);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    getvips();
  }, []);

  const filteredData = data.filter((vip) => {
    const vipDate = dayjs(vip.createdAt);
    return (
     
      (dayFilter === "" || vipDate.date() === parseInt(dayFilter)) &&
      (monthFilter === "" || vipDate.month() + 1 === parseInt(monthFilter))
    );
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="min-h-screen p-2 bg-gray-100 flex flex-col items-center w-full">
<h1 className="px-8 py-2 text-2xl font-bold text-sky-700 ">
  الموضوعات و الملفات الهامة
</h1>
      <div
        dir="rtl"
        className="mb-4 flex  flex-col space-x-4 overflow-hidden md:flex-row "
      >
  


  
  
     



        <input
          type="number"
          placeholder="بحث باليوم  "
          className="border p-1 rounded w-48 h-10"
          value={dayFilter}
          onChange={(e) => setDayFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="بحث بالشهر"
          className="border p-1 rounded w-48 h-10"
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


              <th className="p-1  w-36 text-center text-teal-900">المسئول عن الموضوع </th>
              <th className="p-1  text-center text-blue-900"> متابعة الموضوع / الاجراءات المُتخذة</th>
              <th className="p-1 w-16 text-center text-blue-900"> الحالة</th>
              <th className="p-1 w-36 text-center text-blue-900">تحديث البيانات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {paginatedData.map((vip) => (
              <tr
                key={vip.id || vip._id}
                className="border-t divide-y divide-gray-300 text-sm w-8"
              >
                <td className=" bg-slate-200 text-xs text-center ">
                {vip.records !== 0 && filteredData.indexOf(vip) + 1}
                {/*
                      <div className=" text-blue-800">
                    {vip.createdAt.slice(0, 10)}
                  </div>
                  */}
                </td>
                <td className=" bg-sky-200 text-center p-2 flex flex-col justify-center items-center w-48  ">
                <div className="text-xs"> بتاريخ  : {vip.startDate.slice(0, 10)}</div>
                  <div className="font-bold" > {vip.tit}</div>
               <div className=" text-xs bg-sky-800 text-sky-50 p-1 rounded-md text-right">{vip.summ}</div>
               <div className=" text-xs bg-sky-600 text-sky-50 p-1 rounded-md text-right">{vip.tash}</div>
               <div className="text-xs"> ميعاد التسليم / الإنهاء  : {vip.startDateout.slice(0, 10)}</div>
                 
                  
                </td>
              

                <td className="p-2 bg-blue-700 text-blue-50 font-bold  max-w-lg rounded-lg text-center  ">
                  {vip.start}
                  
            
                
                </td>

                <td className="p-1 flex  ">
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from1}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo1}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos1}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from2}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo2}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos2}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from3}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo3}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos3}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from4}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo4}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos4}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from5}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo5}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos5}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from6}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo6}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos6}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from7}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo7}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos7}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from8}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo8}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos8}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from9}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo9}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos9}</div>
                  </div>
                  <div className="flex flex-col justify-center items-start p-2 bg-gray-200 m-1">
                    <div className="bg-sky-200 rounded-md p-1">{vip.from10}</div>
                    <div className="bg-sky-400 rounded-md p-1">{vip.respo10}</div>
                    <div className="bg-sky-100 rounded-md p-1">{vip.datos10}</div>
                  </div>
                 
                </td>

                <td className="p-3 text-center ">
                  {vip.respo1 || vip.respo2 || vip.respo3 || vip.respo4 ? (
                    <div className=" w-16 bg-teal-500 p-1 text-slate-50 rounded-md text-center">
                      تم الــرد
                    </div>
                  ) : (
                    <div className=" w-16 bg-pink-600 p-1 text-slate-50 rounded-md text-center">
                      جاري الرد
                    </div>
                  )}
                  <div>   {vip.comment} </div>
                 
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
              

                  <RemoveBtn3 id={vip._id} />

                  <Link href={`/dashboard/editVip/${vip._id}`}>
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
