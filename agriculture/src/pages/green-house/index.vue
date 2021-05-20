<template>
  <div class="green-house">
    <div class="environment">
        <!-- <div class="charts-block"> -->
 <sinan></sinan>
      <pyramid class="pyramidWrap" />
        <!-- </div> -->
     
      <!-- <seamless></seamless> -->
      <!-- <szBar></szBar>
      <scrollArc></scrollArc> -->
    </div>
    <!-- <div class="pyramidTrendChart">
      <pyramidTrend></pyramidTrend>
    </div> -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
import sinan from '@/components/sinan.vue';
import pyramid from '@/components/pyramid.vue';
// import seamless from '@/components/seamless.vue';

// import szBar from '@/components/szBar.vue';
// import scrollArc from '@/components/scrollArc.vue';
// import pyramidTrend from '@/components/scrollArc.vue';
export default {
  name: 'GreenHouse',
  props: {
    msg: { type: String, default: '' },
  },
  components: { sinan,  pyramid, },
  data() {
    return {
      count: 0,
      current_time: new Date(),
      weatherList: [
        { name: 'sun', text: '晴天' },
        { name: 'cloudy', text: '阴天' },
        { name: 'snowy', text: '雪天' },
        { name: 'foggy', text: '雾天' },
        { name: 'rainy', text: '雨天' },
      ],
      lightingList: [{ name: 'light', text: '自然光' }],

      params: {
        rainnum: 0,
        snownum: 0,
        cloudnum: 0,
        fognum: 0,
      },
      activeIndex: 0,
      isClosed: true,
      isActive: 0,
      lightColor: '',
      tableData: [
        {
          id: '',
          username: '',
          area: '',
          status: '',
          startTime: '',
          air_temperature: '',
          air_humidity: '',
          soil_temperature: '',
          soil_humidity: '',
          co2: '',
          illuminance: '',
        },
      ],
    };
  },
  mounted() {
    // this.getFieldInfo();
    // this.drawTemperature();
  },
  methods: {
    handleMetricClicked(item) {
      this.activeIndex = item;
    },
    handleFoldWeather() {
      this.isActive = 1;
      this.isClosed = false;
    },
    handleFoldLighting() {
      this.isActive = 2;

      this.isClosed = false;
    },
    handleFoldTime() {
      this.isActive = 3;

      this.isClosed = false;
    },
    time(time = +new Date()) {
      var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
      return (date.toJSON() || '').slice(0, 19).replace('T', ' ');
    },
    handleClose() {
      this.isClosed = true;
      this.isActive = 0;
    },
    drawTemperature() {
      // this.isOpen = true;

      // var myChart = echarts.init(document.getElementsByClassName('weather'));
      var myChart = echarts.init(this.$refs['temperature']);
      let option = {
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
              color: 'rgba(64, 158, 255, 0.6)',
            },
            progress: {
              show: true,
              width: 30,
            },

            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 30,
              },
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: 'rgba(255, 255, 255, 0.95)',
              },
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: 'rgba(255, 255, 255, 0.95)',
              },
            },
            axisLabel: {
              distance: -20,
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: 20,
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: '60%',
              lineHeight: 40,
              height: '15%',
              borderRadius: 8,
              offsetCenter: [0, '-15%'],
              fontSize: 60,
              fontWeight: 'bolder',
              formatter: '{value} °C',
              color: 'auto',
            },
            data: [
              {
                value: 20,
              },
            ],
          },

          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
              color: 'rgba(64, 158, 255, 0.8)',
            },
            progress: {
              show: true,
              width: 8,
            },

            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 20,
              },
            ],
          },
        ],
      };

      setInterval(function () {
        let random = (Math.random() * 60).toFixed(2) - 0;
        option.series[0].data[0].value = random;
        option.series[1].data[0].value = random;
        myChart.setOption(option, true);
      }, 2000);
      option && myChart.setOption(option);
    },
    getFieldInfo() {
      axios.get('/webdapeng_war/field-list').then((res) => {
        console.log('field_list', res);
        this.tableData = res.data.extend.pageInfo.list;

        console.log('tableData', this.tableData);
      });
    },
    // drawDiagram() {
    //   var $ = go.GraphObject.make;
    //   var myDiagramDiv = $(go.Diagram, 'myDiagramDiv');
    // },
  },
};
</script>
<style lang="scss">
@import 'src/common/css/constant.scss';
.green-house {
//   display: flex;
//   justify-content: flex-end;
 padding: 70px 20px 0px 20px;
  min-height: 100vh;
  background-image: url(../../assets/img/bj.jpg);
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.pyramidTrendChart {
  // background-image: url(../../assets/img/bj.jpg);
  min-width: auto;
  width: 1920px;
  min-height: auto;
  height: 1080px;
  margin-top: 2180px;
  overflow: auto;
}
.environment {
  position: relative;
//   left: 0px;
//   top: 50px;

  background-color: rgba(0, 0, 0, 0.3);
  // height: 100%;
  // background-image: url(../../assets/img/bj.jpg);
  min-width: auto;
  width: 1920px;
  min-height: auto;
  height: 100%;
  overflow: auto;
  background-size: cover;
  .pyramidWrap {
    margin-left: 600px;
  }
  .bar {
    color: #fff;
    background: #1f1f1f;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.64), 0 3px 6px 0 rgba(0, 0, 0, 0.48), 0 5px 12px 4px rgba(0, 0, 0, 0.36);
    border-radius: 8px;
    width: 344px;
    height: 56px;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  .environment-setting {
    &__header {
      width: 552px;
      height: 36px;
      background: #1f1f1f;
      box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.12), 0px 9px 28px 0px rgba(0, 0, 0, 0.2), 0px 6px 16px -8px rgba(0, 0, 0, 0.32);
      border-radius: 2px;
      display: flex;
      padding: 0 16px;
    }
    &__content {
      margin-top: 4px;
      padding-bottom: 16px;
      width: 552px;
      // height: 288px;
      background: #1f1f1f;
      box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.12), 0px 9px 28px 0px rgba(0, 0, 0, 0.2), 0px 6px 16px -8px rgba(0, 0, 0, 0.32);
    }
  }
  .header-item {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    line-height: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    &.active {
      color: rgba(23, 125, 220, 1);
      .icon {
        color: rgba(23, 125, 220, 1) !important;
      }
    }
    &__key {
    }
    &__value {
      margin: 0 8px 0 3px;
    }
    .svg-icon {
    }
  }

  .vertical-line {
    margin: auto 16px;
    color: rgba(255, 255, 255, 0.15);
  }
  .content-item {
    height: 46px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    display: flex;
    justify-content: space-between;
    line-height: 22px;
    align-items: center;

    margin: 0 16px;
    .icon {
      cursor: pointer;
    }
    &__detail {
      display: flex;
      padding: 16px;
    }
    &__button {
      text-align: center;

      .el-button {
        // margin-left: 8px;
        // width: 65px;
        height: 32px;
        min-width: 60px !important;
        font-size: 14px;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .detail-left {
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    // height: 190px;

    &__item {
      width: 122px;
      height: 40px;
      display: flex;

      font-weight: 400;
      // justify-content: center;
      padding-left: 16px;
      align-items: center;
      color: rgba(255, 255, 255, 0.85);
      // &:hover {
      //   background: rgba(17, 29, 44, 1);

      //   border-right: 2px solid rgba(23, 125, 220, 1);

      // }
      &.active {
        background: #111d2c;
        border-right: 1px solid rgba(23, 125, 220, 1);
        color: rgba(23, 125, 220, 1);
      }
    }
    &__value {
      font-size: 14px;
      font-weight: 400;
      margin-left: 8px;
    }
  }
  .detail-right {
    padding-left: 24px;
    .params {
      display: flex;

      &__form {
        display: flex;
        margin-bottom: 24px;
        padding: 0 20px;

        &Item {
          display: flex;
          align-items: center;
          margin-right: 10px;
          padding-bottom: 8px;
          position: relative;
        }
        &Label {
          display: inline;
          // padding-left: 8px;
          width: 72px;
          font-size: 14px;
          white-space: nowrap;
          text-align: right;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
        }
        &Input {
          .el-select {
            width: 190px;
          }
        }
        &Unit {
          margin-left: 8px;
          color: rgba(255, 255, 255, 0.65);
          font-size: 14px;
        }
        &Du {
          color: rgba(255, 255, 255, 0.65);
          font-size: 14px;
          position: absolute;
          top: -1px;
          left: 258px;
        }
      }
    }
  }
  .params-time {
    &__item {
      display: flex;
      align-items: center;
    }
    &__input {
      .el-input-number {
        width: 118px !important;
      }
    }
    &__unit {
      padding: 0 8px;

      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.65);
    }
  }
}

.myDiagramDiv {
  width: 400px;
  height: 150px;
  background-color: #ffff;
}
.agriculture-table {
  width: 1000px;
  margin: 0 auto;
  height: 100%;
}
</style>
