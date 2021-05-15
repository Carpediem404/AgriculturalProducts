<template>
  <div class="agriculture">
   
    <div class="agriculture-table">
      <el-table :data="plantList" style="width: 1000px">
        <!-- <el-table-column type="expand">
          <template #default="scope">
            <div class="expand-block__title">温度仪表盘</div>
           
          </template>
        </el-table-column> -->
        <el-table-column label="农产品 ID" prop="id"  align="center">
          <template #default="scope">
            {{scope.row.id}}
          </template>
           </el-table-column>
        <el-table-column label="大棚ID" prop="fid"  align="center"> </el-table-column>
        <el-table-column label="农作物名称" prop="cname" width="180"  align="center"> 
           <template #default="scope">
            {{scope.row.fid}}
          </template>
        </el-table-column>
        <!-- <el-table-column label="状态" prop="status"> </el-table-column> -->
        <el-table-column label="种植数量" prop="quantity"  align="center"> </el-table-column>
        <el-table-column label="种植时长" prop="time"  align="center"> </el-table-column> 
        <el-table-column label="总利润" prop="total"  align="center"> </el-table-column>
        <el-table-column label="农作物单株利润" prop="cprofit"  align="center"> </el-table-column>
        
      </el-table>
    </div>
    <div class="divide-line"></div>
    <div class="charts-block__name">指标数据</div>
    <div class="agriculture__charts">
      <div class="chart-block">
        <div class="charts-name">空气/光照仪表盘</div>
        <div ref="weather" style="width: 500px; height: 500px"></div>
      </div>
      <div class="chart-block">
        <div class="charts-name">土壤/CO2仪表盘</div>
        <div ref="CO2" style="width: 500px; height: 500px"></div>
      </div>
      <div class="chart-block">
        <div class="charts-name">仪表盘</div>

        <div ref="temperature" style="width: 500px; height: 500px"></div>
      </div>
    </div>
    <!-- <div ref="weather" style="width: 500px; height: 500px"></div>
    <div ref="CO2" style="width: 500px; height: 500px"></div> -->
  </div>
</template>

<script>
// import LineChart from "@/components/LineChart.vue";
import * as echarts from 'echarts';
import axios from 'axios';
// import WeatherPanel from '@/components/WeatherPanel.vue';
// import { getPlantList,getFieldList } from '@/services/task';
export default {
  name: 'Agriculture',
  // components: { WeatherPanel },
  data() {
    return {
      isOpen: false,
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
         illuminance: ""
        },
       
      ],
      plantList:[{
        id:0,
        fid:0,
        cname:'',
        cprofit:'',
        quantity: 30,
status: true,
time: 3,
total: 0.108,
        
      }],
    };
  },
  mounted() {
    
    this.getPlantInfo();
    this.drawWeather();
  
    this.drawCO2();
    this.drawTemperature();
  },
  methods: {
    getPlantInfo() {
      axios.get('/webdapeng_war/plant-list').then((res) => {
        console.log('plantListres',res);
        this.plantList = res.data.extend.pageInfo.list;
        console.log('plantList',this.plantList)
      
      });
    },
  
      time(time = +new Date()) {
      var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
      return (date.toJSON() || "").slice(0, 19).replace("T", " ");
    },
    drawWeather() {
      this.isOpen = true;

      // var myChart = echarts.init(document.getElementsByClassName('weather'));
      var myChart = echarts.init(this.$refs['weather']);
      let option = {
        series: [
          {
            type: 'gauge',
            anchor: {
              show: true,
              showAbove: true,
              size: 18,
              itemStyle: {
                color: '#FAC858',
              },
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 8,
              length: '80%',
              offsetCenter: [0, '8%'],
            },

            progress: {
              show: true,
              overlap: true,
              roundCap: true,
            },
            axisLine: {
              roundCap: true,
            },
            data: [
              {
                value: 20,
                name: '空气温度',
                title: {
                  offsetCenter: ['-40%', '80%'],
                },
                detail: {
                  offsetCenter: ['-40%', '95%'],
                },
              },
              {
                value: 40,
                name: '空气湿度',
                title: {
                  offsetCenter: ['0%', '80%'],
                },
                detail: {
                  offsetCenter: ['0%', '95%'],
                },
              },
              {
                value: 60,
                name: '光照度',
                title: {
                  offsetCenter: ['40%', '80%'],
                },
                detail: {
                  offsetCenter: ['40%', '95%'],
                },
              },
            ],
            title: {
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.65)',
            },
            detail: {
              width: 40,
              height: 14,
              fontSize: 14,
              color: '#fff',
              backgroundColor: 'auto',
              borderRadius: 3,
              formatter: '{value}%',
            },
          },
        ],
      };

      setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
      }, 2000);
      option && myChart.setOption(option);
    },
    drawCO2() {
      // this.isOpen = true;

      // var myChart = echarts.init(document.getElementsByClassName('weather'));
      var myChart = echarts.init(this.$refs['CO2']);
      let option = {
        series: [
          {
            type: 'gauge',
            anchor: {
              show: true,
              showAbove: true,
              size: 18,
              itemStyle: {
                color: '#FAC858',
              },
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 8,
              length: '80%',
              offsetCenter: [0, '8%'],
            },

            progress: {
              show: true,
              overlap: true,
              roundCap: true,
            },
            axisLine: {
              roundCap: true,
            },
            data: [
              {
                value: 20,
                name: '土壤温度',
                title: {
                  offsetCenter: ['-40%', '80%'],
                },
                detail: {
                  offsetCenter: ['-40%', '95%'],
                },
              },
              {
                value: 40,
                name: '土壤湿度',
                title: {
                  offsetCenter: ['0%', '80%'],
                },
                detail: {
                  offsetCenter: ['0%', '95%'],
                },
              },
              {
                value: 60,
                name: '二氧化碳浓度',
                title: {
                  offsetCenter: ['40%', '80%'],
                },
                detail: {
                  offsetCenter: ['40%', '95%'],
                },
              },
            ],
            title: {
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.65)',
            },
            detail: {
              width: 40,
              height: 14,
              fontSize: 14,
              color: '#fff',
              backgroundColor: 'auto',
              borderRadius: 3,
              formatter: '{value}%',
            },
          },
        ],
      };

      setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
        option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
      }, 2000);
      option && myChart.setOption(option);
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
              color: '#FFAB91',
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
                color: '#999',
              },
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: '#999',
              },
            },
            axisLabel: {
              distance: -20,
              color: '#999',
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
              color: '#FD7347',
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
  },
};
</script>
<style lang="scss">
.agriculture {
  padding: 70px 20px;
  min-height: 100vh;
  background-color: rgba(31, 31, 31, 0.9);
  &__charts {
    display: flex;
    justify-content: space-around;
  }
  .el-table tr {
    background-color: rgba(255, 255, 255, 0);
  }
  .agriculture-table {
    width: 1000px;
    margin: 0 auto;
    height: 100%;
  }
  .expand-block {
    &__title {
      color: rgba(255, 255, 255, 0.25);
    }
  }
  .divide-line {
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 20px 0;
  }
  .charts-name {
    color: rgba(255, 255, 255, 0.65);
    text-align: center;
  }
  .charts-block {
    &__name {
      color: rgba(255, 255, 255, 0.65);
      font-size: 18px;
      padding-bottom: 20px;
    }
  }
}
</style>
