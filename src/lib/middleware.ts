import createMiddleware from 'next-intl/middleware';
import {routing} from '../i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match empty path, or paths starting with /ar or /en
  matcher: ['/', '/(ar|en)/:path*']
};

// import createMiddleware from "next-intl/middleware";
// import { routing } from "@/i18n/routing";

// export default createMiddleware(routing)

// export const config = {

//     matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
// }