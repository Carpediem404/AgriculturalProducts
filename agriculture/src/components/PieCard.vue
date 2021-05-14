<template>
  <div class="pie-card">
    <div class="card-title">{{ titles[0] }}</div>
    <div class="pie-content">
      <div ref="pieChart" class="pie-chart"></div>
      <div class="pie-text">
        <pie-tip
          v-for="(item, index) in nums"
          :key="index"
          :text="titles[index + 1]"
          :number="getRatio(item)"
          :color="colors[index]"
        ></pie-tip>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import PieTip from "./PieTip.vue";
import { toPercent } from "@/utils/index";

export default {
  name: "pieCard",
  components: { PieTip },
  props: {
    nums: {
      type: Array,
      default: [],
    },
    titles: {
      type: Array,
      default:()=> ["光照", , "空气温度", "空气湿度", "二氧化碳浓度",'土壤温湿度'],
    },
  },
  data() {
    return {
      chart: null,
      colors: ["#5B8FF9", "#5AD8A6", "#5D7092", "#F6BD16"],
    };
  },
  watch: {
    nums() {
      this.initEcharts();
    },
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    getRatio(item) {
      let n = "0%";
      if (this.nums.length === 0) {
        n = "0%";
      } else {
        const total = this.nums.reduce((a, b) => a + b);
        n = toPercent(item / total);
      }
      return n;
    },
    initEcharts() {
      if (this.nums.length === 0) return;
      this.chart = echarts.init(this.$refs["pieChart"]);
      let option = {
        tooltip: {
          show: false,
        },
        color: this.colors,
        legend: {
          show: false,
        },
        series: [
          {
            name: this.titles[0],
            type: "pie",
            // center: [200, 136],
            radius: [0, "100%"],
            avoidLabelOverlap: false,
            legendHoverLink: false,
            animation: false,
            label: {
              position: "inside",
              formatter: "{d}%",
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            labelLine: {
              show: false,
            },
            stillShowZeroSum: false,
            data: [
              { value: this.nums[0]===0?'':this.nums[0], name: this.titles[1] },
              { value: this.nums[1]===0?'':this.nums[1], name: this.titles[2] },
              { value: this.nums[2]===0?'':this.nums[2], name: this.titles[3] },
              { value: this.nums[3]===0?'':this.nums[3], name: this.titles[4] },
            ],
          },
        ],
      };
      option && this.chart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.pie-card {
  width: 100%;
  .card-title {
    opacity: 0.85;
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: -0.17px;
    margin-bottom: 8px;
  }

  .pie-content {
    width: 100%;
    height: 273px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.09);
    .pie-chart {
      width: 188px;
      height: 188px;
      margin-left: calc(55% - 188px);
    }
    .pie-text {
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 60px;
    }
  }
}
</style>
