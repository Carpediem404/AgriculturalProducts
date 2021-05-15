<template>
  <div class="home-page">
    <div class="h-header">
      <!-- <SvgIcon svg-greenhousename='' :width="31" :height="31" ></SvgIcon> -->
      <SvgIcon svg-name="plant1" :wi1dth="31" :height="31" style="margin-left: 8px"></SvgIcon>
      <span class="h-header__name"> 农产品大棚管理系统 </span>
      <div class="h-header__nav">
        <router-link class="h-header__navItem" to="/green-house"><SvgIcon svg-name="greenhouse" :width="16" :height="16" style="margin-right: 8px"></SvgIcon>大棚信息管理</router-link>
        <router-link class="h-header__navItem" to="/agriculture-manage"><SvgIcon svg-name="agriculture3" :width="16" :height="16" style="margin-right: 8px"></SvgIcon>农产品信息管理</router-link>

        <router-link class="h-header__navItem" to="/device-manage"><SvgIcon svg-name="renyuanguanli2" :width="20" :height="20" style="margin-right: 8px"></SvgIcon>设备管理</router-link>
        <router-link class="h-header__navItem" to="/insect-detection"><SvgIcon svg-name="Plant-Care1" :width="16" :height="16" style="margin-right: 8px"></SvgIcon>监测虫情</router-link>
      </div>
      <!-- <div class="h-header__right">
        <div class="h-header__group">
          <SvgIcon svg-name="fuwu1" :width="16" :height="16"></SvgIcon>
          <span>服务支持</span>
          <SvgIcon svg-name="arrow-bottom" class-name="service" :width="16" :height="16"></SvgIcon>
          <div class="h-header__popup">
            <div class="h-header__popupItem">帮助中心</div>
            <div class="h-header__popupItem">意见反馈</div>
          </div>
        </div>
        <div class="h-header__group">
          <SvgIcon svg-name="chengyuan" :width="16" :height="16"></SvgIcon>
          <span>用户名</span>
          <SvgIcon svg-name="arrow-bottom" :width="16" :height="16"></SvgIcon>
          <div class="h-header__popup">
            <div class="h-header__popupItem">个人中心</div>
            <div class="h-header__popupItem">账号设置</div>
            <div class="h-header__popupItem">退出登录</div>
          </div>
        </div>
      </div> -->
    </div>
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <!-- <transition :name="transitionName">
    <router-view></router-view>
  </transition> -->
</template>
<script>
import '@/assets/imgs/logo.png';
// import LeftNavVue from '@/pages/test-evaluation/components/LeftNav.vue';
// import LeftNav from './LeftNav/LeftNav.vue';
// APP_NAME
export default {
  name: 'Home',
  // components: {LeftNavVue},
  data() {
    return {
      transitionName: '',
    };
  },

  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },
  },
};
</script>
<style lang="scss">
@import 'src/common/css/constant.scss';
.nav {
  display: space-around;
  background: #ccc;
  flex-direction: row;
}
// 处理弹窗出来的滚动条
.el-popup-parent--hidden {
  .h-header {
    padding-right: 19px;
  }
}
.home-page {
  height: 100%;
  width: 100%;
}
.h-header {
  background: url(/src/assets/imgs/top_bg@2x.png) no-repeat;
  background-color: #1f1f1f;
  background-position: 0 0;
  background-size: auto 100%;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  text-align: left;
  display: flex;
  align-items: center;
  .img-icon {
    padding: 20px;
  }
  .router-link-active {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    line-height: 22px;
    background: linear-gradient(179deg, #00b2ff 0%, #61d2f5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__group {
    display: flex;
    align-items: center;
    position: relative;
    .svg-icon {
      margin: 0 10px;
    }
    &:hover {
      .header__popup {
        display: block;
      }
    }
  }
  &__popup {
    position: absolute;
    display: none;
    width: 104px;
    right: 10px;
    top: 50px;

    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    &Item {
      width: 104px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-size: 14px;
      font-weight: 400;
      background-color: rgba(0, 123, 255, 0.6);

      cursor: pointer;

      color: #f0f1ff;
      &:hover {
        background: #00dbff;

        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
  &__right {
    display: flex;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    padding-right: 25px;
    color: #ffffff;
  }
  &__name {
    font-size: 28px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    margin-left: 8px;
    color: #f0f1ff;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%);
    // background: #f0f1ff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__nav {
    display: flex;
    flex: 1;
    margin-left: 110px;
    &Item {
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
      color: #f0f1ff;
      text-decoration: none;
      margin-right: 50px;
    }
  }
}
</style>
