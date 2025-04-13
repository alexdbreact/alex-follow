import dbConnect from "@/lib/dbConnect";
import Main from "@/models/Mains";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {records,tit, summ, start, tash, startDate, startDateout,importance, place, place2, place3 , place4 ,place5,place6,place7, place8,place9,place10,place11,place12,place13,place14,place15,place16,place17,place18,place19,place20,place21,place22,place23,place25,place26,place27,place28,place29,place30,respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer } = await request.json();
    await dbConnect();
    await Main.create({ records,tit, summ, start, tash, startDate, startDateout,importance, place, place2, place3 , place4 ,place5,place6,place7, place8,place9,place10,place11,place12,place13,place14,place15,place16,place17,place18,place19,place20,place21,place22,place23,place25,place26,place27,place28,place29,place30,respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment, refer });
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

