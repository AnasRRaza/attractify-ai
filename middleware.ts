import { NextRequest, NextResponse } from 'next/server';

import { PROTECTED_ROUTES, PUBLIC_ROUTES, ROUTES } from './constants/routes';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('token')?.value;

  const currentPath = request.nextUrl.pathname as ROUTES;

  if (!authToken && PROTECTED_ROUTES.includes(currentPath)) {
    return NextResponse.redirect(new URL(ROUTES.SIGNIN, request.url));
  }

  if (authToken && PUBLIC_ROUTES.includes(currentPath)) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
  }

  return NextResponse.next();
}
