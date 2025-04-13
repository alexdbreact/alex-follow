//components\EditMainsForm.jsx
"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditMainsForm({ id,tit,summ,tash, respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9, respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment }) {
    const [newtit, setNewtit] = useState(tit);
    const [newsumm, setNewsumm] = useState(summ);
    const [newtash, setNewtash] = useState(tash);
    const [newrespo1, setNewrespo1] = useState(respo1);
    const [newrespo2, setNewrespo2] = useState(respo2);
    const [newrespo3, setNewrespo3] = useState(respo3);
    const [newrespo4, setNewrespo4] = useState(respo4);
    const [newrespo5, setNewrespo5] = useState(respo5);
    const [newrespo6, setNewrespo6] = useState(respo6);
    const [newrespo7, setNewrespo7] = useState(respo7);
    const [newrespo8, setNewrespo8] = useState(respo8);
    const [newrespo9, setNewrespo9] = useState(respo9);
    const [newrespo10, setNewrespo10]= useState(respo10);
    const [newfrom1, setNewfrom1] = useState(from1);
    const [newfrom2, setNewfrom2] = useState(from2);
    const [newfrom3, setNewfrom3] = useState(from3);
    const [newfrom4, setNewfrom4] = useState(from4);
    const [newfrom5, setNewfrom5] = useState(from5);
    const [newfrom6, setNewfrom6] = useState(from6);
    const [newfrom7, setNewfrom7] = useState(from7);
    const [newfrom8, setNewfrom8] = useState(from8);
    const [newfrom9, setNewfrom9] = useState(from9);
    const [newfrom10, setNewfrom10] = useState(from10);
    const [newdatos1, setNewdatos1] = useState(datos1);
    const [newdatos2, setNewdatos2] = useState(datos2);
    const [newdatos3, setNewdatos3] = useState(datos3);
    const [newdatos4, setNewdatos4] = useState(datos4);
    const [newdatos5, setNewdatos5] = useState(datos5);
    const [newdatos6, setNewdatos6] = useState(datos6);
    const [newdatos7, setNewdatos7] = useState(datos7);
    const [newdatos8, setNewdatos8] = useState(datos8);
    const [newdatos9, setNewdatos9] = useState(datos9);
    const [newdatos10, setNewdatos10] = useState(datos10);
    const [newstatuz, setNewstatuz] = useState(statuz);
    const [newComment, setNewComment] = useState(comment);      
 
    const router = useRouter();
 
    
    
    
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const res = await fetch(`/api/vips/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newrespo1, newrespo2, newrespo3,newrespo4,newfrom1,newfrom2,newfrom3,newfrom4,newdatos1,newdatos2,newdatos3,newdatos4,newstatuz,newComment }),
            });
 
            if (!res.ok) {
                throw new Error("Failed to update Mains");
            }
 
            router.refresh();
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };
 
    return (
        <>
        <div dir="rtl" className="flex justify-between items-center">
            <h1 className="font-bold py-10 text-2xl">اضافه الردود من الجهات الواردة في نطاق التأشيرة</h1>
        </div>
     
        <form dir="rtl" onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
   <label htmlFor="newtit" className="font-semibold text-lg">عنوان الموضوع</label>
            <textarea
                onChange={(e) => setNewtit(e.target.value)}
                name="newtit"
                value={newtit}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2 h-20 text-wrap"
                type="text"
                
            />
          </div>
         
          <div className="flex flex-col">
          <label htmlFor="newsumm" className="font-semibold text-lg"> ملخص الموضوع </label>
               <textarea
               name="newsumm"
                onChange={(e) => setNewsumm(e.target.value)}
                value={newsumm}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2 h-20 text-wrap "
                type="text"
                rows={6}
            />
            </div>
         
            <div className="flex flex-col">
            <label htmlFor="newtash" className="font-semibold text-lg"> التأشيرة الصادرة</label>
            <textarea
            name="newtash"
                onChange={(e) => setNewtash(e.target.value)}
                value={newtash}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2 h-20 text-wrap"
                type="text"
            />
            </div>
          
          
            <input
                onChange={(e) => setNewrespo1(e.target.value)}
                value={newrespo1}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom1(e.target.value)}
                value={newfrom1}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos1(e.target.value)}
                value={newdatos1}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo2(e.target.value)}
                value={newrespo2}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom2(e.target.value)}
                value={newfrom2}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos2(e.target.value)}
                value={newdatos2}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
           
            <input
                onChange={(e) => setNewrespo3(e.target.value)}
                value={newrespo3}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom3(e.target.value)}
                value={newfrom3}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos3(e.target.value)}
                value={newdatos3}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo4(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom4(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos4(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo5(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom5(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos5(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo6(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom6(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos6(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo7(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom7(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos7(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo8(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom8(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos8(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo9(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom9(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos9(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewrespo10(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewfrom10(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
            <input
                onChange={(e) => setNewdatos10(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
            />
           
   
           </div>
           <input
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                placeholder="اكتب تعليق نهائي...."
                className="input input-bordered input-accent w-full max-w-xs p-4 mx-8 my-2"
                type="text"
            />
 
            <button className="btn btn-primary w-full max-w-xs">
               حفظ الرد
            </button>

        </form>
        </>
    );
}