<template>
  <div class="chart">
    <div ref="chart" :style="{ height: height, width: width }" />
  </div>
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart, BarChart, PieChart, MapChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  // GeoComponent,
  VisualMapComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

import { chinaGeo } from "./geo/china";

// 注册必须的组件
echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  VisualMapComponent,
  LineChart,
  BarChart,
  PieChart,
  MapChart,
  CanvasRenderer,
]);

export default {
  name: "ChartView",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartOption: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "canvas",
    },
    playHighlight: {
      type: Boolean,
      default: false,
    },
    mapGeo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      chart: null,
      // 动画定时器
      actionTimer: "",
      currentIndex: -1,
    };
  },
  watch: {
    chartOption: {
      deep: true,
      handler(newVal) {
        this.setOptions(newVal);
      },
    },
  },
  mounted() {
    this.initChart();

    if (this.autoResize) {
      window.addEventListener("resize", this.resizeHandler);
    }
  },
  beforeDestroy() {
    if (!this.chart) return;
    if (this.autoResize)
      window.removeEventListener("resize", this.resizeHandler);

    this.chart.dispose();
    this.chart = null;

    this.actionTimer && clearInterval(this.actionTimer);
    this.actionTimer = null;
  },
  methods: {
    resizeHandler() {
      this.chart.resize();
    },
    initChart() {
      this.mapGeo && echarts.registerMap("china", chinaGeo);
      this.chart = echarts.init(this.$refs.chart, "", {
        renderer: this.type,
      });
      this.chart.setOption(this.chartOption);
      this.chart.on("click", this.handleClick);

      if (this.playHighlight) this.playHighlightAction();
    },
    handleClick(params) {
      this.$emit("click", params);
    },
    setOptions(option) {
      this.clearChart();
      this.resizeHandler();
      if (this.chart) {
        this.chart.setOption(option);
      }
    },
    refresh() {
      this.setOptions(this.chartOption);
    },
    clearChart() {
      this.chart && this.chart.clear();
    },
    playHighlightAction() {
      this.actionTimer = setInterval(() => {
        const dataLen = this.chartOption.series[0].data.length;
        // 取消之前高亮的图形
        this.chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: this.currentIndex,
        });
        this.currentIndex = (this.currentIndex + 1) % dataLen;
        // 高亮当前图形
        this.chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: this.currentIndex,
        });
        // 显示tooltip
        this.chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: this.currentIndex,
        });
      }, 1000);
    },
  },
};
</script>
