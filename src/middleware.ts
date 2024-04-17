// export { default } from 'next-auth/middleware';

// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {

        if (request.nextUrl.pathname.startsWith("/") && !request.nextauth?.token) {
            return NextResponse.rewrite(
                new URL("/login", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: ['/',"/support"] };

// && request.nextauth.token?.role !== "admin"