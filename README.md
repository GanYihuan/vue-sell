# imooc-sell

> A Vue.js project

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


# Vue-高仿饿了么APP


## 3-1: introduce vue-cli
_✨_
```
npm install -g vue-cli
vue init <template-name> <project-name>
```

## 3-2: begin vue develop
_✨✨_
##### Node > 4
```
node -v
```
##### install vue-cli
```
npm install -g vue-cli
```
##### check project
```
vue list
```
##### init project
```
vue init webpack imooc-sell
```
##### ESLint -> Yes
##### Standard
##### karma + mocha -> No
##### e2e tests -> No
##### check dialog
```
ll -a
```
##### package.json
```
npm install
```
##### run in browser
```
npm run dev
```
##### open in browser (http://localhost:8080/#/)


## 3-3: introduce vue-project structure
_✨✨_
##### build -> webpack config
##### config -> webpack config
##### node_modules -> npm install
##### src -> code
##### static -> Third party static resources.
##### .gitkeep -> When the directory is empty, it can also be submitted to the repository.
##### .babelrc -> babel config es6 Compiled into es5
##### .editorconfig -> Compiler configuration
##### .eslintignore -> Ignore the directory files for syntax checking.
##### .eslintrc.js -> eslint Syntax detection configuration


## 3-4: introduce vue-project structure
_✨✨_


## 3-5: webpack(1)
_✨✨✨✨✨_
## 3-6: webpack(2)
## 3-7: webpack(3)


## 4-1: introduce project
_✨_


## 4-2: add img
_✨✨_


## 4-3: IconMoon create SVG
_✨✨_


## 4-4: Directory structure design
_✨✨_
##### common/fonts : place IconMoon down load icon


## 4-5: mock data
_✨✨✨_
##### 1.add data.json
_data.json_
##### 2.install vue-resource better-scroll sass stylus
```
cnpm install vue-resource better-scroll --save
cnpm install stylus stylus-loader --save-dev
cnpm install node-sass sass-loader --save-dev
```
##### check data in browser
[data](http://localhost:8080/api/goods)
##### 3. set alias path
_build/webapck.base.conf.js_
##### 4. modify .eslintrc.js add rules
_/.eslintrc.js_
##### 5.modify config dialog index.js files, modify host
_/config/index.js_
##### 6. use webpack inside devServer，set before()
_/build/webpack.dev.conf.js_
##### 7. router.js
_/src/router/index.js_



## 5-1
_✨✨_
##### css reset
_static/css/reset.css_
##### index.html viewport config
##### modify .eslintrc.js add rules
_/.eslintrc.js_
##### skip eslint check
/* eslint-disable no-new */


## 5-2: 
_✨✨_
##### intellij ide
> Editor -> File and code template > add Files, extension 'vue'
##### header component


## 5-3: header styles
_✨✨_


## 5-4, 5-5: router config
_✨✨✨_
##### router
```
npm install vue-router
```


## 5-6: css, run in mobile
_✨✨✨_
##### Mobile phone preview, 草料二维码
##### 1.check IP, copy
```
ifconfig
```
##### 2.open in browser
```
npm run dev
```
##### 3.url
[url](localhost:8080/#/goods)
##### 4.url change
> (ip):8080/#/goods
##### 5.[草料](https://cli.im/), copy in  
> (ip):8080/#/goods 
##### 6.WeChat scan open.
##### Suitable for different dip screens.
_base.scss_
##### One pixel line
_mixin.scss_
##### clear fix
_mixin.scss_
##### 2x3x image
_mixin.scss_


## 6-1, 6-2: Front end interaction: jsonp, xmlhttprequest
_✨✨✨_
```
npm install vue-resource --save
```


## 6-3, 6-4, 6-5, 6-6, 6-7, 6-8: header styles
_✨✨✨_


## 6-9, 6-10: Layer thickness styles
##### sticky layout
_✨✨✨_


## 6-11, 6-12, 6-13: star component
_✨✨✨_
_star.vue_


## 6-14, 6-15, 6-16: flex Implement line + character + line, animate
_✨✨✨_


## 7-1: async The incoming data
_✨✨✨_
_goods.vue_
##### goods.vue styles


## 7-2: The left column styles
_✨✨✨_
_goods.vue_


## 7-3, 7-4, 7-5: The right column styles
_✨✨✨_
_goods.vue_


## 7-6, 7-7, 7-8: better-scroll
_✨✨✨✨_
_goods.vue_


## 7-9: shopping cart
_✨✨✨✨_
## 左侧边栏的选择，右侧滚动到指定菜品


## cartControl.vue, 数量加减控制


## goods 底部的购物车


## 球体动画不懂?


## 8-1 --- 8-6, food.vue
## 宽高相等容器
```
  .image-header {
    // 子元素 img position: absolute, 父元素position: relative
    position: relative;
    // 宽高相等容器
    padding-top: 100%;
    width: 100%;
    height: 0;
```
## split 组件


## 8-7 --- 8-11
## ratingSelect 组件


## 8-12 --- 8-17
## 评价列表
## 时间过滤条件formatDate


## ratings 界面


## seller 界面
## saveToLocal ?
## loadFromLocal ?
## 滚动轮播图
