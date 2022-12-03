---
titleTemplate: Store
---

# Introduction

`@graphql-utils/store` is an in-memory data store for writing stateful GraphQL
mocks. It uses your GraphQL schema to validate data and establish relations
between different types. It is handy for testing client-side applications that
rely on GraphQL APIs and allows you to mimic your API's real-world behavior. It
lets you write cleaner tests by decoupling API mocks from test cases.

## Features

- Immutable
- Synchronous
- Written in typescript
- Supports types relations
- Works in any Javascript environment (Browser, Node, Deno, etc.)
- Validates data against your GraphQL schema (soon)
- Mutation Events (soon)
- Mutation Hooks (soon)
