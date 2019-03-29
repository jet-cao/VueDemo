<template>
  <div class="box" @mouseover="stop" @mouseout="turn" @touchstart="touchStart" @touchend= "touchEnd">
    <transition :name="way">
      <div v-for="(content, index) in newsList" :key="index" v-if="index==current" class="content">
        <img :src="content.thumbnail_pic_s" :alt="content.title">
        <div class="title">{{content.title}}</div>
      </div>
    </transition>
    <span class="contral" style="left:0" @click="turnLeft">&lt</span>
    <span class="contral" style="right:0" @click="turnRight">&gt</span>
  </div>
</template>

<script>
export default {
  props: ['newsList'],
  data: function () {
    return {
      current: 0,
      way: 'toLeft',
      interval: true,
      positionX: ''
    }
  },
  methods: {
    turnLeft () {
      this.way = 'toLeft'
      if (this.interval) {
        if (this.current === this.newsList.length - 1) {
          this.current = 0
        } else {
          this.current++
        }
      }
    },
    turnRight () {
      this.way = 'toRight'
      if (this.interval) {
        if (this.current <= 0) {
          this.current = this.newsList.length - 1
        } else {
          this.current--
        }
      }
    },
    stop () {
      clearInterval(this.timerId)
    },
    turn () {
      this.timerId = setInterval(this.turnLeft, 4000)
    },
    touchStart (e) {
      this.positionX = e.touches[0].pageX
      clearInterval(this.timerId)
    },
    touchEnd (e) {
      if (this.positionX < e.changedTouches[0].pageX) {
        this.turnRight()
      } else if (this.positionX > e.changedTouches[0].pageX) {
        this.turnLeft()
      }
    }
  },
  created: function () {
    this.timerId = setInterval(this.turnLeft, 4000)
  }
}
</script>

<style lang="less" scoped>
.box {
  position: relative;
  width: 100%;
  height: 16rem;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  .contral {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    display: none;
    font-size: 2rem;
    background-color: rgba(240, 248, 255, 0.568);
    cursor: pointer;
  }
  &:hover {
    .contral {
      display: block;
    }
    .content {
      color: tomato;
    }
  }
  .content {
    position: absolute;
    display: inline-block;
    color: rgb(10, 31, 48);
    img {
      width: 120%;
      height: 13rem;
    }
    .title {
      bottom: 1%;
      width: 100%;
      white-space: normal;
      text-align: center;
      background-color: rgba(240, 248, 255, 0.61);
      box-sizing: border-box;
      padding: 0.2rem;
    }
  }
}
.toLeft-enter-active,
.toLeft-leave-active {
  transition: all 0.3s;
  left: 0;
}
.toLeft-enter {
  left: 100%;
}
.toLeft-leave-to {
  left: -100%;
}
.toRight-enter-active,
.toRight-leave-active {
  transition: all 0.5s;
  left: 0;
}
.toRight-enter {
  left: -100%;
}
.toRight-leave-to {
  left: 100%;
}
@media screen and (max-width: 420px) {
  .box {
    .content {
      img {
        width: 25rem;
      }
      .title {
        width: 98%
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .box {
    .content {
      img {
        width: 25rem;
      }
      .title {
        width: 90%
      }
    }
  }
}
@media screen and (max-width: 420px) {
  .box {
    .content {
      .title {
        width: 75%
      }
    }
  }
}
</style>
