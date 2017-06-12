<template>
  <div class="hello">
    <div class="item_back item_container_style">
      <div class="item_list_container" v-if="this.$store.state.itemDetail.length > 0">
        <ul>
          <li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" class="item_list">
            <span class="option_detail">{{item.answer_name}}</span>
          </li>
        </ul>
        <button @click="increment">+</button>
      </div>
    </div>
    <div>Test</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemId: null
    }
  },
  computed: mapState({
    itemNum: state => state.itemNum,
    itemDetail: state => state.itemDetail
  }),
  created () {
    this.$store.dispatch('initializeData')
    this.$store.dispatch('getData')
  },
  methods: {
    increment () {
      this.$store.dispatch('addNum', 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
