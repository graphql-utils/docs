import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

export default defineConfig({
  title: 'GraphQL Utils',
  description: 'Utilities for testing and developing GraphQL APIs.',

  lastUpdated: true,

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [{ icon: 'github', link: 'https://github.com/graphql-utils' }],

    editLink: {
      pattern: 'https://github.com/graphql-utils/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Mohammad Ataei',
    },
  },
})
