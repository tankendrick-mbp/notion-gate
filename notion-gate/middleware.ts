import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("notion_auth")?.value === "true";
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/login")) return NextResponse.next();

  if (!isLoggedIn) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.redirect(process.env.NOTION_URL!);
}

export const config = { matcher: ["/notion-gate/notion-gate"] };
