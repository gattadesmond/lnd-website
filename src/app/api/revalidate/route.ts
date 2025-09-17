import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const PATHS = ["/", "/ready", "/about"];

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const key = searchParams.get("key");

  if (key !== process.env.NEXT_REVALIDATE_KEY) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  PATHS.forEach((path) => {
    revalidatePath(path);
  });

  return NextResponse.json({ revalidated: true }, { status: 200 });
}
