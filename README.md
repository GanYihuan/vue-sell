# imooc-sell

> 慕课网 Vue-高仿饿了么APP

## Build Setup

``` bash
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

## 3-1 Vue-cli介绍

- ✨

```shell
npm install -g vue-cli
vue init webpack imooc-sell
```

## 3-2 Vue-cli安装

- ✨✨
- Node > 4
- static/3-2

```shell
npm install
npm run dev
```

## 3-3 项目运行

- introduce vue-project structure

- build
> webpack config

- config file
> webpack config

- node_modules file
> npm install

- src file
> code

- static file
> Third party static resources.

- .gitkeep file
> When the directory is empty, it can also be submitted to the repository.

- .babelrc file
> babel config es6 Compiled into es5

- .editorconfig file
> Compiler configuration

- .eslintignore file
> Ignore the directory files for syntax checking.

- .eslintrc.js file
> [ESLint document](http://eslint.cn/docs/rules/)
> eslint Syntax detection configuration

- package.json file
- script: config 'npm run dev'
- devDependencies: This package is used only in the development phase, which is not needed when it comes online

## 3-4 项目文件介绍

- ✨✨
- use component

## 3-5: webpack(1)

-✨✨✨✨✨

## 3-6: webpack(2)

- ✨✨✨✨✨

## 3-7: webpack(3)

- ✨✨✨✨✨

## 4-1 需求分析

- ✨

## 4-2: 项目资源准备

- ✨✨
- [Device pixel ratio](https://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)

## 4-3 图标字体制作

- ✨✨
- [IconMoon](https://icomoon.io/#icons-icomoon)

## 4-4 项目目录设计

- ✨✨
- create IconMoon font file **common/fonts** **common/scss/icon.scss**

## 4-5 mock数据

- ✨✨✨
- **data.json**
> **webpack.dev.conf.js**

- browser check data
- [seller data](http://localhost:8088/api/seller)
- [goods data](http://localhost:8088/api/goods)
- [ratings data](http://localhost:8088/api/ratings)

- install vue-resource better-scroll sass

```shell
npm install vue-resource better-scroll --save
npm install node-sass sass-loader --save-dev
```

- set alias path
> **build/webapck.base.conf.js**

- modify port
> **config/index.js**

- modify ESLint rules
> **eslintrc.js** [eslint](http://eslint.cn/docs/4.0.0/rules/semi-style)

- set data source
> **webpack.dev.conf.js**

## 5-1, 5-2, 5-3: 组件拆分

- ✨✨
- **index.html** use **static/css/reset.css**, meta setting
- skip ESLint check

```js
/* eslint-disable no-new
```

- **App.vue**

## 5-4, 5-5: vue-router

- ✨✨
> **router/route.js**

```shell
npm install vue-router
```

## 5-6 1像素border实现

- ✨✨✨
- Mobile phone preview
- check IP

```shell
ifconfig
npm run dev
```

- [url](localhost:8088/#/goods)
- url replace then become IP:8088/#/goods
- [草料website](https://cli.im/) use IP:8088/#/goods
- **mixin.scss** **base.scss**
1. One pixel line
2. 2x3x image
3. clear float

## 6-1, 6-2 Vue-resource应用

- ✨✨✨
- front-end back-end interaction
- **main.js** **App.vue**
- vue-resource: Ajax request, XMLHttpRequest

```shell
npm install vue-resource --save
```

## 6-3, 6-4, 6-5, 6-6, 6-7, 6-8 外部组件

- ✨✨✨
- **header.vue** style
- position: relative; // the reasons of relative positioning, the following elements have absolute positioning
- eliminate the gap, father element set font-size: 0
- display: inline-block; // in one row to show
- vertical-align: top; // at the top of the alignment
- display: inline-block; // the inner element(span) becomes a block element, can set the width and height
- overflow: hidden; // 超出显示...
  text-overflow: ellipsis; // 超出显示...
  white-space: nowrap; // 超出显示...
- filter: blur(10px); // fuzzy background picture
- height: 24px; // vertical direction center
  line-height: 24px; // vertical direction center
  text-align: center; // horizontal direction center

## 6-9, 6-10 详情弹层页 - 实现弹出层

- ✨✨✨
- sticky layout: A,B,C,D,E
- min-height: 100%; // content will change
- A: A part clearfix
- B: devide A B part
- padding-bottom: 64px; // C: A part space for B part
- margin: -64px auto 0; // D: B part margin embed the padding of A part
- clear: both; // E: B part clearfix

## 6-11, 6-12, 6-13 详情弹层页 - star组件抽象

- ✨✨✨✨
- star component **start.vue**

## 6-14 详情弹层页 - 小标题自适应经典flex布局实现

- ✨✨✨
- line + character + line, flex layout

## 6-15, 6-16 详情弹层页 - header剩余组件实现

- ✨✨✨
- animate

## 7-1 布局编写

- ✨✨✨
- Asynchronous get data **goods.vue**

## 7-2 左侧menu布局

- ✨✨✨
- display: table; // multi-line text, vertically centered
- display: table-cell; // father element: display: table
- vertical-align: middle; // 多行文字垂直居中

## 7-3, 7-4, 7-5 右侧食品列表布局

- ✨✨

## 7-6, 7-7, 7-8: better-scroll运用

- ✨✨✨✨

```shell
npm install better-scroll --save
```

- /* better-scroll */
  /* at PC will trigger twice event, stop this */
  if (!event._constructed) {
    return
  }

