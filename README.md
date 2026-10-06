# web-app-skeleton

This repository provides all the bits and pieces for an easy start to build your own web app for OpenCloud.

## Getting Started

The following instructions will help you to set up your own web app/extension and a proper development environment.

To get started, clone the repository and follow the instructions below.

### Development Environment

Currently local development requires docker and is only supported on Linux and macOS.

1. Make sure you have a working docker- and docker compose environment running.
1. Install [pnpm](https://pnpm.io/installation) if you haven't already.

   > **Correct version:** Our `package.json` holds a `packageManager` field. Please make sure that you have at least the same major version of pnpm installed.

   > **Corepack:** We recommend to use [pnpm with corepack](https://pnpm.io/installation#using-corepack) to handle the pnpm version automatically.

1. Install dependencies and run a first build process by running:
   ```bash
   pnpm install && pnpm build:w
   ```
   In case you see errors about failed commands (such as Command "vite" not found) try to re-run the pnpm command.
1. Add `127.0.0.1 host.docker.internal` to your `/etc/hosts` file to make sure the address host.docker.internal can be resolved locally.
1. Start the development server:
   ```bash
   docker compose up
   ```
1. Open your browser and navigate to `https://host.docker.internal:9200` to see your OpenCloud dev environment. The default user is `admin` with password `admin`. Your app from this directory is automatically loaded.

### Develop Your App

You can start developing your app by modifying the files in the `src` folder. The development server will automatically reload your changes as long as you keep a running process of `pnpm build:w`. In this setup you currently need a page reload to see your changes.

You should start by rephrasing the app name `skeleton` to your desired app name in the following files:

- package.json
- vite.config.ts
- src/index.ts
- tests/unit/App.spec.ts

Don't forget to rename the root directory as well.

More details and examples about app/extension development are available in the [developer documentation](https://docs.opencloud.eu/docs/dev/web/extension-system/).

Once you have a working extension, consider making it available via git.

### Testing

This repo holds the basic setup for unit testing with [vitest](https://vitest.dev/guide/). You can run the tests with:

```bash
pnpm test:unit
```

Feel free to structure your tests as you see fit. The test files are located in the `tests/unit` folder.

In case you want to set up e2e tests with [playwright](https://playwright.io), you can see working examples in our repos [web](https://github.com/opencloud-eu/web) and [web-extensions](https://github.com/opencloud-eu/web-extensions).

### Build For Production

Running `pnpm build` will create a production build of your app in the `dist` folder. It also copies over all static assets placed in the `public` folder. You can then deploy the contents of the `dist` folder to your production environment, see [app installation](https://docs.opencloud.eu/docs/admin/configuration/web-applications).

## Publish

We'd be happy to see your app in our [awesome-apps list](https://github.com/opencloud-eu/awesome-apps/blob/main/README.md). Feel free to make a pull request to the README.md file to add your app.
If you feel that your app has reached a sufficient level of maturity and you want to publish it, please follow our [publishing guide](https://github.com/opencloud-eu/awesome-apps/tree/main/webApps).
