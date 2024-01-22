import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Awesome Vue.js',
  description: 'A curated list of awesome things related to Vue.js',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  base: '/',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('components-and-libraries/')) {
          return `https://github.com/rmjordas/awesome-vue/edit/next/content/${filePath.replace('.md', '.data.json')}`
        } else {
          return `https://github.com/rmjordas/awesome-vue/edit/next/content/${filePath}`
        }
      },
      text: 'Edit this page on GitHub'
    },
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        disableDetailedView: false,
        disableQueryPersistence: false,
      }
    },
    nav: [
      { text: 'Contribute 💚', link: 'https://github.com/sponsors/rmjordas' }
    ],
    sidebar: [
      {
        text: 'Resources',
        items: [
          { text: 'Official Resources', link: '/resources/official-resources' },
          { text: 'External Resources', link: '/resources/external-resources' },
          { text: 'Job Portal', link: '/resources/job-portal' },
          { text: 'Community', link: '/resources/community' },
          { text: 'Conferences', link: '/resources/conferences' },
          { text: 'Podcasts', link: '/resources/podcasts' },
          { text: 'YouTube Channels', link: '/resources/youtube-channels' },
          { text: 'Official Examples', link: '/resources/official-examples' },
          { text: 'Tutorials', link: '/resources/tutorials' },
          { text: 'Books', link: '/resources/books' },
          { text: 'Courses', link: '/resources/courses' },
          { text: 'Documentaries', link: '/resources/documentaries' },
        ]
      },
      {
        text: 'Projects Using Vue.js',
        items: [
          { text: 'Open Source', link: '/projects-using-vue-js/open-source' },
          { text: 'Commercial Products', link: '/projects-using-vue-js/commercial-products' },
          { text: 'App/Websites', link: '/projects-using-vue-js/apps-websites' },
          { text: 'Interactive Experiences', link: '/projects-using-vue-js/interactive-experiences' },
          { text: 'Enterprise Usage', link: '/projects-using-vue-js/enterprise-usage' },
          { text: 'A11y', link: '/projects-using-vue-js/a11y' },
        ],
      },
      {
        text: 'Components and Libraries',
        items: [
          { text: 'UI Components', link: '/components-and-libraries/ui-components' },
          { text: 'UI Layout', link: '/components-and-libraries/ui-layout' },
          { text: 'Frameworks', link: '/components-and-libraries/frameworks' },
          { text: 'UI Utilities', link: '/components-and-libraries/ui-utilities' },
          { text: 'Utilities', link: '/components-and-libraries/utilities' },
          { text: 'Integrations', link: '/components-and-libraries/integrations' },
          { text: 'Developer Tools', link: '/components-and-libraries/dev-tools' },
          { text: 'Scaffold', link: '/components-and-libraries/scaffold' },
        ],
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rmjordas/awesome-vue' }
    ],
    footer: {
      message: 'Maintained by Rodger Jordas',
    },
  },
});
