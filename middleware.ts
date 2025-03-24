// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

// Apply middleware to all routes except static files
export const config = { matcher: "/((?!_next|.*\\..*).*)" };
