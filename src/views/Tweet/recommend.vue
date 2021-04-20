<template>
  <div class="recommend">
    <div class="categroy" id="categroy">
      <div class="all" ref="allNav">
        <span
          @click="handleSelectNav(index)"
          :class="`item ${navIndex === index ? 'active' : ''}`"
          v-for="(item, index) in navList"
          :key="item.name"
          >{{ item.name }}({{ index }})</span
        >
      </div>
    </div>
    <div class="recommendMain">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefreshFunc"
        class="refresh"
      >
        <!-- <div class="content"> -->
        <van-list
          class="list"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div>123</div>
        </van-list>
        <!-- </div> -->

        <!-- <p>刷新次数: {{ count }}</p> -->
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import {
  reactive,
  toRefs,
  watchEffect,
  watch,
  ref,
  onMounted,
  nextTick
} from "vue";

import BScroll from "better-scroll";

export default {
  setup() {
    const allNav = ref(null);
    const scroll = ref(null);
    const sreenWidth = window.innerWidth;
    const state = reactive({
      refreshing: false,
      loading: false,
      finished: false,
      navIndex: 0,
      navList: [
        { name: "全部" },
        { name: "手表" },
        { name: "汽车" },
        { name: "美妆" },
        { name: "裤子" },
        { name: "穿搭" },
        { name: "健身" },
        { name: "健身" },
        { name: "健身" },
        { name: "健身" },
        { name: "健身" }
      ]
    });
    const onRefreshFunc = () => {
      setTimeout(() => {
        state.refreshing = false;
      }, 1000);
    };
    const onLoad = () => {};

    const handleSelectNav = index => {
      state.navIndex = index;
    };

    onMounted(() => {
      scroll.value = new BScroll(".categroy", {
        scrollX: true,
        click: true
      });
    });

    watch(
      () => state.navIndex,
      index => {
        const { maxScrollX, x: X } = scroll.value;
        const itemNode = document.getElementsByClassName("item")[index];
        const offsetLeft = itemNode.offsetLeft;
        const m = sreenWidth / 2;
        let x = 0;
        if (offsetLeft > m && allNav.value.offsetWidth - offsetLeft > m) {
          nextTick(() => {
            x = -(offsetLeft - m + itemNode.offsetWidth / 2);
          });
        } else {
          if (maxScrollX === X) {
            return;
          }
          if (Math.abs(maxScrollX) - Math.abs(X) < m) {
            x = maxScrollX;
          }
        }

        nextTick(() => {
          scroll.value.scrollTo(x);
        });
      }
    );

    watchEffect(() => {
      // console.log(state.navIndex);
    });

    return {
      ...toRefs(state),
      onRefreshFunc,
      handleSelectNav,
      onLoad,
      allNav,
      scroll
    };
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  position: relative;
  padding-top: 30px;
  height: 100%;
  overflow: hidden;
  .recommendMain {
    height: 100%;
    .refresh {
      width: 100%;
      height: 100%;
      .list {
        height: 100%;
        overflow-y: auto;
      }
    }
  }
  .categroy {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 30px;
    color: #666;
    display: flex;
    align-items: center;
    // overflow: scroll hidden;
    .all {
      display: inline-block;
      width: auto;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap; /* 不换行 */
      // padding-right: 30px;

      .item {
        display: inline-block;
        margin: 0 8px;
        font-size: 14px;
        transform: translateZ(0);
        &.active {
          color: #333;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
