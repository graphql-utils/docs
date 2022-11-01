import type { DefaultTheme } from 'vitepress'

export function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/introduction' },
        { text: 'Getting Started', link: '/getting-started' },
      ],
    },
  ]
}