<template>
  <div>hello_world</div>
</template>

<script lang="ts">
export default {
  name: 'ProgrammeItem',
  props: {
    msg: { type: String, default: '' },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style lang="scss">
@import 'src/common/css/constant.scss';
</style>
