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

## 3-2: begin vue develop3-2: begin vue develop
_✨✨_
1. Node > 4
```
node -v
```
2. install vue-cli
```
npm install -g vue-cli
```
3. check project
```
vue list
```
4. init project
```
vue init webpack imooc-sell
```
5. ESLint -> Yes
6. Standard
7. karma + mocha -> No
8. e2e tests -> No
9. check dialog
```
ll -a
```
10. package.json
```
npm install
```
11. run in browser
```
npm run dev
```
12. open in browser (http://localhost:8080/#/)


## 3-3: introduce vue-project structure
_✨✨_
##### build
> webpack config
##### config 
> webpack config
##### node_modules 
> npm install
##### src 
> code
##### static 
> Third party static resources.
##### .gitkeep 
> When the directory is empty, it can also be submitted to the repository.
##### .babelrc 
> babel config es6 Compiled into es5
##### .editorconfig 
> Compiler configuration
##### .eslintignore 
> Ignore the directory files for syntax checking.
##### .eslintrc.js 
[ESLint document](http://eslint.cn/docs/rules/)
> eslint Syntax detection configuration
##### package.json
> 1. script: config 'npm run dev'
> 2. devDependencies: This package is used only in the development phase, which is not needed when it comes online.


## 3-4: vue-project entrance function
_✨✨_
_main.js_
_App.vue_


## 3-5: webpack(1)
_✨✨✨✨✨_
## 3-6: webpack(2)
_✨✨✨✨✨_
## 3-7: webpack(3)
_✨✨✨✨✨_


## 4-1: introduce project
_✨_


## 4-2: Device pixel ratio, add image
_✨✨_


## 4-3: IconMoon create SVG image
_✨✨_
[IconMoon website](https://icomoon.io/#icons-icomoon)


## 4-4: placed IconMoon download icon
_✨✨_
_common/fonts_


## 4-5: mock data
_✨✨✨_
##### browser check data
1. [seller data](http://localhost:8088/api/seller)
2. [goods data](http://localhost:8088/api/goods)
3. [ratings data](http://localhost:8088/api/ratings)
##### 1. add data.json
_data.json_
##### 2. install vue-resource better-scroll sass stylus
```
npm install vue-resource better-scroll --save
npm install stylus stylus-loader --save-dev
npm install node-sass sass-loader --save-dev
```
##### 3. set alias path
_build/webapck.base.conf.js_
##### 4. modify .eslintrc.js add rules
_/.eslintrc.js_
##### 5. modify config index.js files, modify host
_/config/index.js_
##### 6. use webpack inside devServer，set data source
_/build/webpack.dev.conf.js_
##### 7. router.js
_/src/router/index.js_


## 5-1, 5-2, 5-3: skeleton
_✨✨_
##### css reset
_static/css/reset.css_
##### index.html viewport config
_index.html_
##### modify .eslintrc.js add rules
_.eslintrc.js_
##### skip eslint check
/* eslint-disable no-new */
##### intellij ide
> Editor -> File and code template > add Files, extension 'vue'
##### flex layout
_App.vue_


## 5-4, 5-5: router config
_✨✨✨_
_router/route.js_
##### router
```
npm install vue-router
```


## 5-6: css setting, run in mobile
_✨✨✨_
##### Mobile phone preview, 草料二维码
##### 1. check IP, iTerm
```
ifconfig
```
##### 2. open in browser
```
npm run dev
```
##### 3. url
[url](localhost:8080/#/goods)
##### 4. url replace
> IP:8080/#/goods
##### 5. [草料website](https://cli.im/)  
> IP:8080/#/goods 
##### 6. WeChat scan then open
##### css
_base.scss_
1. Suitable for different dip screens
2. clear fix

_mixin.scss_
1. One pixel line
2. 2x3x image



## 6-1, 6-2: front-end back-end interaction  
_✨✨✨_
_main.js_
_App.vue_
##### vue-resource: Ajax request, XMLHttpRequest
```
npm install vue-resource --save
```


## 6-3, 6-4, 6-5, 6-6, 6-7, 6-8: header styles
_✨✨_
_header.vue_


## 6-9: sticky layout show and hide
_✨✨_
_header.vue_


## 6-10: sticky layout styles
_✨✨✨_
_header.vue_


## 6-11, 6-12, 6-13: star component
_✨✨✨_
_star.vue_


## 6-14, 6-15, 6-16: line + character + line styles, animate
_✨✨✨_
_header.vue_


## 7-1: Asynchronous transfer data
_✨✨✨_
_goods.vue_


## 7-2: The left column styles
_✨✨_
_goods.vue_


## 7-3, 7-4, 7-5: The right column styles
_✨✨_
_goods.vue_


## 7-6, 7-7, 7-8: better-scroll
_✨✨✨_
_goods.vue_


## 7-9, 7-10: shopping cart styles
_✨✨_
_shopCart.vue_


## 7-11, 7-12, 7-13, 7-14: shopping cart data bind
_✨✨✨_
_shopCart.vue_


## 7-15, 7-16: + - button
_✨✨✨_
_cartControl.vue_


## 7-17: shopping cart data
_✨✨✨_
_goods.vue_
_cartcontrol.vue_


## 7-18, 7-19, 7-20: shopping cart ball animate
_✨✨✨✨_
_shopCart.vue_


## 7-21: shopCart list data bind
_✨✨✨_
_shopCart.vue_


## 7-22, 7-23: shopCart list show and hide, styles
_✨✨✨_
_shopCart.vue_


## 7-24: shopCart list mask
_✨✨_
_shopCart.vue_


## 8-1, 8-2: food styles, transfer data
_✨✨_
_goods.vue_
_food.vue_


## 8-3: food data bind
_✨✨_
_food.vue_
##### High width equal container


## 8-4: food styles, better-scroll
_✨✨✨_
_food.vue_


## 8-5: food content
_✨✨✨_
_food.vue_


## 8-6: food layout
_✨✨_
_split.vue_
_food.vue_


## 8-7, 8-8, 8-9: ratingSelect styles, pass data
_✨✨✨_
_food.vue_
_ratingSelect.vue_

 
## 8-10, 8-11: ratingSelect switch
_✨✨✨_
_ratingSelect.vue_

 
## 8-12, 8-13: food data bind, rating-wrapper, styles
_✨✨✨_
_food.vue_

 
## 8-14: food watch
_✨✨✨_
_food.vue_

 
## 8-15, 8-16, 8-17: food matDate
_✨✨✨✨_
_food.vue_

 
## 9-1: styles
_✨✨_
_ratings.vue_

 
## 9-2: styles, data bind
_✨✨_
_ratings.vue_

 
## 9-3: styles 
_✨✨_
_ratings.vue_

 
## 9-4, 9-5, 9-6: styles, data bind  
_✨✨_
_ratings.vue_

 
## 10-1: overview data bind  
_✨✨_
_seller.vue_

 
## 10-2: overview styles
_✨✨_
_seller.vue_

 
## 10-3: bulletin data bind, styles
_✨✨_
_seller.vue_

 
## 10-4: bulletin data bind, styles
_✨✨_
_seller.vue_

 
## 10-5: better-scroll
_✨✨_
_seller.vue_

 
## 10-6: pics data bind, styles, better-scroll
_✨✨✨_
_seller.vue_

 
## 10-7: info data bind, styles
_✨✨_
_seller.vue_

 
## 10-8: favorite data bind, styles
_✨✨_
_seller.vue_

 
## 10-9: favorite, parse url parameter
_✨✨✨✨_
_seller.vue_
_util.js_
##### parse url parameter
##### immediately run function

 
## 10-10: favorite, localStorage
_✨✨✨✨_
_seller.vue_
_store.js_
##### save localStorage
##### read localStorage
##### immediately run function

 
## 10-11: optimize
_✨✨_
_App.vue_
##### keep-alive


## 11-1: package
_✨✨✨✨✨_
###### iTerm
```
npm run build
```


## 11-2: node for build files
_✨✨✨✨✨_
_prod.server.js_


## 12-1: summary
_✨_


## 13-1: package.json, build change
_✨_


## 13-2: V2.0 change
_✨✨✨✨_
##### route
##### v-for
##### v-el
##### v-ref
##### only one route component
##### $dispatch remove
##### events remove
##### cannot directly modify the prop that is passed in to the parent component in the subcomponent.
##### transition
##### keep-alive


## 13-3: V2.0 change fix
_✨✨✨✨_
