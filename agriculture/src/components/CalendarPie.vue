<template>
  <div ref="calendarPie" class="calendar-pie"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  data() {},
  mounted() {
    this.draw();
  },
  methods: {
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
    draw() {
      var cellSize = [80, 80];
      var pieRadius = 30;
      var chart = echarts.init(this.$refs['calendarPie']);
      var scatterData = getVirtulData();

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
          series: getPieSeries(scatterData, myChart),
        });
      }, 10);
      var app = {};
      app.onresize = function () {
        if (pieInitialized) {
          myChart.setOption({
            series: getPieSeriesUpdate(scatterData, myChart),
          });
        }
      };
      option && chart.setOption(option);
    },
  },
};
</script>
<style  lang="scss">
.calendar-pie {
  width: 100%;
  height: 400px;
  margin-bottom: 24px;
}
</style>