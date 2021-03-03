<template>
  <Layout :showBar="true" @onRefresh="onRefresh" :disabledRefresh="true">
    <div>home</div>
  </Layout>
</template>
<script>
import Layout from "src/components/Layout/Layout";
export default {
  components: {
    Layout
  },
  setup() {
    const onRefresh = cb => {
      console.log("开始刷新");
      setTimeout(() => {
        cb && cb();
      }, 2000);
    };
    return {
      onRefresh
    };
  }
};
</script>
