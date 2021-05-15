<template>
  <div class="insect-detection">
    <div class="blog_link">
      <img :src="imgs[0]" @click="checkInsect()" />
      <div class="imgName">
        <p>莴苣</p>
        <p>检测结果：{{ result }}</p>
      </div>
    </div>
    <div class="blog_link">
      <img :src="imgs[1]" @click="checkInsect()" />
      <div class="imgName">
        <p>白菜</p>
        <p>检测结果：{{ result }}</p>
      </div>
    </div>
    <div class="blog_link">
      <img :src="imgs[2]" @click="checkInsect()" />
      <div class="imgName">
        <p>草莓</p>
        <p>检测结果：{{ result }}</p>
      </div>
    </div>
    <div class="blog_link">
      <img :src="imgs[3]" @click="checkInsect()" />
      <div class="imgName">
        <p>卷心菜</p>
        <p>检测结果：{{ result }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import detection1 from '@/common/img/insect_detection.jpg';
import detection2 from '@/common/img/insect_detection1.jpg';
import detection3 from '@/common/img/insect_detection2.jpg';
import detection4 from '@/common/img/insect_detection3.jpg';
export default {
  name: 'InsectDetection',
  data() {
    return {
      imgs: [detection1, detection2, detection3, detection4],
      result: '',
    };
  },
  methods: {
    checkInsect() {},
  },
  setup() {},
};
</script>

<style lang="scss">
@import 'src/common/css/constant.scss';
.insect-detection {
  margin-top: 20px;
  padding-left: 180px;
  padding-bottom: 20px;
  padding-right: 50px;
  min-height: 100vh;

  background-color: rgba(31, 31, 31, 0.9);
}
.blog_link {
  transition: transform 0.3s;
  width: 50%;
  margin-top: 20px;
  // padding-top: 20px;
  height: 30%;
  line-height: 20px;
  cursor: pointer;
  display: inline-block;
}
.blog_link:hover {
  transform: scale(1.05);
}
.imgPosition {
  margin-top: 20px;
  height: 30%;
}
img {
  width: 380px;
  height: 250px;
}
.imgName {
  display: block;
  color: white;
  margin-top: 10px;
  position: relative;
  text-decoration: none;
  font-size: 12px;
  transition: font-size 0.3s;
  text-align: center;
  width: 40%;
}

.imgName::after {
  content: '';
  width: 100%;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}
.imgName:hover {
  font-size: 16px;
}
.imgName::after {
  width: 0%;
}
</style>
