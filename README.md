# How to reproduce issue:

- run `yarn install`

- run `yarn ts-node index`

Should throw an error like this:

```
/Users/pat/Projects/trpc-10-repro/helloWorldRouter.ts:4
  helloWorld: publicProcedure.query(() => "hello world!"),
                              ^
TypeError: Cannot read properties of undefined (reading 'query')
    at Object.<anonymous> (/Users/pat/Projects/trpc-10-repro/helloWorldRouter.ts:4:31)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Module.m._compile (/Users/pat/Projects/trpc-10-repro/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/pat/Projects/trpc-10-repro/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Module.require (node:internal/modules/cjs/loader:1028:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/Users/pat/Projects/trpc-10-repro/trpc.ts:12:1)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```