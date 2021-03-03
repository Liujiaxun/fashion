<template>
  <div class="recommend">
    <div class="categroy" id="categroy">
      <div class="all" :ref="ref => (allNav = ref)">
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
        v-model="loading"
        @refresh="onRefreshFunc"
        class="recommendMain"
      >
        <div class="content">
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>1232</div>
        </div>
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
export default {
  setup() {
    const allNav = ref();
    const sreenWidth = window.innerWidth;
    const state = reactive({
      loading: false,
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
        state.loading = false;
      }, 1000);
    };
    const handleSelectNav = index => {
      state.navIndex = index;
    };

    onMounted(() => {
      nextTick(() => {
        const categroyDom = document.getElementById("categroy");
        categroyDom.addEventListener("scroll", function() {
          allNav.value.style.transform = `translateX(0px)`;
        });
      });
    });

    watch(
      () => state.navIndex,
      a => {
        const itemNode = document.getElementsByClassName("item")[a];
        const offsetLeft = itemNode.offsetLeft;
        const m = sreenWidth / 2;
        if (offsetLeft > m && allNav.value.offsetWidth - offsetLeft > m) {
          allNav.value.style.transform = `translateX(-${offsetLeft -
            m +
            itemNode.offsetWidth / 2}px)`;
        } else {
          allNav.value.style.transform = `translateX(0px)`;
        }
      }
    );

    watchEffect(() => {
      // console.log(state.navIndex);
    });

    return {
      ...toRefs(state),
      onRefreshFunc,
      handleSelectNav,
      allNav
    };
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  position: relative;
  padding-top: 30px;
  height: 100%;
  .recommendMain {
    height: 100%;
    .content {
      width: 100%;
      height: 100%;
      overflow: hidden scroll;
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
    overflow: scroll hidden;
    .all {
      display: inline-block;
      width: auto;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap; /* 不换行 */
      padding-right: 30px;

      .item {
        display: inline-block;
        margin: 0 8px;
        font-size: 14px;
        &.active {
          color: #333;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
