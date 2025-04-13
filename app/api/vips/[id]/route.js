import dbConnect from "@/lib/dbConnect";
import Vip from "@/models/Vips";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await dbConnect();

    try {
        const vips = await Vip.findOne({ _id: id });

        if (!vips) {
            return NextResponse.json({ error: "Vip not found" }, { status: 404 });
        }

        return NextResponse.json({ vips }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

  export async function PUT(request, { params }) {
    const { id } = params;
    const { newtit,newsumm,newtash,newrespo1, newrespo2, newrespo3, newrespo4,newrespo5, newrespo6, newrespo7, newrespo8,newrespo9, newrespo10,  newfrom1, newfrom2, newfrom3, newfrom4,newfrom5, newfrom6, newfrom7, newfrom8,newfrom9, newfrom10,  newdatos1, newdatos2, newdatos3, newdatos4, newdatos5, newdatos6, newdatos7, newdatos8, newdatos9, newdatos10,  newstatuz, newComment } = await request.json();

    await dbConnect();
    await Vip.findByIdAndUpdate(id, {
        tit:newtit,
        summ: newsumm,
        tash: newtash,
        respo1: newrespo1,
        respo2: newrespo2,
        respo3: newrespo3,
        respo4: newrespo4,
        respo5: newrespo5,
        respo6: newrespo6,
        respo7: newrespo7,
        respo8: newrespo8,
        respo9: newrespo9,
        respo10: newrespo10,
       
        from1: newfrom1,
        from2: newfrom2,
        from3: newfrom3,
        from4: newfrom4,
        from5: newfrom5,
        from6: newfrom6,
        from7: newfrom7,
        from8: newfrom8,
        from9: newfrom9,
        from10: newfrom10,       
        datos1: newdatos1,
        datos2: newdatos2,
        datos3: newdatos3,
        datos4: newdatos4,
        datos5: newdatos5,
        datos6: newdatos6,
        datos7: newdatos7,
        datos8: newdatos8,
        datos9: newdatos9,
        datos10: newdatos10,
        
        statuz: newstatuz,
        comment: newComment,
    });

    return NextResponse.json({ message: "Vip updated" }, { status: 200 });
}
