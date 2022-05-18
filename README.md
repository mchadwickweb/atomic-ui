# Atomic UI

A React based UI library of components and primitives. The goal of this project is to explore how a UI library like this is used in real world applications.

- [Getting started](https://github.com/mchadwickweb/atomic-ui#getting-started)
- [Project Architecture](https://github.com/mchadwickweb/atomic-ui/#project-architecture)
- [Project Objectives](https://github.com/mchadwickweb/atomic-ui#project-objectives)

## Getting started

Start up the Yarn Workspace by running the following at the root of the project

```bash
yarn
# or
yarn install
```

### Running an app

At the moment each app owns its Vite commands so you will need to `cd` into each app to run the following

```bash
yarn dev # start local dev server
yarn build # build the assets locally
yarn preview # start local dev server using the locally built assets
```

## Project architecture

The project is set up as a simple monorepo powered by Yarn workspaces.

### Workspaces

There are two workspaces setup for development.

- Packages: Where the components and other library related code lives
- Apps: Where the demo applications live. These are spun up using Vite.

### Component packages

Each package contains its own `package.json` file and index.js. Where it exports the relevant functions.

As we are in a Workspace monorepo the "Apps" are therefore made aware of these packages without having to use something like `yarn link`. Making local development easier.

These Apps are not meant for productions so right now I don't include them as dependencies in the Apps `package.json`.

### Apps

The apps or websites which use the components are spun up using Vite and its React template.

I have decided against using Typescript here (for now) as it brings no real benefit to what I'm exploring here.

## Project objectives

The goal here is to see how low level you can get with a React library so it becomes reusable for both a single product team building multiple projects using the same brand (like a design system). Or for a team building multiple projects with completely different style guides or brands, such as an agency.
