import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  const { routes } = router.options;

  routes.unshift({
    name: 'google-site-verification',
    path: '/googleb0cb4a6e76619924.html',
  });
});
