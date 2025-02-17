import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Rule 1: profile will redirect to login without refresh
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  //
  //
  // Rule 1:1 Rewrite Url.
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/dashboard", request.url));
  // }
  //
  //
  //Rule 2: It require config to set matchers.
  // return NextResponse.redirect(new URL("/posts", request.url));
  //
  //
  // Rule 3 :  Setting default values in cookies if not found.
  const response = NextResponse.next();
  const themePreference = request.cookies.get("my_theme");
  if (!themePreference) {
    response.cookies.set("my_theme", "yellowTheme");
  }
  //
  //
  // Rule 4 :  Setting custom headers.
  // response.headers.set("custom-header", "custom-value");
  return response;
}

// export const config = {
//   matcher: "/profile",
// };
