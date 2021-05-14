<template>
  <div class="pieTip" :style="{color}">
    <div class="leftTip" :style="{background:color}"></div>
    <div class="centerTip">{{text}}</div>
    <div class="rightTip">{{number}}</div>
  </div>
</template>

<script>
export default {
  name: "pieTip",
  props: ["text", "number", "color"]
};
</script>

<style lang="scss" scoped>
$size: 8px;
.pieTip {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  .leftTip {
    width: $size;
    height: $size;
  }
  .centerTip {
    margin: 0 0 0 8px;
    width: 86px;
  }
}
.pieTip + .pieTip {
  margin-top: 8px;
}
</style>
