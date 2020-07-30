'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  // router.get('/user', controller.user.list);
  // router.get('/user/add/:name', controller.user.insert);
  router.resources('users', '/users', controller.user);
};