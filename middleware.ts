import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// (.*) to catch all routes
const isPublicRoute = createRouteMatcher(["/sign-up(.*)", "/sign-in(.*)", "/"]);

export default clerkMiddleware((auth, req) => {
  // if the route is not public, protect it
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
