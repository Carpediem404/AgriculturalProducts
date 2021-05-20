<template>
  <div class="insect-detection">
    <div  class="blog_link" @click="checkInsect(1)" >
      <img :src="imgs[0]" />
      <div  class="imgName">
        
        <p>柑橘</p>
        <!-- <p>{{item.name}}</p> -->
        <p>检测结果：{{ result[0] }}</p>
        <p>检测得分：{{ score[0] }}</p>
      </div>
    </div>
    <div class="blog_link" @click="checkInsect(2)" >
      <img :src="imgs[1]" />
      <div class="imgName">
        <p>杂草</p>
        <p>检测结果：{{ result[1] }}</p>
         <p>检测得分：{{ score[1] }}</p>
      </div>
    </div>
    <div class="blog_link">
      <img :src="imgs[2]" @click="checkInsect(123)" />
      <div class="imgName">
        <p>苹果</p>
        <p>检测结果：{{ result[2] }}</p>
         <p>检测得分：{{ score[2] }}</p>
      </div>
    </div>
    
     <div class="blog_link">
      <img :src="imgs[3]" @click="checkInsect(127)" />
      <div class="imgName">
        <p>葡萄</p>
        <p>检测结果：{{ result[3] }}</p>
         <p>检测得分：{{ score[3] }}</p>
      </div>
    </div>
     <div class="blog_link">
      <img :src="imgs[4]" @click="checkInsect(131)" />
      <div class="imgName">
        <p>小麦</p>
        <p>检测结果：{{ result[4] }}</p>
         <p>检测得分：{{ score[4] }}</p>
      </div>
    </div>
     <div class="blog_link">
      <img :src="imgs[5]" @click="checkInsect(132)" />
      <div class="imgName">
        <p>水稻</p>
        <p>检测结果：{{ result[5] }}</p>
         <p>检测得分：{{ score[5] }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

import detection1 from '@/common/img/ganju.jpg';
import detection2 from '@/common/img/insect_detection.jpg';
import detection3 from '@/common/img/apple.jpg';
import detection4 from '@/common/img/putao.jpg';
import detection5 from '@/common/img/xiaomai.jpg';
import detection6 from '@/common/img/rice.jpg';

export default {
  name: 'InsectDetection',
  data() {
    return {
      imgs: [detection1, detection2, detection3, detection4,detection5,detection6],
      result: [],
      score:[],
    };
  },
  // watch:{
  //   id(){
  //  this.checkInsect();
  //   },
  // },
  mounted() {
    // this.checkInsect();
  },
  methods: {
    checkInsect(id ) {
      axios.get(`webdapeng_war/rec/${id}`).then((res) => {
        console.log('insect-detection', res);
        // this.result = res.data.content.result
        // this.score= res.data.content.score
        //1:柑橘 2:杂草 123:苹果 127:葡萄 131:小麦 132:水稻
  if(id===1){
       this.result[0]=res.data.content.result
     this.score[0]=res.data.content.score
    
    // this.result=[ res.data.content.result,'','','','','']
    // this.score=[ res.data.content.score,'','','','','']
  }
   if(id===2){
     this.result[1]=res.data.content.result
     this.score[1]=res.data.content.score
    //  this.result.push(res.data.content.result)
    //  this.score.push(res.data.content.score)
    
    //   this.result=[ '',res.data.content.result,'','','','']
    // this.score=[ '',res.data.content.score,'','','','']
  }
   if(id===123){
        this.result[2]=res.data.content.result
     this.score[2]=res.data.content.score
    
    //  this.result.push(res.data.content.result)
    //  this.score.push(res.data.content.score)
    //   this.result=[ '','',res.data.content.result,'','','',]
    // this.score=[ '','',,res.data.content.score,'','','']
  }
   if(id===127){
        this.result[3]=res.data.content.result
     this.score[3]=res.data.content.score
    
    //    this.result=[ '','','',res.data.content.result,'','',]
    // this.score=[ '','','',res.data.content.score,'','']
  }
   if(id===131){
       this.result[4]=res.data.content.result
     this.score[4]=res.data.content.score
    //    this.result=[ '','','','',res.data.content.result,'',]
    // this.score=[ '','','','',res.data.content.score,'']
  }
   if(id===132){
        this.result[5]=res.data.content.result
     this.score[5]=res.data.content.score
    
    // this.result=[ '','','','','',res.data.content.result]
    // this.score=[ '','','','','',res.data.content.score]
  }
        

      });
    },
    dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
  },
  setup() {},
};
</script>

<style lang="scss">
@import 'src/common/css/constant.scss';
.insect-detection {
  padding-top: 80px;
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
