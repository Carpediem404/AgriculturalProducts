<template>
  <div class="empty flex-center" :style="{ height: height + 'px' }">
    <SvgIcon svg-name="nodata" :size="64"></SvgIcon>
    <p class="empty__tip">未搜索到相关内容</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProgrammeItem',
  props: {
    height: { type: Number, default: 480 },
  },
};
</script>
<style lang="scss">
@import 'src/common/css/constant.scss';
.empty {
  flex-direction: column;
  &__tip {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #90afcf;
    line-height: 22px;
  }
}
</style>
