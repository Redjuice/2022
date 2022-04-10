const getMapChart = data => {
  console.log(data);
  const defaultConfig = {
    tooltip: {
      trigger: "item",
      title: false,
    },
    visualMap: {
      left: "center",
      orient: "horizontal",
      calculable: true,
      inRange: {
        color: [
          "#fff",
          "#dae5fc",
          "#bbd7fb",
          "#86b6f6",
          "#80a9f7",
          "#468eee",
          "#3a84ed",
          "#1073ef",
        ],
      },
    },
    series: [
      {
        name: "数值",
        type: "map",
        mapType: "china",
        zoom: 1.2,
        roam: false,
        data: [
          { name: "北京市", value: Math.round(Math.random() * 1000) },
          { name: "天津市", value: Math.round(Math.random() * 1000) },
          { name: "上海市", value: Math.round(Math.random() * 1000) },
          { name: "重庆市", value: Math.round(Math.random() * 1000) },
          { name: "河北省", value: Math.round(Math.random() * 100) },
          { name: "河南省", value: Math.round(Math.random() * 1000) },
          { name: "云南省", value: Math.round(Math.random() * 1000) },
          { name: "辽宁省", value: Math.round(Math.random() * 1000) },
          { name: "黑龙江省", value: Math.round(Math.random() * 1000) },
          { name: "湖南省", value: Math.round(Math.random() * 100) },
          { name: "安徽省", value: Math.round(Math.random() * 100) },
          { name: "山东省", value: Math.round(Math.random() * 1000) },
          { name: "新疆省", value: Math.round(Math.random() * 1000) },
          { name: "江苏省", value: Math.round(Math.random() * 100) },
          { name: "浙江省", value: Math.round(Math.random() * 1000) },
          { name: "江西省", value: Math.round(Math.random() * 100) },
          { name: "湖北省", value: Math.round(Math.random() * 1000) },
          { name: "广西省", value: Math.round(Math.random() * 100) },
          { name: "甘肃省", value: Math.round(Math.random() * 1000) },
          { name: "山西省", value: Math.round(Math.random() * 100) },
          { name: "内蒙古", value: Math.round(Math.random() * 100) },
          { name: "陕西省", value: Math.round(Math.random() * 1000) },
          { name: "吉林省", value: Math.round(Math.random() * 1000) },
          { name: "福建省", value: Math.round(Math.random() * 100) },
          { name: "贵州省", value: Math.round(Math.random() * 1000) },
          { name: "广东省", value: Math.round(Math.random() * 100) },
          { name: "青海省", value: Math.round(Math.random() * 1000) },
          { name: "西藏省", value: Math.round(Math.random() * 1000) },
          { name: "四川省", value: Math.round(Math.random() * 100) },
          { name: "宁夏省", value: Math.round(Math.random() * 1000) },
          { name: "海南省", value: Math.round(Math.random() * 1000) },
          { name: "台湾省", value: Math.round(Math.random() * 100) },
          { name: "香港省", value: Math.round(Math.random() * 100) },
          { name: "澳门省", value: Math.round(Math.random() * 1000) },
        ],
      },
    ],
  };

  const opt = Object.assign({}, defaultConfig);
  return opt;
};

export default {
  getMapChart,
};
