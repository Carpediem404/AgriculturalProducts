<template>
  <div ref="columnChart" class="column-chart"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  props: {
    xDatas: {
      type: Array,
      default: () => {
        return ['Carlini L2 10.0', 'Carlini L2 20.0', 'Carlini L2 30.0', 'Carlini L2 40.0'];
      },
    },
    yDatas: {
      type: Object,
      default: () => {
        return {
          without_defense: [0.0, 0.0, 0.0, 0.0],
          with_det: [0.9701010101010101, 0.9959595959595959, 0.9996969696969698, 0.99989898989899],
          with_ref: [0.9111111111111111, 0.43313131313131314, 0.07535353535353535, 0.0048484848484848485],
          with_both: [0.99, 0.9971717171717172, 0.9996969696969698, 0.99989898989899],
        };
      },
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(this.$refs['columnChart']);
      var sourceList = ['product'];
      sourceList = sourceList.concat(Object.keys(this.yDatas));
      console.log('第一条记录', sourceList);

      var temp = this.xDatas.map((item, index) => {
        return [
          item,
          ...Object.keys(this.yDatas).map((model_name) => {
            return this.yDatas[model_name][index];
          }),
        ];
      });
      console.log('数据', temp);
      var dataset = temp.unshift(sourceList);

      var seriesArr = [];
      var chartColor = ['#5B8FF9', '#F6BD16', '#5AD8A6', '#E8684A', '#5D7092'];
      for (let i = 0; i < this.xDatas.length; i++) {
        seriesArr.push({
          type: 'bar',
          barMinHeight: 2,
          itemStyle: {
            color: chartColor[i],
          },
        });
      }
      console.log('数据集', dataset);
      let option = {
        legend: {
          top: 'bottom',
        },
        tooltip: {},
        dataset: {
          source: temp,
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: seriesArr,
      };

      option && chart.setOption(option);
    },
  },
};
</script>
<style scoped lang="scss">
.column-chart {
  width: 100%;
  height: 311px;
  margin-bottom: 24px;
}
</style>