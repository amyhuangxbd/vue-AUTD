<template>
    <div class="home_container">
        <item father-component="home"></item>
    </div>
</template>

<script>
import item from '../../components/item'

export default {
  name: 'home',
  components: {
    item
  },
  created () {
  }
}
</script>

<style scoped>
  .home_container{

  }
</style>
