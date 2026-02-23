// This function can be marked `async` if using `await` inside
import { NextRequest, NextResponse } from "next/server";
import { checkSiteUnlocked, getUser } from "./helpers/auth";

export async function proxy(request: NextRequest) {
  try {
    const siteUnlockKey = request.cookies.get("site_unlocked_token")?.value;

    const checkSiteUnlock = await checkSiteUnlocked(siteUnlockKey);

    if (!checkSiteUnlock) {
      return NextResponse.redirect(new URL("/under-construction", request.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL("/under-construction", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // "/((?!api|images|_next/static|_next/image|signin|signup|events|jobs|programs||).*)",
    "/((?!api|favicon.ico|images|_next/static|_next/image|under-construction).*)",
  ],
};
