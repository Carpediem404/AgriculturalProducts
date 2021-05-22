<template>
  <div class="green-house">
    <div class="DataDetail">
      <div class="pyramidTrendChart">
        <!-- <div class="sn-title" style="color: white">双轴柱状图</div> -->
        <div class="chartsdom">
          <div id="chart_bar" style="width: 30%; height: 400px; position: absolute; margin-top: 800px"></div>
        </div>
      </div>
    </div>

    <div class="sn-content">
      <div class="wrap-container">
        <div class="chartsdom" id="chart_arc" style="margin-left: 980px; margin-top: 60px; position: absolute"></div>
      </div>
    </div>
    <div class="sn-content">
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_pin" style="margin-top: 90px"></div>
          <!-- <div class="updef"></div>
          <div class="definfo definfo0"><span>8个</span><span></span></div>
          <div class="definfo definfo1"><span>10个</span><span></span></div>
          <div class="definfo definfo2"><span>35个</span><span></span></div>
          <div class="definfo definfo3"><span>38个</span><span></span></div>
          <div class="definfo definfo4"><span>48个</span><span></span></div>
          <div class="definfo definfo5"><span>55个</span><span></span></div>
          <div class="definfo definfo6"><span>42个</span><span></span></div>
          <div class="definfo definfo7"><span>95个</span><span></span></div> -->
        </div>
      </div>
    </div>
    <div class="sn-content">
      <!-- <div class="sn-title">动态折线图</div> -->
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_dt" style="margin-top: -700px; margin-left: 910px"></div>
        </div>
      </div>
    </div>
    <div class="sn-content">
      <!-- <div class="sn-title">柱饼组合联动</div> -->
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_bp" style="margin-top: -280px; position: absolute"></div>
        </div>
      </div>
    </div>
    <div class="sn-content">
      <!-- <div class="sn-title">金字塔趋势</div> -->
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_ptrend" style="margin-top: -280px; margin-left: 500px; position: absolute"></div>
        </div>
      </div>
    </div>
    <div class="sn-content">
      <!-- <div class="sn-title">多彩轮播面积</div> -->
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_cra" style="margin-left: 550px; margin-top: 100px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import axios from 'axios';
export default {
  name: 'GreenHouse',
  props: {
    msg: { type: String, default: '' },
  },
  components: {},
  data() {
    return {
      xAxisData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yData1: [9, 12, 15, 18, 15, 12, 9, 12, 15, 18, 15, 12],
      yData2: [-9, -12, -15, -18, -15, -12, -9, -12, -15, -18, -15, -12],

      number: 0, // 播放所在下标
      timer: null,
      xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98],
      dynamicLineXData: [],
      dynamicLineTimer: null,
      now: +new Date(2019, 1, 1),
      value: Math.random() * 1000,
      oneDay: 24 * 3600 * 1000,
      dataMap: {},
      pTrendDataMap: {},
      colorfulAreaDataMap: {},
    };
  },
  mounted() {
    // this.getEchart();
    this.getEchartScrollArc();
    this.getEchartRingPin();
    this.getEchartDynamicLine();
    this.getEchartCakeLinkage();
    this.getEchartPyramidTrend();
    this.getEchartColorfulArea();
  },
  computed: {
    optionSetting() {
      return {
        step: 1.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
    colorfulAreaDataFormatter(obj) {
      let pList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
      let temp;
      for (let x = 1; x <= 5; x++) {
        let max = 0;
        let sum = 0;
        temp = obj[x];
        for (let i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[x][i] = {
            name: pList[i],
            value: temp[i],
          };
        }
        obj[x + 'max'] = Math.floor(max / 100) * 100;
        obj[x + 'sum'] = sum;
      }
      return obj;
    },
    getEchartColorfulArea() {
      let myChart = echarts.init(document.getElementById('chart_cra'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff',
      };

      this.colorfulAreaDataMap.dataType = this.colorfulAreaDataFormatter({
        5: [96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 85, 85, 85, 85, 85, 85, 98, 54, 50, 54, 54, 54, 54],
        4: [86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 85, 95, 85, 85, 85, 85, 64, 64, 60, 64, 64, 64, 64],
        3: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 95, 90, 91, 91, 91, 91, 91, 91, 54, 54, 50, 54, 54, 54, 54],
        2: [76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 95, 95, 95, 95, 95, 95, 54, 54, 50, 54, 54, 54, 54],
        1: [66, 66, 66, 66, 66, 66, 66, 66, 66, 96, 66, 66, 85, 85, 85, 85, 85, 85, 55, 55, 50, 55, 55, 55, 55],
      });

      let option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: ['5.1', '5.2', '5.3', '5.4', '5.5'],
            left: 50,
            right: 50,
            top: 5,
            lineStyle: {
              color: '#122e96',
            },
            label: {
              color: '#fff',
            },
            checkpointStyle: {
              color: '#ef8c2f',
              symbolSize: 10,
              borderColor: 'rgba(239, 140, 47, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              showPlayBtn: false,
              borderColor: '#122e96',
              itemGap: 20,
            },
            itemStyle: {
              borderColor: '#122e96',
              borderWidth: 5,
              // shadowColor: 'rgba(239, 140, 47, 0.5)',
              // shadowBlur: 5
            },
            emphasis: {
              label: {
                color: '#ef8c2f',
                show: false,
              },
              checkpointStyle: {
                color: '#ef8c2f',
                borderColor: 'rgba(239, 140, 47, 0.5)',
                borderWidth: 5,
              },
              controlStyle: {
                borderColor: '#122e96',
              },
              itemStyle: {
                color: '#ef8c2f',
                borderColor: 'rgba(239, 140, 47, 0.5)',
                borderWidth: 5,
              },
            },
          },
          calculable: true,
          grid: {
            top: '25%',
            bottom: '12%',
          },
          xAxis: [
            {
              type: 'category',
              axisLabel: {
                interval: 5,
              },
              data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
              splitLine: {
                show: false,
              },
              offset: 10,
              axisTick: {
                show: true,
                alignWithLabel: true,
                interval: 5,
                length: 10,
                lineStyle: {
                  color: '#59aec8',
                  width: 3,
                },
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#2867a8',
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#2867a8',
                },
              },
            },
          ],
          series: [
            {
              name: '多彩轮播面积',
              type: 'line',
              markPoint: {
                symbol: 'pin',
                symbolSize: 40,
                itemStyle: {
                  normal: {
                    color: '#ef8c2f',
                    shadowColor: '#ef8c2f',
                    shadowBlur: 15,
                  },
                },
                data: [{ type: 'max', name: '最大值' }],
              },
              itemStyle: {
                borderColor: '#1374e7',
                borderWidth: 10,
                shadowBlur: 10,
                shadowColor: '#1374e7',
                opacity: 0,
              },
              label: {
                show: false,
                // position: 'top',
                // color: '#fff'
              },
              lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#17418d',
                  },
                  {
                    offset: 1,
                    color: '#a56d42',
                  },
                ]),
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#1e4b4b',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 0, 0, 0)',
                    },
                  ]),
                },
              },
              smooth: true,
            },
          ],
        },
        options: [
          {
            series: [
              {
                data: this.colorfulAreaDataMap.dataType['1'],
                itemStyle: itemStyle,
              },
            ],
          },
          {
            series: [
              {
                data: this.colorfulAreaDataMap.dataType['2'],
                itemStyle: itemStyle,
              },
            ],
          },
          {
            series: [
              {
                data: this.colorfulAreaDataMap.dataType['3'],
                itemStyle: itemStyle,
              },
            ],
          },
          {
            series: [
              {
                data: this.colorfulAreaDataMap.dataType['4'],
                itemStyle: itemStyle,
              },
            ],
          },
          {
            series: [
              {
                data: this.colorfulAreaDataMap.dataType['5'],
                itemStyle: itemStyle,
              },
            ],
          },
        ],
      };

      myChart.setOption(option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
    TrendDataFormatter(obj) {
      let pList = ['白菜', '草莓', '青菜', '莴苣', '荔枝', '葡萄', '杨梅', '枇杷', '火龙果', '龙眼', '樱桃', '提子', '香蕉', '西瓜'];
      let temp;
      for (let x = 0; x < 3; x++) {
        let max = 0;
        let sum = 0;
        temp = obj[x];
        for (let i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[x][i] = {
            name: pList[i],
            value: temp[i],
          };
        }
        obj[x + 'max'] = Math.floor(max / 100) * 100;
        obj[x + 'sum'] = sum;
      }
      return obj;
    },
    getEchartPyramidTrend() {
      let myChart = echarts.init(document.getElementById('chart_ptrend'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff',
      };

      this.pTrendDataMap.dataType = this.TrendDataFormatter({
        2: [124, 145, 261, 54, 195, 131, 150, 39, 11, 40, 23, 51, 45, 88],
        1: [136, 159, 205, 41, 306, 7, 77, 101, 24, 34, 8, 15, 14, 9],
        0: [118, 128, 220, 47, 92, 14, 9, 11, 113, 61, 11, 22, 33, 5],
      });

      let option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: ['一类', '二类', '三类'],
            left: 80,
            right: 80,
            bottom: 10,
            lineStyle: {
              color: '#179bf1',
            },
            label: {
              color: '#fff',
            },
            checkpointStyle: {
              color: '#01d8ff',
              symbolSize: 10,
              borderColor: 'rgba(1, 216, 255, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              show: false,
            },
            itemStyle: {
              borderColor: '#004b85',
              borderWidth: 1,
              shadowColor: 'rgba(1, 216, 225, 0.5)',
              shadowBlur: 5,
            },
            emphasis: {
              label: {
                color: '#01d8ff',
                show: false,
              },
              checkpointStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 255, 0.5)',
                borderWidth: 5,
              },
              itemStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 225, 0.5)',
                borderWidth: 5,
              },
            },
          },
          calculable: true,
          grid: {
            top: '10%',
            bottom: '25%',
          },
          xAxis: [
            {
              type: 'category',
              axisLabel: {
                interval: 0,
              },
              data: ['白菜', '草莓', '青菜', '莴苣', '荔枝', '葡萄', '杨梅', '枇杷', '火龙果', '龙眼', '樱桃', '提子', '香蕉', '西瓜'],
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '植物',
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                },
              },
            },
          ],
          series: [
            {
              name: '一类',
              type: 'bar',
              barWidth: 15,
              legendHoverLink: true,
              label: {
                show: true,
                position: 'top',
                color: '#fff',
              },
            },
          ],
        },
        options: [
          {
            series: [
              {
                data: this.pTrendDataMap.dataType['0'],
                itemStyle: itemStyle,
              },
            ],
          },
          {
            series: [
              {
                data: this.pTrendDataMap.dataType['1'],
                itemStyle: itemStyle,
              },
            ],
          },
          {
            series: [
              {
                data: this.pTrendDataMap.dataType['2'],
                itemStyle: itemStyle,
              },
            ],
          },
        ],
      };

      myChart.setOption(option, true);

      // window.addEventListener('resize', () => {
      //   myChart.resize()
      // })
    },
    dataFormatter(obj) {
      let pList = ['水果', '蔬菜', '花卉', '绿植'];
      let temp;
      for (let y = 2016; y <= 2020; y++) {
        let max = 0;
        let sum = 0;
        temp = obj[y];
        for (let i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[y][i] = {
            name: pList[i],
            value: temp[i],
          };
        }
        obj[y + 'max'] = Math.floor(max / 100) * 100;
        obj[y + 'sum'] = sum;
      }
      return obj;
    },
    getEchartCakeLinkage() {
      let myChart = echarts.init(document.getElementById('chart_bp'));
      let itemStyleJR = {
        color: '#d6d638',
      };
      let itemStyleZW = {
        color: '#00c86c',
      };
      let itemStyleYL = {
        color: '#07d8ff',
      };
      let itemStyleIT = {
        color: '#0c71cf',
      };

      this.dataMap.dataJR = this.dataFormatter({
        //max : 4000,
        2020: [136, 159, 905, 305],
        2019: [124, 145, 562, 285],
        2018: [118, 128, 207, 265],
        2017: [112, 122, 234, 245],
        2016: [101, 110, 804, 225],
      });

      this.dataMap.dataZW = this.dataFormatter({
        //max : 26600,
        2020: [752, 928, 126, 210],
        2019: [388, 840, 707, 208],
        2018: [855, 987, 959, 207],
        2017: [626, 709, 701, 206],
        2016: [509, 892, 201, 205],
      });

      this.dataMap.dataYL = this.dataFormatter({
        //max : 25000,
        2020: [363, 219, 483, 505],
        2019: [600, 438, 123, 405],
        2018: [179, 405, 668, 305],
        2017: [375, 2886, 276, 205],
        2016: [236, 250, 408, 105],
      });

      this.dataMap.dataIT = this.dataFormatter({
        //max : 26600,
        2020: [752, 928, 126, 255],
        2019: [388, 840, 707, 245],
        2018: [855, 987, 959, 235],
        2017: [626, 709, 701, 225],
        2016: [509, 892, 201, 215],
      });

      let option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            data: ['2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01'],
            lineStyle: {
              color: '#179bf1',
            },
            left: 30,
            right: 30,
            label: {
              color: '#2867a8',
              formatter(s) {
                return new Date(s).getFullYear();
              },
            },
            checkpointStyle: {
              color: '#01d8ff',
              symbolSize: 10,
              borderColor: 'rgba(1, 216, 255, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              showPlayBtn: false,
              borderColor: '#01bde6',
              itemGap: 20,
            },
            itemStyle: {
              // color: '#004b85',
              borderColor: '#004b85',
              borderWidth: 1,
              shadowColor: 'rgba(1, 216, 225, 0.5)',
              shadowBlur: 5,
            },
            emphasis: {
              label: {
                color: '#01d8ff',
                show: false,
              },
              checkpointStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 255, 0.5)',
                borderWidth: 5,
              },
              controlStyle: {
                borderColor: 'rgba(1, 216, 255, 0.5)',
              },
              itemStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 225, 0.5)',
                borderWidth: 5,
              },
            },
          },
          // tooltip: {
          //   trigger: 'item'
          // },
          grid: {
            bottom: '20%',
            right: '42%',
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['水果', '蔬菜', '花卉', '绿植'],
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '种植面积（亩）',
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#2867a8',
                },
              },
            },
          ],
          series: [
            {
              name: '联盟链',
              type: 'bar',
              barMaxWidth: 15,
              center: ['20%', '65%'],
              seriesLayoutBy: 'row',
              markPoint: {
                symbol: 'pin',
                itemStyle: {
                  normal: {
                    color: '#eb9b44',
                    shadowColor: '#eb9b44',
                    shadowBlur: 15,
                  },
                },
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' },
                ],
              },
              // label: {
              //   show: true,
              //   position: 'top'
              // },
            },
            {
              name: '应用占比',
              type: 'pie',
              center: ['76%', '20%'],
              radius: '28%',
              z: 100,
            },
          ],
        },
        options: [
          {
            series: [
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2016sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2016sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2016sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2016sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2016sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2016sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2016sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2016sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
            ],
          },
          {
            series: [
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2017sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2017sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2017sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2017sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2017sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2017sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2017sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2017sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
            ],
          },
          {
            series: [
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2018sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2018sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2018sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2018sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2018sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2018sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2018sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2018sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
            ],
          },
          {
            series: [
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2019sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2019sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2019sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2019sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2019sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2019sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2019sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2019sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
            ],
          },
          {
            series: [
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2020sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2020sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2020sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2020sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
              {
                data: [
                  {
                    name: '水果',
                    value: this.dataMap.dataJR['2020sum'],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: '蔬菜',
                    value: this.dataMap.dataZW['2020sum'],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: '花卉',
                    value: this.dataMap.dataYL['2020sum'],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: '绿植',
                    value: this.dataMap.dataIT['2020sum'],
                    itemStyle: itemStyleIT,
                  },
                ],
              },
            ],
          },
        ],
      };

      myChart.setOption(option, true);
    },
    randomData() {
      this.now = new Date(+this.now + this.oneDay);
      this.value = this.value + Math.random() * 25 - 10;
      return {
        name: this.now.toString(),
        value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)],
      };
    },
    getEchartDynamicLine() {
      let myChart = echarts.init(document.getElementById('chart_dt'));
      for (let i = 0; i < 1000; i++) {
        this.dynamicLineXData.push(this.randomData());
      }

      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56',
              },
            },
          },
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '12%',
          bottom: '3%',
          containLabel: true,
        },
        color: ['#b54c5d'],
        calculable: true,
        xAxis: {
          type: 'time',
          name: '年-月-日',
          boundaryGap: false,
          splitNumber: 5,
          axisLabel: {
            formatter(value) {
              let date = new Date(value);
              return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8',
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          scale: true,
          name: '成活量',
          min: 0,
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2867a8',
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: '实时',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              opacity: 0,
            },
            data: this.dynamicLineXData,
            smooth: true,
          },
        ],
      };

      myChart.setOption(option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });

      this.dynamicLineTimer = setInterval(() => {
        for (let i = 0; i < 5; i++) {
          this.dynamicLineXData.shift();
          this.dynamicLineXData.push(this.randomData());
        }

        myChart.setOption(option, true);
      }, 2000);
    },
    getEchartRingPin() {
      let myChart = echarts.init(document.getElementById('chart_pin'));
      let linearGradient0 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#0a49c2',
          },
          {
            offset: 1,
            color: '#13adc5',
          },
        ]),
      };
      let linearGradient1 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#0c388d',
          },
          {
            offset: 1,
            color: '#137ff6',
          },
        ]),
      };
      let linearGradient2 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#05247a',
          },
          {
            offset: 1,
            color: '#183cd7',
          },
        ]),
      };
      let linearGradient3 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#064d9d',
          },
          {
            offset: 1,
            color: '#00b977',
          },
        ]),
      };
      let linearGradient4 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#133389',
          },
          {
            offset: 1,
            color: '#5e51e3',
          },
        ]),
      };
      let linearGradient5 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#2a54a4',
          },
          {
            offset: 1,
            color: '#ff900e',
          },
        ]),
      };
      let linearGradient6 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#5a847f',
          },
          {
            offset: 1,
            color: '#e3de24',
          },
        ]),
      };
      let linearGradient7 = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#38828a',
          },
          {
            offset: 1,
            color: '#61ac62',
          },
        ]),
      };

      let option = {
        color: ['#05bbdf', '#1170e1', '#1b40e3', '#00c86c', '#5e51e3', '#ff9235', '#fef51e', '#399632'],
        legend: {
          show: true,
          orient: 'vertical',
          left: '80%',
          top: 'middle',
          data: ['2020年', '2019年', '2018年', '2017年', '2016年', '2015年', '2014年', '2013年'],
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
          itemWidth: 20,
          itemHeight: 10,
        },
        series: [
          {
            name: '2020年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['85%', '90%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 270,
                itemStyle: linearGradient0,
              },
              {
                value: 30,
                itemStyle: {
                  normal: {
                    color: '#053f67',
                  },
                },
              },
            ],
          },
          {
            name: '2019年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['75%', '80%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 180,
                itemStyle: linearGradient1,
              },
              {
                value: 120,
                itemStyle: {
                  normal: {
                    color: '#062d67',
                  },
                },
              },
            ],
          },
          {
            name: '2018年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['65%', '70%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 220,
                itemStyle: linearGradient2,
              },
              {
                value: 80,
                itemStyle: {
                  normal: {
                    color: '#0c266a',
                  },
                },
              },
            ],
          },
          {
            name: '2017年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['55%', '60%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 210,
                itemStyle: linearGradient3,
              },
              {
                value: 90,
                itemStyle: {
                  normal: {
                    color: '#03414f',
                  },
                },
              },
            ],
          },
          {
            name: '2016年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['45%', '50%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 150,
                itemStyle: linearGradient4,
              },
              {
                value: 150,
                itemStyle: {
                  normal: {
                    color: '#142868',
                  },
                },
              },
            ],
          },
          {
            name: '2015年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['35%', '40%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 150,
                itemStyle: linearGradient5,
              },
              {
                value: 150,
                itemStyle: {
                  normal: {
                    color: '#373546',
                  },
                },
              },
            ],
          },
          {
            name: '2014年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['25%', '30%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 50,
                itemStyle: linearGradient6,
              },
              {
                value: 250,
                itemStyle: {
                  normal: {
                    color: '#35483f',
                  },
                },
              },
            ],
          },
          {
            name: '2013年',
            type: 'pie',
            clockWise: false,
            startAngle: 0,
            hoverAnimation: false,
            radius: ['15%', '20%'],
            center: ['40%', '50%'],
            label: {
              normal: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  normal: {
                    color: 'rgba(0, 0, 0, 0)',
                  },
                },
              },
              {
                value: 50,
                itemStyle: linearGradient7,
              },
              {
                value: 250,
                itemStyle: {
                  normal: {
                    color: '#0f3541',
                  },
                },
              },
            ],
          },
        ],
      };

      myChart.setOption(option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
    getEchartScrollArc() {
      let myChart = echarts.init(document.getElementById('chart_arc'));
      let option = {
        tooltip: {
          trigger: 'axis',
          showContent: false,
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: '#5d83ff',
                },
                {
                  offset: 0,
                  color: 'rgba(255, 255, 255, 0)',
                },
              ]),
            },
          },
        },
        color: ['#5d83ff'],
        grid: {
          top: 30,
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true, //轴上的数值
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} 月',
          },
          axisLine: {
            lineStyle: {
              color: '#999',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#999',
            },
          },
        },
        series: [
          {
            name: '人数',
            type: 'line',
            data: this.data,
            symbolSize: 10,
            itemStyle: {
              opacity: 0,
            },
            emphasis: {
              label: {
                show: true,
                color: '#fff',
                fontSize: 20,
              },
              itemStyle: {
                color: '#5d83ff',
                borderColor: '#fff',
                borderWidth: 2,
                opacity: 1,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#5d83ff',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 0, 0, 0)',
                  },
                ]),
              },
            },
            smooth: true,
          },
        ],
      };
      myChart.setOption(option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });

      this.timer = setInterval(() => {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: this.number,
        });

        this.number++;

        if (this.number > this.data.length) {
          this.number = 0;
        }
      }, 1000);
    },
    // getEchart() {
    //   var myChart1 = echarts.init(document.getElementById('chart_bar'));
    //   // let myChart1 = echarts.init(this.$refs['chart_bar']);
    //   let barWidth = '10%';
    //   let dataCoord = [
    //     { coord: [0, 9] },
    //     { coord: [1, 12] },
    //     { coord: [2, 15] },
    //     { coord: [3, 18] },
    //     { coord: [4, 15] },
    //     { coord: [5, 12] },
    //     { coord: [6, 9] },
    //     { coord: [7, 12] },
    //     { coord: [8, 15] },
    //     { coord: [9, 18] },
    //     { coord: [10, 15] },
    //     { coord: [11, 12] },
    //   ];
    //   let dataCoord2 = [
    //     { coord: [0, -9] },
    //     { coord: [1, -12] },
    //     { coord: [2, -15] },
    //     { coord: [3, -18] },
    //     { coord: [4, -15] },
    //     { coord: [5, -12] },
    //     { coord: [6, -9] },
    //     { coord: [7, -12] },
    //     { coord: [8, -15] },
    //     { coord: [9, -18] },
    //     { coord: [10, -15] },
    //     { coord: [11, -12] },
    //   ];

    //   let option = {
    //     xAxis: {
    //       data: this.xAxisData,
    //       axisLabel: {
    //         color: '#999',
    //         formatter: '{value} 月',
    //       },
    //       axisTick: {
    //         show: false,
    //       },
    //       axisLine: {
    //         show: true,
    //         lineStyle: {
    //           color: 'rgba(40, 103, 168, 0.3)',
    //         },
    //       },
    //     },
    //     yAxis: {
    //       axisLabel: {
    //         color: '#999',
    //       },
    //       axisTick: {
    //         show: false,
    //       },
    //       splitLine: {
    //         show: false,
    //       },
    //       axisLine: {
    //         show: true,
    //         lineStyle: {
    //           color: 'rgba(40, 103, 168, 0.3)',
    //         },
    //       },
    //     },
    //     grid: {
    //       top: 20,
    //       left: 20,
    //       right: 20,
    //       bottom: 20,
    //       containLabel: true,
    //     },
    //     series: [
    //       {
    //         name: '正值柱状图',
    //         type: 'bar',
    //         stack: 'one',
    //         itemStyle: {
    //           normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               {
    //                 offset: 1,
    //                 color: 'rgba(0, 0, 0, 0)',
    //               },
    //               {
    //                 offset: 0.5,
    //                 color: '#466e71',
    //               },
    //               {
    //                 offset: 0,
    //                 color: '#eb9b44',
    //               },
    //             ]),
    //           },
    //         },
    //         barWidth: barWidth,
    //         markPoint: {
    //           symbol: 'circle',
    //           itemStyle: {
    //             normal: {
    //               color: '#eb9b44',
    //               shadowColor: '#eb9b44',
    //               shadowBlur: 20,
    //             },
    //           },
    //           symbolSize: [10, 10], // 容器大小
    //           symbolOffset: [0, 0], // 位置偏移
    //           data: dataCoord,
    //         },
    //         data: this.yData1,
    //       },
    //       {
    //         name: '负值柱状图',
    //         type: 'bar',
    //         stack: 'one',
    //         itemStyle: {
    //           normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               {
    //                 offset: 0,
    //                 color: 'rgba(0, 0, 0, 0)',
    //               },
    //               {
    //                 offset: 0.5,
    //                 color: '#774a75',
    //               },
    //               {
    //                 offset: 1,
    //                 color: '#b34d69',
    //               },
    //             ]),
    //           },
    //         },
    //         barWidth: barWidth,
    //         markPoint: {
    //           symbol: 'circle',
    //           itemStyle: {
    //             normal: {
    //               color: '#b34d69',
    //               shadowColor: '#b34d69',
    //               shadowBlur: 20,
    //             },
    //           },
    //           symbolSize: [10, 10],
    //           symbolOffset: [0, 0],
    //           data: dataCoord2,
    //         },
    //         data: this.yData2,
    //       },
    //     ],
    //   };
    //   option && myChart1.setOption(option);
    // },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.dynamicLineTimer);
  },
};
</script>
<style lang="scss">
@import 'src/common/css/constant.scss';
.green-house {
  // display: flex;
  // justify-content: flex-end;
  padding: 70px 20px;
  height: 1300px;
  // background-image: url(../../assets/img/bj.jpg);
  background-color: rgba(31, 31, 31, 0.9);

  .chartsdom {
    left: 80px;
    width: 400px;
    height: 300px;
    margin-top: 0px;
  }
  .pyramidTrendChart {
    margin: 40px 0;
  }
  .seamlessChart {
    left: 370px;
    top: 110px;
    height: 50px;
    width: 50px;
    %table-style {
      width: 100%;
      height: 35px;
      table-layout: fixed;
      tr {
        td {
          padding: 10px 5px;
          text-align: center;
          background-color: transparent;
          white-space: nowrap;
          overflow: hidden;
          color: #e2e5ff;
          font-size: 14px;
        }
      }
    }
    .table {
      position: absolute;
      height: 80%;
      line-height: 20px;
      width: 100%;
      .table-header {
        @extend %table-style;
      }
      .seamless-warp {
        height: 200px;
        overflow: hidden;
        // visibility: visible;
        .colorRed {
          color: #ff4669;
        }
        .colorOrange {
          color: #ffc956;
        }
        .item {
          height: auto;
          @extend %table-style;
          tr {
            td {
              &.title {
                text-overflow: ellipsis;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
  .updef {
    position: absolute;
    width: 20%;
    height: 12px;
    margin-left: 8px;
    margin-top: 300px;
    top: 42%;
    background: rgba(6, 21, 104, 0.5);
    border-radius: 4px;
    box-shadow: 0px 0px 10px #066fe2 inset;
  }
  .definfo {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    white-space: nowrap;
    font-size: 14px;
    color: #fff;
    width: 100px;
    span {
      &:nth-child(1) {
        display: block;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin-top: 700px;
        margin-left: -130px;
      }
      &:nth-child(2) {
        display: block;
        position: absolute;
        width: 0;
        margin-left: -150px;
      }
    }

    &.definfo0 {
      margin-top: -83px;
      margin-left: 24%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_ls.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 62px;
          border: 1px dashed #3a962f;
        }
      }
    }
    &.definfo1 {
      margin-top: -112px;
      margin-left: 31%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_hs.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 100px;
          border: 1px dashed #fff600;
        }
      }
    }
    &.definfo2 {
      margin-top: -109px;
      margin-left: 17%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_cs.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 112px;
          border: 1px dashed #ff9232;
        }
      }
    }
    &.definfo3 {
      margin-top: -58px;
      margin-left: 13%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_zs.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 66px;
          border: 1px dashed #5e50e5;
        }
      }
    }
    &.definfo4 {
      margin-top: -92px;
      margin-left: 8%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_ml.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 99px;
          border: 1px dashed #00c172;
        }
      }
    }
    &.definfo5 {
      margin-top: -65px;
      margin-left: 35%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_sl.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 118px;
          border: 1px dashed #1342f1;
        }
      }
    }
    &.definfo6 {
      margin-top: -88px;
      margin-left: 42%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_ql.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 141px;
          border: 1px dashed #0681fd;
        }
      }
    }
    &.definfo7 {
      margin-top: -70px;
      margin-left: 49%;
      span {
        &:nth-child(1) {
          background: url(../../assets/img/icon_qql.png) repeat 0 0 !important;
        }
        &:nth-child(2) {
          height: 117px;
          border: 1px dashed #2bcbe6;
        }
      }
    }
  }
}
</style>
