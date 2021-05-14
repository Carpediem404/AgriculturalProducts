<template>
  <div :class="['svg-icon', className]">
    <svg class="icon" :style="{ fontSize: getSize, color: getColor }" aria-hidden="true">
      <use :xlink:href="`#icon${svgName}`"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    width: {
      type: Number,
      default: 30,
    },
    height: {
      type: Number,
      default: 30,
    },
    size: {
      type: Number,
      default: 0,
    },
    className: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    svgName: {
      type: String,
      default: '',
    },
  },
  computed: {
    getWidth() {
      return this.width + 'px';
    },
    getHeight() {
      return this.height + 'px';
    },
    getColor() {
      return this.color || 'inherit';
    },
    getSize() {
      if (this.size) {
        return this.size + 'px';
      }
      return Math.min(this.width, this.height) + 'px';
    },
    iconSrc() {
      return `/src/assets/icons/${this.svgName}.svg`;
    },
  },
};
</script>
<style>
.svg-icon {
  display: inline-block;
  fill: currentColor;
}
</style>
