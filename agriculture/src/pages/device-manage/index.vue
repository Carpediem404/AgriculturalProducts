<template>
  <div class="device-manage">
    <!-- <div class="data-statistics__name">设备信息</div> -->

    <div class="divide-line"></div>
    <div class="search-block">
      <el-form :inline="true" :model="formInline" class="taskForm">
        <el-form-item label="设备状态" style="">
          <el-select v-model="formInline.status" placeholder="请选择设备状态" @change="getDeviceStatus(formInline.status)">
            <el-option label="全部" value="ALL"></el-option>
            <el-option label="运行中" value="使用中"></el-option>
            <el-option label="未使用" value="未启用"></el-option>
            <el-option label="维修中" value="FIXING"></el-option>
            <el-option label="已磨损" value="BROKEN"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="">
          <el-input class="search-input" width="250" v-model="formInline.keyword" placeholder="请输入关键字" clearable></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleFormChange">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="device-manage__table">
      <el-table :data="deviceList" border style="width: 100%">
        <el-table-column prop="name" label="设备名称" width="180" align="center"> </el-table-column>
        <el-table-column prop="device_model" label="设备型号" width="180" align="center"> </el-table-column>
        <el-table-column prop="status" label="使用状态" align="center"> 
          <template #default="scope">
            <div :class="{light_height:scope.row.status==='使用中'}">
            {{scope.row.status}}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="stock" label="设备库存" align="center"> </el-table-column>
        <el-table-column prop="admin" label="设备管理员" align="center"> </el-table-column>
      </el-table>
    </div>
    <div class="device-detail">
      <div class="data-statistics">
        <div class="data-statistics__name">数据统计</div>
        <div class="divide-line"></div>
        <div style="height:1500px;">
   <div class="device-chart">
   <sinan ></sinan>
      <pyramid class="pyramidWrap" />
      </div>
        </div>
     
   
      </div>
        
  
    
    
    </div>
  </div>
