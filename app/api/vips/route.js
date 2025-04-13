import dbConnect from "@/lib/dbConnect";
import Vip from "@/models/Vips";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {records,tit, summ, start, tash, startDate, startDateout,  respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9,respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment, refer } = await request.json();
    await dbConnect();
    await Vip.create({ records,tit, summ, start, tash, startDate, startDateout,  respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9,respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment, refer  });
    return NextResponse.json({ message: "Vip Created" }, { status: 201 });
  } 

export async function GET() {
  await dbConnect();
  const vips = await Vip.find();
  return NextResponse.json({ vips });
}  
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Vip.findByIdAndDelete(id);
  return NextResponse.json({ message: "vip deleted" }, { status: 200 });
}