## 7-9, 7-10, 7-11, 7-12, 7-13, 7-14: shopcart购物车组件

- ✨✨✨
- selectFoods: {
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

## 7-15, 7-16, 7-17: cartcontrol组件

- ✨✨✨
- +- button

## 7-18, 7-19, 7-20: 购物车小球动画实现

- ✨✨✨✨

## 7-21, 7-22, 7-23, 7-24: 购物车详情页实现

- ✨✨✨

## 8-1, 8-2: food styles, transfer data _✨✨_

## 8-3: food data bind _✨✨_

> **food.scss**
- high width equal container

## 8-4: food styles, better-scroll _✨✨_

## 8-5: food content _✨✨_

## 8-6: split _✨✨_

## 8-7, 8-8, 8-9: ratingSelect styles, pass data _✨✨✨_

> **food.vue** & **ratingSelect.vue**

## 8-10, 8-11: ratingSelect switch _✨✨✨_

> **ratingSelect.vue**

## 8-12, 8-13: food data bind, rating-wrapper, styles _✨✨✨_

> **food.vue**

## 8-14: watch _✨✨✨_

> **food.vue**

## 8-15, 8-16, 8-17: format Date _✨✨✨✨_

> **food.vue** & **date.js**

## 9-1, 9-2, 9-3: ratings-content styles _✨✨_

> **ratings.vue**

## 9-4, 9-5, 9-6: styles, data bind _✨✨_

> **ratings.vue**

## 10-1, 10-2: overview data bind, styles _✨✨_

> **seller.vue**

## 10-3, 10-4: bulletin data bind, styles _✨✨_

> **seller.vue**

## 10-5: better-scroll _✨✨_

> **seller.vue**

## 10-6: pics data bind, styles, better-scroll _✨✨✨_

> **seller.vue**
- 排列一行的能滚动的图片, (better-scroll)

## 10-7: info data bind, styles _✨✨_

> **seller.vue**

## 10-8: favorite data bind, styles _✨✨_

> **seller.vue**

## 10-9: favorite, parse url parameter _✨✨✨✨_

> **App.vue** & **util.js** & **seller.vue**

- immediately run function
- parse url parameter

## 10-10: favorite, localStorage _✨✨✨✨_

> **seller.vue** & **store.js**

- save localStorage
- read localStorage
- immediately run function

## 10-11: optimize _✨✨_

> **App.vue**

- keep-alive

## 11-1: package bug

```shell
npm run build
```

## 11-2: node for build files _✨✨✨✨✨_

> **prod.server.js**

## 12-1: summary _✨_

## 13-1: package.json, build change _✨_

## 13-2: V2.0 change _✨✨✨✨_

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

## 13-3: V2.0 change fix _✨✨✨✨_

## bug: npm run build

## bug: node prod.server.js