</template>
<script>
// import ColumnChart from '@/components/ColumnChart.vue';
// import CalendarPie from '@/components/CalendarPie.vue';
// import DeviceChart from '../green-house/index.vue';
import sinan from '@/components/sinan.vue';
import pyramid from '@/components/pyramid.vue';
import * as echarts from 'echarts';
import axios from 'axios';
export default {
  name: 'Decive',
   props: {
    msg: { type: String, default: '' },
  },
  components: { sinan,  pyramid, },
  // component: {DeviceChart},
  data() {
    return {
      isReceive: true,
      formInline: {
        status: '使用中',

        keyword: '',
      },
      deviceList: [
        { name: '保温被', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '机械卷帘', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '滴管', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '湿帘风机', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '喷淋滴灌', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '加温补光传感器', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '降温器', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '自动遮阳传感器', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '施肥机', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '过滤器', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '阀门控制器', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '电磁阀', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
        { name: '灌溉机', device_model: '设备型号', status: '使用状态', stock: '设备库存', admin: '管理员' },
      ],
      taskInfo: {
        vanilla_acc: 0.9944,
        adv_datas: ['Carlini L2 10.0', 'Carlini L2 20.0', 'Carlini L2 30.0', 'Carlini L2 40.0'],
        defense_acc: {
          without_defense: [0.0, 0.0, 0.0, 0.0],
          with_det: [0.9701010101010101, 0.9959595959595959, 0.9996969696969698, 0.99989898989899],
          with_ref: [0.9111111111111111, 0.43313131313131314, 0.07535353535353535, 0.0048484848484848485],
          with_both: [0.99, 0.9971717171717172, 0.9996969696969698, 0.99989898989899],
        },
        max_gap: 0.99989898989899,
        ori: { original: ['7'], det_only: ['7'], reform_only: ['7'], both: ['7'], label: ['7'] },
        adv: {
          original: ['3', '2', '5', '5'],
          det_only: ['Refuse', 'Refuse', 'Refuse', 'Refuse'],
          reform_only: ['2', '8', '6', '5'],
          both: ['Refuse', 'Refuse', 'Refuse', 'Refuse'],
          label: ['2', '8', '6', '1'],
        },
      },
    };
  },
  mounted() {
    this.getDeviceList();
    // this.drawCalendar();
    // this.drawColumn();
  },
  methods: {
    getDeviceList(){
      axios.get('webdapeng_war/devices').then((res)=>{

        console.log('device_res',res)
        this.deviceList=res?.data?.extend?.devices||{};
        console.log('deviceList',this.deviceList)

      })
    },
    getDeviceStatus(status){
      axios.get(`webdapeng_war/device?status=${status}`).then((res) => {
        console.log('deviceStatus',res)
        //  this.deviceList=res?.data?.extend?.devices||{};
        this.getDeviceList();
      })
    },
    getVirtulData() {
      var date = +echarts.number.parseDate('2017-02-01');
      var end = +echarts.number.parseDate('2017-03-01');
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time < end; time += dayTime) {
        data.push([echarts.format.formatTime('yyyy-MM-dd', time), Math.floor(Math.random() * 10000)]);
      }
      return data;
    },

    getPieSeries(scatterData, chart) {
      return scatterData.map((item, index) => {
        var center = chart.convertToPixel('calendar', item);
        return {
          id: index + 'pie',
          type: 'pie',
          center: center,
          label: {
            normal: {
              formatter: '{c}',
              position: 'inside',
            },
          },
          radius: pieRadius,
          data: [
            { name: '工作', value: Math.round(Math.random() * 24) },
            { name: '娱乐', value: Math.round(Math.random() * 24) },
            { name: '睡觉', value: Math.round(Math.random() * 24) },
          ],
        };
      });
    },

    getPieSeriesUpdate(scatterData, chart) {
      return scatterData.map((item, index) => {
        var center = chart.convertToPixel('calendar', item);
        return {
          id: index + 'pie',
          center: center,
        };
      });
    },
    drawCalendar() {
      var cellSize = [80, 80];
      var pieRadius = 30;
      //   var chart = echarts.init(this.$refs['calendarPie']);
      var myChart = echarts.init(document.getElementById('calendar-pie'));
      var scatterData = this.getVirtulData();

      let option = {
        tooltip: {},
        legend: {
          data: ['工作', '娱乐', '睡觉'],
          bottom: 20,
        },
        calendar: {
          top: 'middle',
          left: 'center',
          orient: 'vertical',
          cellSize: cellSize,
          yearLabel: {
            show: false,
            fontSize: 30,
          },
          dayLabel: {
            margin: 20,
            firstDay: 1,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
          },
          monthLabel: {
            show: false,
          },
          range: ['2017-02'],
        },
        series: [
          {
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              show: true,
              formatter: function (params) {
                return echarts.format.formatTime('dd', params.value[0]);
              },
              offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
              fontSize: 14,
            },
            data: scatterData,
          },
        ],
      };

      var pieInitialized;
      setTimeout(function () {
        pieInitialized = true;
        myChart.setOption({
          series: this.getPieSeries(scatterData, myChart),
        });
      }, 10);
      var app = {};
      app.onresize = function () {
        if (pieInitialized) {
          myChart.setOption({
            series: this.getPieSeriesUpdate(scatterData, myChart),
          });
        }
      };
      option && myChart.setOption(option);
    },
    drawColumn() {
      //   var chart = echarts.init(this.$refs['columnChart']);
      var chart = echarts.init(document.getElementById('column-chart'));
      let option = {
        legend: { textStyle: { color: 'rgba(255, 255, 255, 0.65)' } },
        tooltip: {},
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1],
          ],
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.65)',
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.65)',
            },
          },
        },

        series: [
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',

                textStyle: {
                  fontSize: 16,
                  color: '#B0CEFC',
                },
              },
            },
          },
          { type: 'bar' },
          { type: 'bar' },
        ],
      };

      option && chart.setOption(option);
    },
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
  
    handleClose() {
      this.isClosed = true;
      this.isActive = 0;
    },
   
   
  },
};
</script>
<style  lang="scss">
.device-manage {
  padding: 70px 20px;
  height: 1400px;
  overflow: hidden !important;
    // min-height: 100vh;
  background-color: rgba(31, 31, 31, 0.9);
  //   background-image: url('./assets/imgs/bg.jpg');
  //   background-size: cover;

  //   background: #ffffff;
  .search-block {
    margin: 20px auto;
  }

  &__table {
    width: 100%;
    margin: 0 auto;
    .el-table tr {
      background-color: rgba(255, 255, 255, 0);
    }
  }
  .data-statistics {
    margin: 40px 0;
    &__name {
      color: rgba(255, 255, 255, 0.65);
      font-size: 16px;
      font-weight: 500;
    }
    &__charts {
      margin-top: 20px;
    }
  }
  .divide-line {
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 20px 0;
  }
  .light_height {
  // background-color: inherit;
  background-color: rgba(224, 32, 32, 0.1);

  color: #e02020;
}
.el-table .cell {
    line-height: 48px;
    height: 48px;
    padding: 0;
  }
  .el-table td,
  .el-table th {
    padding: 0;
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
    margin-left: 700px;
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
.device-chart{
  position: absolute;
  top:450px;
  left:200px;
}
}

</style>