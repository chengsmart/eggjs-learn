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
    const userList = await ctx.service.user.find(1);
    console.log(userList);
    // ctx.body = user;
    await ctx.render('user/list.tpl', {
      userList,
    });
  }
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

  // async insert() {
  //   const {
  //     ctx,
  //   } = this;
  //   // const rule = {
  //   //   goods: 'object',
  //   // };
  //   // ctx.validate(rule);
  //   // const uuid = await ctx.service.user.insertItem(ctx.request.body);
  //   const result = await ctx.service.user.insertItem({
  //     name: ctx.params.name,
  //   });
  //   // this.success(uuid);
  //   await ctx.render('user/add-result.tpl', {
  //     result,
  //   });

  // }
}

module.exports = UserController;