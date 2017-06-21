<template>
    <div class="home_container">
      <div id="sliderbasicloop">
      <slider :pages="pages" :sliderinit="sliderinit" @slide='slide'>
        <div class="sliderButton">
          <button @click="slidePre">上一页</button>
          <button @click="slideNext">下一页</button>
          <button @click="appendslider">添加一页</button>
          <button @click="turnTo(2)">跳转到第三页</button>
        </div>
      </slider>
      </div>
        
        <item father-component="home"></item>
    </div>
</template>

<script>
import item from '../../components/item'
import slider from '../../components/slider'

export default {
  data () {
    return {
      list: [
        {
          item: 'test'
        }
      ],
      imgList: [
        {

        }
      ],
      pages: [
        {
          title: '',
          style: {
            background: '#4b2fc3'
          }
        },
        {
          title: '',
          style: {
            background: '#33bfc3'
          }
        },
        {
          title: 'slide3',
          style: {
            background: '#4bbfc3'
          }
        }
      ],
      sliderinit: {
        currentPage: 0, // 当前页码
        thresholdDistance: 50, // 滑动判定距离
        thresholdTime: 100 // 滑动判定时间
        // autoplay: 1000, // 自动滚动[ms]
        // loop: false, // 循环滚动
        // direction: 'horizontal', // 方向设置，垂直滚动 horizontal or vertical
        // infinite: 1, // 无限滚动前后遍历数
        // slidesToScroll: 1 // 每次滑动项数
      }
    }
  },
  name: 'home',
  components: {
    item,
    slider
  },
  created () {
  },
  methods: {
    turnTo (num) {
      // 传递事件 vue 2.0 传递事件修改了，好的写法应该直接写在空vue类中
      this.$children[0].$emit('slideTo', num)
      console.log(this)
    },
    slideNext () {
      this.$children[0].$emit('slideNext')
    },
    slidePre () {
      this.$children[0].$emit('slidePre')
    },
    appendslider () {
      this.someList.push({
        title: 'slidernew',
        style: {
          background: '#333',
          color: '#fff'
        }
      })
    },
    // 监听事件发生了变化,需要指向一个子组件实例
    slide (pagenum) {
      console.log('currentPage:' + pagenum)
    }
  }
}
</script>

<style lang="less" scoped>
  .home_container{

  }
</style>
