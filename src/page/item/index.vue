<template>
    <div class="home_container">
        <Swiper father-component="home"></Swiper>
        <Hello father-component="home"></Hello>
    </div>
</template>

<script>
import Hello from '../../components/Hello'
import Swiper from '../../components/Swiper'

export default {
  name: 'home',
  components: {
    Hello,
    Swiper
  },
  created () {
  }
}
</script>

<style scoped>
  .home_container{

  }
</style>
