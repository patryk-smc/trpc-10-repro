import express from "express";
// import "express-async-errors";
import { createTrpcMiddleware } from "./trpc";

export const createApp = async () => {
  const app = express();

  app.use("/api/trpc", createTrpcMiddleware());

  return app;
};
