<template>
  <div class="line-chart">
    <div class="chart-title">{{ title }}</div>
    <div ref="lineChart" class="chart-content"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "lineChart",
  props: {
    xDatas: {
      type: Array,
      default: () => [
        "09:22:34",
        "09:24:34",
        "09:25:34",
        "09:26:34",
        "09:27:34",
      ],
    },
    yDatas: {
      type: Array,
      default: () => [150, 230, 224, 218, 135],
    },
    title: {
      type: String,
      default: "农产品生长状况",
    },
    mode: {
      type: String,
      default: "1", //1：折线图，2：平滑折线图
    },
  },
  watch: {
    xDatas() {
      this.initEcharts();
    },
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      if (this.xDatas.length === 0) return;
      this.chart = echarts.init(this.$refs["lineChart"]);
      let option = {
        grid: {
          top: 30,
          bottom: 25,
          right: 10,
          left: 50,
        },
        xAxis: {
          type: "category",
          data: this.xDatas,
        },
        yAxis: [{
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          

        }],
        series: [
          {
            data: this.yDatas,
            type: "line",
            smooth: this.mode == "2",
            lineStyle: {
              color: "#5B8FF9",
            },
            itemStyle: {
              color: "#5B8FF9",
            },
            areaStyle: {
              color: "rgba(102,165,250,0.2)",
            },
          },
        ],
      };
      option && this.chart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.line-chart {
  width: 100%;
  .chart- {
    &title {
      width: 100%;
      opacity: 0.85;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.85);
      letter-spacing: -0.15px;
      font-weight: bold;
    }
    &content {
      width: 100%;
      height: 245px;
    }
  }
}
</style>

