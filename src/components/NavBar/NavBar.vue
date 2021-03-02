<template>
  <div class="navBar">
    <Tabbar v-model="active">
      <TabbarItem name="home" icon="home-o">标签</TabbarItem>
      <TabbarItem name="search" icon="search">标签</TabbarItem>
      <TabbarItem name="friends" icon="friends-o">标签</TabbarItem>
      <TabbarItem name="setting" icon="setting-o">标签</TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
<style lang="scss" scoped>
.navBar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
