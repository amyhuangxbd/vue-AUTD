<template>
    <div class="home_container">
        <Hello father-component="home"></Hello>
    </div>
</template>

<script>
import Hello from '../../components/Hello'

export default {
  name: 'home',
  components: {
    Hello
  },
  created () {
  }
}
</script>

<style scoped>
  .home_container{

  }
</style>
