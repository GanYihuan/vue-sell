# imooc-sell

> 慕课网 Vue-高仿饿了么 APP

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 3-1 Vue-cli 介绍

```console
npm install -g vue-cli
vue init webpack imooc-sell
```

## 3-2 Vue-cli 安装

> command node>4 version

```console
npm i nvm
nvm ls
nvm install 8.9.1
nvm use 8.9.1
```

## 3-3 项目运行

```console
npm install
npm run start
```

> vue-project structure

- build: webpack config
- config: webpack config
- node_modules: npm install
- src: code
- static: Third party static resources.
- .gitkeep: 当目录为空时，也可以将它提交给存储库。
- .babelrc: babel es6 compile to es5
- .editorconfig: editor config
- .eslintignore: ignore eslint rule
- .eslintrc.js: [ESLint document](http://eslint.cn/docs/rules/) eslint rule config
- package.json

1. script: js commend
2. devDependencies: Used only during the development phase, This package is not required when going online

## 3-4 项目文件介绍

## 3-5, 3-6, 3-7: webpack

## 4-1 需求分析

## 4-2: 项目资源准备

- [devicePixelRatio](https://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)

## 4-3 图标字体制作

- [IconMoon](https://icomoon.io/#icons-icomoon)

## 4-4 项目目录设计

- **common/fonts**
- **common/scss/icon.scss**

## 4-5 mock 数据

- [seller data](http://localhost:8088/api/seller)
- [goods data](http://localhost:8088/api/goods)
- [ratings data](http://localhost:8088/api/ratings)
- set alias path: **build/webapck.base.conf.js**
- run port: **config/index.js**
- modify ESLint rules: **eslintrc.js** [eslint](http://eslint.cn/docs/4.0.0/rules/semi-style)
- set data source: **webpack.dev.conf.js**

```console
npm install vue-resource better-scroll --save
npm install node-sass sass-loader --save-dev
```

## 5-1, 5-2, 5-3: 组件拆分

- **App.vue**
- **index.html**
- **static/css/reset.css**
- skip ESLint check

```js
/* eslint-disable no-new
```

## 5-4, 5-5: vue-router

- **router/router.js**
- **router/routes.js**
- **index.js**

```console
npm install vue-router -S
```

## 5-6 1 像素 border 实现

- Mobile phone preview
- check IP

```console
ifconfig
npm run dev
```

- [url](localhost:8088/#/goods)
- url replace then become IP:8088/#/goods
- [草料 website](https://cli.im/) use IP:8088/#/goods
- **mixin.scss**
- **base.scss**
- One pixel line
- 2x3x image
- clear float

## 6-1, 6-2 Vue-resource 应用

- 前端后端交互
- **main.js**
- **App.vue**
- vue-resource: Ajax request, XMLHttpRequest

```console
npm install vue-resource --save
```

## 6-3, 6-4, 6-5, 6-6, 6-7, 6-8 外部组件

- **header.vue**

```css
/* span 变成 block, 能设置 width & height */
display: inline-block;
/* 消除空隙, 父级元素设置: font-size: 0 */
font-size: 0;
/* 子级 absolute 定位, 父级应该 relative 定位 */
position: relative;
/* 一行显示 */
display: inline-block;
/* 顶部对齐 */
vertical-align: top;
/* 模糊图片 */
filter: blur(10px);
```

```css
/* 超出显示...(two) */
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
```

```css
/* 垂直方向居中 */
height: 24px;
line-height: 24px;
/* 水平方向居中 */
text-align: center;
```

## 6-9, 6-10 详情弹层页 - 实现弹出层

- sticky layout: A,B,C,D,E
- min-height: 100%; // content will change
- A: A part clearfix
- B: devide A B part
- padding-bottom: 64px; // C: A part space for B part
- margin: -64px auto 0; // D: B part margin embed the padding of A part
- clear: both; // E: B part clearfix

## 6-11, 6-12, 6-13 详情弹层页 - star 组件抽象

- **start.vue**

## 6-14 详情弹层页 - 小标题自适应经典 flex 布局实现

- line + character + line, flex layout

## 6-15, 6-16 详情弹层页 - header 剩余组件实现

- animate

## 7-1 布局编写

- **goods.vue**

## 7-2 左侧 menu 布局

- 多行文本, 垂直居中

```scss
.menu-item {
  /* 父元素 */
  display: table;
  /* 子元素 */
  .text {
    display: table-cell;
    /* 多行文字垂直居中 */
    vertical-align: middle;
  }
}
```

- 让其突出显示

```css
&.current {
  position: relative;
  z-index: 10;
  margin-top: -1px;
}
```

## 7-3, 7-4, 7-5 右侧食品列表布局

## 7-6, 7-7, 7-8: better-scroll 运用

```console
npm install better-scroll --save
```

```js
/* better-scroll */
/* at PC will trigger twice event, stop this */
if (!event._constructed) {
  return
}
```

## 7-9, 7-10, 7-11, 7-12, 7-13, 7-14: shopcart 购物车组件

```js
selectFoods: {
  type: Array,
  default() {
    return [
      {
        price: 10,
        count: 1
      }
    ]
  }
},
desc: {
  type: Object,
  default() {
    return {
      all: '全部',
      positive: '满意',
      negative: '吐槽'
    }
  }
}
```

## 7-15, 7-16, 7-17: cartcontrol 组件

- +- button

## 7-18, 7-19, 7-20: 购物车小球动画实现

## 7-21, 7-22, 7-23, 7-24: 购物车详情页实现

## 8-1, 8-2, 8-3, 8-4, 8-5: 商品详情页实现

```css
/* 高宽度相等 */
div {
  position: relatie;
  padding-top: 100%;
  width: 100%;
  height: 0;
}
```

## 8-6: split 组件实现

## 8-7, 8-8, 8-9, 8-10, 8-11: ratingselect 组件

- **food.vue** & **ratingSelect.vue**

## 8-12, 8-13, 8-14, 8-15, 8-16, 18-17: 评价列表

- **✨**
- format Date
- 8-16, 8-17
- formatDate(date, 'yyyy-MM-dd hh:mm') **common/js/date.js**

## 9-1, 9-2, 9-3: ratings 组件开发-overview 开发

- **ratings.vue**

## 9-4, 9-5, 9-6: ratings 组件开发-评价列表

- **ratings.vue**

## 10-1, 10-2: seller 组件开发-overview 开发

- **seller.vue**

## 10-3, 10-4: seller 组件开发-公告与活动开发

- **seller.vue**

## 10-5: seller 组件开发-BScroll 应用

- **seller.vue**

## 10-6: seller 组件开发-商家实景图

- **✨**
- **seller.vue**
- 排列一行的能滚动的图片, (better-scroll)

## 10-7: seller 组件开发-商家信息

- **seller.vue**

## 10-8, 10-9, 10-10: seller 组件开发-收藏商家

- **✨**
- **seller.vue** **App.vue** **util.js** **seller.vue** **store.js**
- immediately run function
- parse url parameter
- save localStorage
- read localStorage
- immediately run function

## 10-11 seller 组件开发-体验优化

- **App.vue**
- keep-alive

## 11-1: package bug

```console
npm run build
```

## 11-2: node for build files

> **prod.server.js**

## 12-1: summary

## 13-1: package.json, build change

## 13-2: V2.0 change

- route
- v-for
- v-el
- v-ref
- only one route component
- $dispatch remove
- events remove
- cannot directly modify the prop that is passed in to the parent component in the subcomponent.
- transition
- keep-alive

## 13-3: V2.0 change fix

## bug: npm run build

## bug: node prod.server.js
