import { createApp } from "./app";

const PORT = 3000;

const start = async () => {
  const app = await createApp();
  app.listen(PORT, () => {
    console.info(`API running at: http://localhost:${PORT}/`);
  });
};

start();

process.on("SIGTERM", () => process.exit());

process.on("beforeExit", (code) => {
  // Can make asynchronous calls
  setTimeout(() => {
    console.warn(`Process will exit with code: ${code}`);
    process.exit(code);
  }, 100);
});

process.on("exit", (code) => {
  // Only synchronous calls
  console.warn(`Process exited with code: ${code}`);
});
