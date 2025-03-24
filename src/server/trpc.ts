// server/trpc.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import superjson from "superjson";

export const t = initTRPC.create({
  transformer: superjson, // Enables superjson for serialization
  errorFormatter: ({ shape }) => shape, // Default error formatting
});

// Define your router
export const appRouter = t.router({
  hello: t.procedure.query(() => "Hello, tRPC in Next.js!"),
  getUser: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => ({ id: input.id, name: "John Doe" })),
});

// Type for the router
export type AppRouter = typeof appRouter;
