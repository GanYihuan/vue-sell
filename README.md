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


## 3-2: begin vue develop
## Node > 4
```
node -v
```
## install vue-cli
```
npm install -g vue-cli
```
## check project
```
vue list
```
## init project
```
vue init webpack imooc-sell
```
## ESLint -> Yes
## Standard
## karma + mocha -> No
## e2e tests -> No
## check dialog
```
ll -a
```
## package.json
```
npm install
```
## run in browser
```
npm run dev
```
## open in browser (http://localhost:8080/#/)


## 3-3: introduce vue-project structure
## build -> webpack config
## config -> webpack config
## node_modules -> npm install
## src -> code
## static -> Third party static resources.
## .gitkeep -> When the directory is empty, it can also be submitted to the repository.
## .babelrc -> babel config es6 Compiled into es5
## .editorconfig -> Compiler configuration
## .eslintignore -> Ignore the directory files for syntax checking.
## .eslintrc.js -> eslint Syntax detection configuration


## 3-4: introduce vue-project structure


## 3-5: webpack(1)
## 3-6: webpack(2)
## 3-7: webpack(3)


## 4-1: introduce project
## 设备像素比


## 4-2: add img


## 4-3: IconMoon create SVG


## 4-4: 目录结构设计
## common/fonts : 放置IconMoon下载好的图标


## 4-5: mock 假数据
## 1.add data.json
> data.json
## 2.安装 vue-resource better-scroll
```
cnpm install vue-resource better-scroll --save
```
## 安装stylus stylus-loader
```
cnpm install stylus stylus-loader --save-dev
```
## 或者安装sass sass-loader，替代上面的stylus
```
npm install node-sass sass-loader --save-dev
```
## 查看数据in browser
http://localhost:8080/api/goods
## 3.设置缩略路径
> build/webapck.base.conf.js
```
{
  'src': path.resolve(__dirname, '../src'),
  'common': path.resolve(__dirname, '../src/common'),
  'components': path.resolve(__dirname, '../src/components')
}
```
## 4.修改.eslintrc.js 添加规则
> /.eslintrc.js
```
'semi': ['error', 'never'],
'no-tabs': 0,
'indent': 0,
'space-before-function-paren': 0
```
## 5.修改config目录下的index.js文件
## 修改host
> /config/index.js
```
host: '0.0.0.0',
```
## 6.使用webpack内置的devServer，设置before()
> /build/webpack.dev.conf.js
```
devServer: {
  before(app) {
    app.get('/api/seller', function(req, res) {
      res.json({
        errno: 0,
        data: seller
      })
    });
    app.get('/api/goods', function(req, res) {
      res.json({
        errno: 0,
        data: goods
      })
    });
    app.get('/api/ratings', function(req, res) {
      res.json({
        errno: 0,
        data: ratings
      })
    });
  },
}
```
## 7.在单独的 router.js 路由文件中编写路由
> /src/router/index.js
```
import Vue from 'vue';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

export default new Router({
    linkActiveClass: 'active',
    routes
});
```


## 5-1
## 修改.eslintrc.js 添加规则
> /.eslintrc.js
## 跳过eslint校验规则
/* eslint-disable no-new */
## 基本设备设置
> index.html
<meta/>


## 5-2: 
## intellij ide
Editor -> File and code template
add Files, extension 'vue'
## header component


## 5-3:
## header styles


## 5-4: --- 5-5:
## styles
## router
```
npm install vue-router
```


## 5-6:
## 手机预览,草料二维码
## 1.查看IP,copy
```
ifconfig
```
## 2.open in browser
```
npm run dev
```
## 3.url
localhost:8080/#/goods
## 4.url change
(ip):8080/#/goods
## 5.草料 [https://cli.im/], copy in  
(ip):8080/#/goods 
## 6.微信扫描打开
## 适配不同dip屏幕
> base.scss
## 一像素横线
> mixin.scss
## 清除浮动
> mixin.scss
## 2x3x图
> mixin.scss


## 6-1: --- 6-2:
## 前后端交互: jsonp, xmlhttprequest
```
npm install vue-resource --save
```
## 发送数据


## 6-3: --- 6-8: 
## header styles


## 6-9: --- 6-10: 
## 弹层styles
## clearfix 样式固定套路
## stickylayout布局


## 6-11 --- 6-13
## 填充弹出层
## 星星组件 star.vue


## 6-14 --- 6-16
## flex实现行线+字符+行线
## 动画


## 7-1: goods.vue
## async 数据传入


## 7-2: 
## 左边栏styles


## 7-3: --- 7-4:
## 右边栏styles


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
