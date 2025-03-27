import { NextResponse } from "next/server";

export function middleware(req) {
    const token = req.cookies.get("authToken"); // Get token from cookies

    const { pathname } = req.nextUrl;

    // Allow access only to login and forget password pages
    if (pathname === "/" || pathname === "/Forgetpassword") {
        return NextResponse.next();
    }

    // Redirect to login if token is missing
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
    matcher: ["/Dashboard/:path*", "/profile/:path*", "/admin/:path*"], // Add all protected routes here
};
