/**
 * 根据命令行运行参数，修改 /config/env.js 里面的项目配置信息
 * 修改 project.config.json的appid
 */

const fs = require("fs");
const path = require("path");
// 源文件
const sourceFiles = {
  prefix: "/config/env/",
  dev: "dev.json",
  uat: "uat.json",
  prod: "prod.json",
};
// 目标文件
const targetFiles = {
  prefix: "/config/",
  filename: "env.js",
};
const preText = "export default ";
// 获取命令行参数
const cliArgs = process.argv.splice(2);
const env = cliArgs[0];

// 获取文件名
const name = env.split("--")[1] + ".json";

// 处理env数据
fs.readFile(path.join(__dirname, sourceFiles.prefix, name), (err, data) => {
  if (err) {
    throw new Error(
      `Error occurs when reading file ${name}.\nError detail: ${err}`
    );
  }
  // 获取源文件中的内容
  const targetConfig = JSON.parse(data);
  modConfig(targetConfig.appid);
  // 写入的文件内容
  const result = preText + JSON.stringify(targetConfig, "", "\t");

  // 写入文件(这里只做简单的强制替换整个文件的内容)
  fs.writeFile(
    path.join(__dirname, targetFiles.prefix, targetFiles.filename),
    result,
    "utf8",
    (err) => {
      if (err) {
        throw new Error(
          `error occurs when reading file ${targetFiles.filename}. Error detail: ${err}`
        );
      }
    }
  );
});

// 处理project.config数据
function modConfig(appid) {
  fs.readFile(path.join(__dirname, "/project.config.json"), (err, data) => {
    if (err) {
      throw new Error(
        `Error occurs when reading file project.config.json.\nError detail: ${err}`
      );
    }
    // 获取源文件中的内容
    let targetConfig = JSON.parse(data);
    targetConfig.appid = appid;

    // 写入文件(这里只做简单的强制替换整个文件的内容)
    fs.writeFile(
      path.join(__dirname, "/project.config.json"),
      JSON.stringify(targetConfig, "", "\t"),
      "utf8",
      (err) => {
        if (err) {
          throw new Error(
            `error occurs when reading file project.config.json. Error detail: ${err}`
          );
        }
      }
    );
  });
}
