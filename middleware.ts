// middleware.js
import { NextResponse } from 'next/server'

const RENDER_EXTERNAL_URL = "https://coursex-bswq.onrender.com"

export function middleware(request: any) {
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    const url = request.nextUrl.clone()
    url.host = RENDER_EXTERNAL_URL
    url.protocol = 'https:'
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/api/auth/:path*',
}