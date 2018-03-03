# Vue-高仿饿了么APP


## 3-1: introduce vue-cli


## 3-2: begin vue develop
## 安装脚手架
npm install -g vue-cli
## 查看脚手架框架
vue list
## 初始化项目
vue init webpack imooc-sell
## 查看目录
ll -a
## package.json
npm install
## run in browser
npm run dev
(http://localhost:8080/#/)


## 3-3: introduce vue-project structure


## 3-4: introduce vue-project structure


## 3-5: webpack(1)
## 3-6: webpack(2)
## 3-7: webpack(3)


## 4-1: introduce project


## 4-2: add img


## 4-3: IconMoon create SVG


## 4-4: 目录结构设计


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
## 查看数据
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
    ```````
    ```````
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


## 5-1.修改.eslintrc.js 添加规则
> /.eslintrc.js


## 5-2: 
## intellij ide
Editor -> File and code template
add Files, extension 'vue'
## 


## 5-3:
## router
```
npm install vue-router
```


## 5-4: --- 5-5:
## styles
## router


## 5-6:
## 一像素横线
## 手机预览
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
## 清除浮动
> mixin.scss
## 2x3x图
> mixin.scss


## 6-1: --- 6-2:
## 前后端交互: vue-resource
```
npm install vue-resource --save
```
## 发送数据


## 6-3: --- 6-8: 
## header styles


## 6-9: --- 6-10: 
## 弹层,弹出styles
## clearfix 样式固定套路
## stickylayout布局


## 6-11 --- 6-13
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


## 球体动画不懂
