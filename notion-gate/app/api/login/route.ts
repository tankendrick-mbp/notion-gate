import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.GATE_PASSWORD) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("notion_auth", "true", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return res;
}
