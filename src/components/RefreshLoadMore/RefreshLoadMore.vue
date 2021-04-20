<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
      <slot></slot>
    </van-list>
  </van-pull-refresh>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    });
    const onLoad = () => {
      if (state.loading) {
        console.log("正在请求");
        return;
      }
      state.loading = true;

      console.log("调用");
      setTimeout(() => {
        console.log(state.refreshing);
        if (state.refreshing) {
          state.list = [];
          state.refreshing = false;
        }
        if (state.list.length >= 40) {
          state.finished = true;
        } else {
          for (let i = 0; i < 10; i++) {
            state.list.push(state.list.length + 1);
          }
        }
        state.loading = false;
      }, 3000);
    };
    const onRefresh = () => {
      // 清空列表数据
      state.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      onLoad();
    };
    return {
      ...toRefs(state),
      onLoad,
      onRefresh
    };
  }
};
</script>
