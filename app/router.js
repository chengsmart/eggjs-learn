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
  router.get('/api/v1/users/getList', controller.v1.user.list);
  router.resources('users', '/api/v2/users', controller.v2.user);
};