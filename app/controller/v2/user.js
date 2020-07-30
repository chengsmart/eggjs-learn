'use strict';

const Controller = require('egg').Controller;

const toInt = (str) => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  // 新增加用户
  async create() {
    const {
      ctx
    } = this;
    const {
      name,
      age
    } = ctx.request.body;
    const user = await ctx.model.User.create({
      name,
      age
    });
    ctx.status = 201;
    ctx.body = user;
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }
}

module.exports = UserController;