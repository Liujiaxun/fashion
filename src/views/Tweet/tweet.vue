<template>
  <Layout :showBar="true" :disabledRefresh="true">
    <div class="tweetHeaderNav">
      <nav-bar>
        <template #left>
          <van-icon name="search" size="18" />
        </template>
        <template #title>
          <div class="navs">
            <div
              :class="`nav-item ${active === 'TweetAttention' ? 'active' : ''}`"
              @click="handleNav('/tweet/attention')"
            >
              关注
            </div>
            <div
              :class="`nav-item ${active === 'TweetRecommend' ? 'active' : ''}`"
              @click="handleNav('/tweet/recommend')"
            >
              推荐
            </div>
          </div>
        </template>
      </nav-bar>
    </div>
    <div class="tweetMain">
      <transition :name="transition">
        <keep-alive>
          <router-view class="tweetView" />
        </keep-alive>
      </transition>
    </div>
  </Layout>
</template>
<script>
import Layout from "src/components/Layout/Layout.vue";
import { NavBar } from "vant";
import { useRouter, useRoute } from "vue-router";
import { watch, ref } from "vue";
export default {
  components: { Layout, NavBar },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const active = ref(route.name);
    const transition = ref("slide-right");
    const handleNav = nav => {
      router.push(nav);
    };
    router.beforeEach(() => {
      if (active.value === "TweetRecommend") {
        transition.value = "slide-right";
      } else {
        transition.value = "slide-left";
      }
    });
    watch(route, a => {
      active.value = a.name;
    });
    return {
      handleNav,
      active,
      transition
    };
  }
};
</script>
<style lang="scss" scoped>
.navs {
  display: flex;
  .nav-item {
    font-size: 16px;
    margin: 0 10px;
    transition: all 0.2s;
    font-weight: 300;
    color: #666;
    &.active {
      color: #333;
      font-weight: 500;
      transform: scale(1.1);
    }
  }
}
.tweetMain {
  height: calc(100% - 46px);
  overflow: hidden auto;
  position: relative;
  .tweetView {
    min-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    backface-visibility: hidden;
    transition: all 500ms;
    will-change: transform;
    -webkit-overflow-scrolling: touch;
  }
}

.slide-left-enter-active {
  opacity: 0;
  background: hotpink;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-enter-to,
.slide-left-leave-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-right-enter-to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
