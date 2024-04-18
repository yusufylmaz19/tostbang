import { products } from "@/src/mock/product";
import { NextResponse } from "next/server";
export async function GET() {
    return NextResponse.json({ products }, { status: 200 });
}
