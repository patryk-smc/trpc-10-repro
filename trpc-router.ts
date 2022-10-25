import { helloWorldRouter } from "./helloWorldRouter";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
  helloWorld: helloWorldRouter,
});

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter;
