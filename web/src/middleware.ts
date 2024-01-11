import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If the user is sign in and the current path is /login redirect the user to /home
  if (user && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // If user is not sign in and the current path is not /login redirect the user to /login
  if (!user && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/home", "/login"],
};
