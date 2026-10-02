export { auth as proxy } from "../auth";

export const config = {
  matcher: ["/middleware/:path*"],
};