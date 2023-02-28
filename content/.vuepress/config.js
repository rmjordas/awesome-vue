import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';
import { defaultTheme } from 'vuepress';

export default {
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
  plugins: [
    pwaPlugin({
      skipWaiting: false,
    }),
    pwaPopupPlugin({}),
    docsearchPlugin({
      appId: 'CHXHOQPDX2',
      apiKey: '2dc18d895330e92acdc2c9e1a130c13b',
      indexName: 'rmjordas_awesome_vue',
    }),
  ],
  base: '/',
  theme: defaultTheme({
    repo: 'rmjordas/awesome-vue',
    docsBranch: 'next',
    docsDir: 'content',
    editLink: true,
    lastUpdated: true,
    contributors: false,
    sidebar: [
      {
        text: 'Resources',
        collapsable: false,
        children: [
          '/resources/official-resources',
          '/resources/external-resources',
          '/resources/job-portal',
          '/resources/community',
          '/resources/conferences',
          '/resources/podcasts',
          '/resources/youtube-channels',
          '/resources/official-examples',
          '/resources/tutorials',
          '/resources/books',
          '/resources/courses',
          '/resources/documentaries',
        ],
      },
      {
        text: 'Projects Using Vue.js',
        collapsable: false,
        children: [
          '/projects-using-vue-js/open-source',
          '/projects-using-vue-js/commercial-products',
          '/projects-using-vue-js/apps-websites',
          '/projects-using-vue-js/interactive-experiences',
          '/projects-using-vue-js/enterprise-usage',
          '/projects-using-vue-js/a11y',
        ],
      },
      {
        text: 'Components and Libraries',
        collapsable: false,
        children: [
          '/components-and-libraries/ui-components',
          '/components-and-libraries/ui-layout',
          '/components-and-libraries/frameworks',
          '/components-and-libraries/ui-utilities',
          '/components-and-libraries/utilities',
          '/components-and-libraries/integrations',
          '/components-and-libraries/dev-tools',
          '/components-and-libraries/scaffold',
        ],
      },
    ],
    themePlugins: {
      activeHeaderLinks: false
    }
  }),
};
