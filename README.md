# AuTD

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

# run e2e tests
npm run e2e

# run all tests
npm test
```
### Step by Step to build this 
### Getting Started

First, build a project template for vue-cli. It is recommended to use npm 3+ for a more efficient dependency tree.

``` bash
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

### Add vue-router
  1. install vue-router

``` bash
npm install --save vue-router
```
  2. update src/router/index.js

``` bash
import Hello from '@/components/Hello'

export default [{
  path: '/',
  component: Hello
}]

```
  3. update src/main.js

``` bash
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')

```
  4. update index.html

``` bash
<div id="app">
    	<router-view></router-view>
</div>

```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
