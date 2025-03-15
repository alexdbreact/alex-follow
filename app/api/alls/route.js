import dbConnect from "@/lib/dbConnect";
import All from "@/models/Alls";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {tit, summ,  tash, startDate,  place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer } = await request.json();
    await dbConnect();
    await All.create({ tit, summ,  tash, startDate,  place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer  });
    return NextResponse.json({ message: "All Created" }, { status: 201 });
  } 
 

export async function GET() {
    await dbConnect();
    const alls = await All.find();
    return NextResponse.json({ alls });
}


export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await All.findByIdAndDelete(id);
  return NextResponse.json({ message: "all deleted" }, { status: 200 });
}

 

