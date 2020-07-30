'use strict';

const Controller = require('egg').Controller;

const toInt = (str) => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async list() {
    const {
      ctx
    } = this;
    const userList = await ctx.service.user.find();
    ctx.status = 201;
    ctx.body = userList;
  }
}

module.exports = UserController;