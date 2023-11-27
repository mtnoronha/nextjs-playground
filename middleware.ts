import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function checkLoggedIn(request: NextRequest) {
  return request.cookies.get('isLoggedIn')?.value !== 'true';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/x/')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const userIsLoggedIn = checkLoggedIn(request);

  if (pathname.startsWith('/portal') && !userIsLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/login') && userIsLoggedIn) {
    return NextResponse.redirect(new URL('/portal', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/x/:path*', '/portal/:path*', '/login/:path*'],
};
