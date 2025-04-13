//components\EditMainsForm.jsx
"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditAllsForm({ id, respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment }) {
  
    const [newrespo1, setNewrespo1] = useState(respo1);
    const [newrespo2, setNewrespo2] = useState(respo2);
    const [newrespo3, setNewrespo3] = useState(respo3);
    const [newrespo4, setNewrespo4] = useState(respo4);
    const [newfrom1, setNewfrom1] = useState(from1);
    const [newfrom2, setNewfrom2] = useState(from2);
    const [newfrom3, setNewfrom3] = useState(from3);
    const [newfrom4, setNewfrom4] = useState(from4);
    const [newdatos1, setNewdatos1] = useState(datos1);
    const [newdatos2, setNewdatos2] = useState(datos2);
    const [newdatos3, setNewdatos3] = useState(datos3);
    const [newdatos4, setNewdatos4] = useState(datos4);
    const [newstatuz, setNewstatuz] = useState(statuz);
    const [newComment, setNewComment] = useState(comment);
 
    const router = useRouter();
 
    
    
    
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const res = await fetch(`/api/alls/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newrespo1, newrespo2, newrespo3,newrespo4,newfrom1,newfrom2,newfrom3,newfrom4,newdatos1,newdatos2,newdatos3,newdatos4,newstatuz,newComment }),
            });
 
            if (!res.ok) {
                throw new Error("Failed to update Alls");
            }
 
            router.refresh();
            router.push("/dashboard/allSending");
        } catch (error) {
            console.log(error);
        }
    };
 
    return (
        <>
        <div dir="rtl" className="flex justify-between items-center">
            <h1 className="font-bold py-10 text-2xl">اضافه الردود علي القرارات / التعليمات الصادرة من الاجتماع</h1>
        </div>
     
        <form dir="rtl" onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          
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
           
   
           </div>
           <input
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                placeholder="اكتب تعليق نهائي...."
                className="input input-bordered input-accent w-full max-w-xs p-2 m-4"
                type="text"
            />
 
            <button className="btn btn-primary w-full max-w-xs">
               حفظ الرد
            </button>

        </form>
        </>
    );
}