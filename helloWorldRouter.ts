import { publicProcedure, router } from "./trpc";

export const helloWorldRouter = router({
  helloWorld: publicProcedure.query(() => "hello world!"),
});
