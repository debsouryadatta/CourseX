// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request: any) {
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    const url = request.nextUrl.clone()
    url.host = process.env.RENDER_EXTERNAL_URL
    url.protocol = 'https:'
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/api/auth/:path*',
}