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
  2. update src/App.vue

``` bash
<template>
  <div>
      <router-view></router-view>
    </div>
</template>

<script>

    export default {
    
    }

</script>

<style>
    
</style>

```
  3. update src/router/index.js

``` bash
import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(require('../page/item')), 'item')
  }]
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
### Add vuex
  1. install vuex

``` bash
npm install --save vuex
```
  2. Add State, Mutations, Actions
src/store/index.js
``` bash
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  itemNum: 1,
  answerid: {}
  ...
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})

```
src/store/mutations.js
``` bash
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const GET_DATA = 'GET_DATA'

export default {
  [GET_DATA] (state, payload) {
    if (payload.res.httpStatusCode === 200) {
      state.itemDetail = payload.res.topiclist
    }
  },

  [ADD_ITEMNUM] (state, payload) {
    state.itemNum += payload.num
  }
}

```
src/store/action.js
``` bash
export default {
  addNum ({ commit, state }, id) {
    commit('REMBER_ANSWER', { id })
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', {
        num: 1
      })
    }
  }
}

```
  3. use store.dispatch to emit

``` bash
store.dispatch('addNum')
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
