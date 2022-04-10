const getLineChart = data => {
  console.log(data);
  const defaultConfig = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["穴播机", "植保机", "插秧机", "搂草机", "收获机"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["一月", "三月", "五月", "七月", "九月", "十一月"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "穴播机",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "植保机",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "插秧机",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "搂草机",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "收获机",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);
  return opt;
};

export default {
  getLineChart,
};
