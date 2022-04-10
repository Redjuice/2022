const getPieChart = data => {
  console.log(data);
  const defaultConfig = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "使用频率",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "收获机" },
          { value: 735, name: "穴播机" },
          { value: 580, name: "搂草机" },
          { value: 484, name: "插秧机" },
          { value: 300, name: "拖拉机" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);
  return opt;
};

export default {
  getPieChart,
};
