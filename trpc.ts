/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { helloWorldRouter } from "./helloWorldRouter";

const t = initTRPC.context().create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  //  transformer: superjson,
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return shape;
  },
});

/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router;

/**
 * Create an unprotected procedure
 * @see https://trpc.io/docs/v10/procedures
 **/
export const publicProcedure = t.procedure;

export const protectedProcedure = publicProcedure;

/**
 * @see https://trpc.io/docs/v10/middlewares
 */
export const middleware = t.middleware;

/**
 * @see https://trpc.io/docs/v10/merging-routers
 */
export const mergeRouters = t.mergeRouters;

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
  helloWorld: helloWorldRouter,
});

export const createTrpcMiddleware = () => {
  return trpcExpress.createExpressMiddleware({
    router: appRouter,
    //  createContext,
    onError: (error: any) => {
      // logger.error(error)
    },
  });
};

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter;
