import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc-router";

export const createTrpcMiddleware = () => {
  return trpcExpress.createExpressMiddleware({
    router: appRouter,
    //  createContext,
    onError: (error: any) => {
      // logger.error(error)
    },
  });
};
