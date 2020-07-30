# eggjs-learn

## 构建项目

### 构建项目结构

```bash
$ mkdir eggjs-learn && cd eggjs-learn
$ npm init egg --type=simple
$ npm i
```

### 增加模板

#### 安装 nunjucks

```bash
$ npm i egg-view-nunjucks --save
```

#### 开启插件

```javascript
// config/plugin.js
exports.nunjucks = {
  enable: true,
  package: "egg-view-nunjucks",
};

// config/config.default.js
exports.keys = `此处改为你自己的 Cookie 安全字符串`;
// 添加 view 配置
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks",
  },
};
```

## MORE

> [调用 mySQL](https://eggjs.org/zh-cn/tutorials/mysql.html)  
> [推荐：使用 sequelize](https://eggjs.org/zh-cn/tutorials/sequelize.html)
