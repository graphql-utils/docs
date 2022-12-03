import type { DefaultTheme } from 'vitepress'

export function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      items: [
        { text: 'Introduction', link: '/introduction' },
        { text: 'Getting Started', link: '/getting-started' },
      ],
    },
    {
      text: 'Store',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/store/introduction' },
        { text: 'Getting Started', link: '/store/getting-started' },
      ],
    },
  ]
}
