const getBarChart = data => {
  console.log(data);
  const defaultConfig = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "插秧机",
        "收获机",
        "搂草机",
        "穴播机",
        "植保机",
        "开沟机",
        "无人机",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: "#a90000",
            },
          },
          150,
          80,
          70,
          110,
          130,
        ],
        type: "bar",
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);
  return opt;
};

export default {
  getBarChart,
};
