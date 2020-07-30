"use strict";
const {
  Sequelize,
  Model,
  DataTypes
} = require("sequelize");
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
(async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()
const Service = require("egg").Service;

class UserService extends Service {
  async find(uid) {

    const {
      app
    } = this;
    const localDB = app.mysql.get("localDB");
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const userList = await localDB.select("users");
    return JSON.parse(JSON.stringify(userList));
  }

  async insertItem(params = {}) {
    const {
      app
    } = this;
    const {
      name
    } = params;
    const localDB = app.mysql.get("localDB");
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const result = await localDB.insert("users", {
      name,
    });
    return JSON.parse(JSON.stringify(result));
    // const localDB = app.mysql.get('localDB');
    // // 假如 我们拿到用户 id 从数据库获取用户详细信息
    // const userList = await localDB.select('users');
    // return JSON.parse(JSON.stringify(userList));
  }
}

module.exports = UserService;