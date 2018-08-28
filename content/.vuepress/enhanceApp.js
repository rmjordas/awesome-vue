export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  const { routes } = router.options;

  routes.unshift({
    name: 'google-site-verification',
    path: '/googleb0cb4a6e76619924.html',
  });
}
