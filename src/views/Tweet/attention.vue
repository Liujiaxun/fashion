<template>
  <div class="attention">
    <refresh-load-more />
  </div>
</template>
<script>
import { reactive } from "vue";
import RefreshLoadMore from "src/components/RefreshLoadMore/RefreshLoadMore.vue";
export default {
  components: { RefreshLoadMore },
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    });
    const onLoad = () => {
      console.log(1, state.refreshing, state.loading);
      if (state.refreshing || state.loading) {
        console.log("正在请求，终止");
        return;
      }
      setTimeout(() => {
        if (state.refreshing) {
          state.list = [];
          state.refreshing = false;
        }
        if (state.list.length >= 40) {
          state.finished = true;
        } else {
          for (let i = 0; i < 15; i++) {
            state.list.push(state.list.length + 1);
          }
        }
        state.loading = false;
      }, 1000);
    };
    const onRefresh = () => {
      // 清空列表数据
      state.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true;
      console.log("刷新");
      onLoad();
    };
    return {
      ...state,
      onLoad,
      onRefresh
    };
  }
};
</script>
<style lang="scss" scoped>
.attention {
  background: green;
  min-height: 100%;
}
</style>
