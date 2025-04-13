import dbConnect from "@/lib/dbConnect";
import All from "@/models/Alls";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await dbConnect();

    try {
        const alls = await All.findOne({ _id: id });

        if (!alls) {
            return NextResponse.json({ error: "All not found" }, { status: 404 });
        }

        return NextResponse.json({ alls }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

  export async function PUT(request, { params }) {
    const { id } = params;
    const { newrespo1, newrespo2, newrespo3, newrespo4, newfrom1, newfrom2, newfrom3, newfrom4, newdatos1, newdatos2, newdatos3, newdatos4, newstatuz, newComment } = await request.json();

    await dbConnect();
    await All.findByIdAndUpdate(id, {
        respo1: newrespo1,
        respo2: newrespo2,
        respo3: newrespo3,
        respo4: newrespo4,
        from1: newfrom1,
        from2: newfrom2,
        from3: newfrom3,
        from4: newfrom4,
        datos1: newdatos1,
        datos2: newdatos2,
        datos3: newdatos3,
        datos4: newdatos4,
        statuz: newstatuz,
        comment: newComment,
    });

    return NextResponse.json({ message: "All updated" }, { status: 200 });
}
