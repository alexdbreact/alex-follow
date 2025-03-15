import dbConnect from "@/lib/dbConnect";
import Main from "@/models/Mains";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {tit, summ, start, tash, startDate, startDateout, place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer } = await request.json();
    await dbConnect();
    await Main.create({ tit, summ, start, tash, startDate, startDateout, place, place2, place3 , place4 ,place5,place6,place7, respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer  });
    return NextResponse.json({ message: "Main Created" }, { status: 201 });
  } 

export async function GET() {
  await dbConnect();
  const mains = await Main.find();
  return NextResponse.json({ mains });
}  
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Main.findByIdAndDelete(id);
  return NextResponse.json({ message: "main deleted" }, { status: 200 });
}

