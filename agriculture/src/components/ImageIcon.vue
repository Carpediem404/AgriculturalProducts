<template>
  <div :class="['img-icon', className]">
    <img :src="iconSrc" :style="{ width: getWidth, height: getHeight }" alt="" />
  </div>
</template>
<script>
const modules = import.meta.globEager('../assets/icons/*.png');
export default {
  name: 'ImageIcon',
  props: {
    width: {
      type: Number,
      default: 30,
    },
    height: {
      type: Number,
      default: 30,
    },
    className: {
      type: String,
      default: '',
    },
    imageName: {
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
      // if (this.size) {
      //   return this.size + 'px';
      // }
      // console.log(this.width)
      return Math.min(this.width, this.height, this.size) + 'px';
    },
    iconSrc() {
      // return `/src/assets/icons/${this.imgName}.svg`;
      return (modules[`../assets/icons/${this.imageName}.png`] || {}).default;
    },
  },
};
</script>
<style>
.img-icon {
  display: inline-block;
}
</style>
