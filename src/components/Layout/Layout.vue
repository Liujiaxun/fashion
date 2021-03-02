<template>
  <div :class="`layout ${showBar ? 'showBar' : ''}`">
    <div class="main">
      <van-pull-refresh
        v-model="loading"
        @refresh="onRefreshFunc"
        :disabled="disabledRefresh"
        class="main"
      >
        <p>刷新次数: {{ count }}</p>
        <slot></slot>
      </van-pull-refresh>
    </div>
    <div class="navBar">
      <NavBar />
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";
import NavBar from "src/components/NavBar/NavBar";
export default {
  props: ["showBar", "onRefresh", "disabledRefresh"],
  components: {
    NavBar
  },
  setup(props, ctx) {
    const state = reactive({
      loading: false,
      count: 0
    });
    onMounted(() => {
      console.log(1, props.showBar);
    });
    const onRefreshFunc = () => {
      state.count++;
      ctx.emit("onRefresh", () => {
        state.loading = false;
      });
    };
    return {
      ...toRefs(state),
      onRefreshFunc
    };
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  &.showBar {
    padding-bottom: 72px;
  }
  .main {
    height: 100%;
    width: 100%;
    overflow: hidden auto;
  }
  .navBar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 72px;
  }
}
</style>
