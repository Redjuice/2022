# Vue 3 + Vite

### 目录结构

### 初始化项目

```
npm i pnpm -g
pnpm create vite
```

### 配置 eslint + prettier

- vscode 安装 eslint + prettier
- 安装以下依赖

```
npm i eslint eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier prettier -D
```

`新建.eslintrc.js`

```
// 具体查看.eslintrc.js
```

`新建.prettierrc.js`

```
// 具体查看.prettierrc.js
```

`新建.vscode/settings.json`

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 设置默认格式化工具为prettier
  "editor.formatOnSave": true, // 是否开启vscode的保存自动格式化
  // 保存时修复代码
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true  // eslint
  },
  "eslint.format.enable": true // 是否开启vscode的eslint
}
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "eslint:fix": "eslint --fix --ext .js,.vue src",
  "prettier:fix": "prettier --write ./src/../*.{less,js,json,.vue}",
  "format:all": "npm run eslint:fix && npm run prettier:fix",
},
```

解决`找不到模块“...”或其相应的类型声明。`的错误

`修改.vscode/settings.json`

```
...
"js/ts.implicitProjectConfig.checkJs": true,
"js/ts.implicitProjectConfig.experimentalDecorators": true
```

解决 git 提交代码时`warning: LF will be replaced by CRLF in`的警告

```
// 原因是存在符号转义问题
// windows中的换行符为 CRLF， 而在linux下的换行符为LF，所以在执行add . 时出现提示，解决办法：
git config --global core.autocrlf false
```

### 配置 stylelint

[掘金: stylelint 代码自动格式化](https://juejin.cn/post/7022720509875847182#heading-0)

[CSDN](https://blog.csdn.net/qq1014156094/article/details/122456439)

- vscode 安装 eslint + prettier
- 安装以下依赖

```
npm i stylelint stylelint-config-standard stylelint-order -D
```

`新建.stylelintrc.js`

```
具体查看.stylelintrc.js
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "style:fix": "stylelint \"src/**/*.(vue|less|css)\" --fix",
  "format:all": "npm run style:fix && npm run eslint:fix && npm run prettier:fix",
},
```

`修改.vscode/settings.json`

```
// settings.json
...,
"editor.codeActionsOnSave": {
  ...,
  "source.fixAll.stylelint": true
}
```

`可能出现的问题: Unknown word (CssSyntaxError) 错误`

`原因: 安装的 stylelint 和 VSCode Stylelint 插件版本太新，stylelint v14 及以上版本不兼容 vue3。`

`解决方法一: `

因为插件版本太高, 对于 vue3 模板文件的支持不是很好，不能正确识别 .vue 文件的 css
代码。需要降级处理

```
"stylelint": "^13.13.1",
"stylelint-config-standard": "^22.0.0",
```

同时需要将 VSCode 的 stylelint 插件降级，现在插件的最新版本是 1.0.3，不支持
stylelint 13 版本。点击插件旁边的小齿轮，再点 Install Another Version，选择其他
版本进行安装。选 `0.87.6 ` 版本安装就可以了，这时 css 自动格式化功能恢复正常。

`解决方法二: `

- 把之前的 stylelint 相关插件都卸载掉。

- 执行 npm install --save-dev postcss-html stylelint-config-recommended-vue
  stylelint-config-standard-scss stylelint-config-recess-order stylelint 安装包
  。

```
module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-recess-order"
  ]
};
```

### 配置 less

Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必
要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：

```
// 如果是用的是单文件组件，可以通过 <style lang="scss">自动开启。
npm i sass -D
```

### 配置 Element Plus

[自动按需导入 Element Plus](https://element-plus.gitee.io/zh-CN/guide/quickstart.html)

```
npm i element-plus

// 自动按需导入
npm i unplugin-vue-components vite-plugin-style-import -D

// 修改vite.config.js
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    ...,
    // 自动按需导入Element Plus的组件
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动按需导入Element Plus的css样式
    styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            resolveStyle: (name) => {
              return `element-plus/theme-chalk/${name}.css`;
            }
          }
        ]
      })
  ],
}
```

### 配置 husky + lint-staged

[掘金: 配置 husky 和 lint-staged](https://juejin.cn/post/6982876819292684318#heading-1)
[知乎: husky 使用总结](https://zhuanlan.zhihu.com/p/366786798)

`执行以下操作`

```
// && 连接符在vscode中会报错，建议在windows的powershell执行
npx husky-init && npm install

pnpm i lint-staged -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "lint-staged": "lint-staged"
},
"lint-staged": {
  "*.{js,vue}": [
    "npm run format:all",
    "git add ."
  ]
},
```

`修改husky/pre-commit`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint-staged
```

### 配置 commitlint

[简书: 代码提交规范 husky + commitlint + lint-staged](https://www.jianshu.com/p/6653f467e993)

`安装依赖`

```
pnpm i @commitlint/cli @commitlint/config-conventional -D
```

`新建commitlint.config.js或.commitlintrc.js`

```
// 具体查看.commitlintrc.js
```

`新建.husky/commit-msg`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

`或者修改.husky/pre-commit`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint-staged
npx --no-install commitlint --edit $1
```

### 配置 commitizen

```
// 全局安装
// 它会提供 git cz 命令替代我们的 git commit命令，帮助我们更加方便生成符合规范的 commit message。
npm install -g commitizen

// 项目中安装
// commitizen 的首选适配器
pnpm i cz-conventional-changelog -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "commit": "git cz"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-conventional-changelog"
  }
}
```

`执行 git cz 或者 yarn commit 提交代码`

### 配置 自定义 commitizen 提交规范(cz-customizable 适配器)

`安装依赖`

```
pnpm i cz-customizable -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "commit": "git cz"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

`新建.cz-config.js`

```
module.exports = {
  types: [
    { value: 'init', name: '🎉init: 初始提交' },
    { value: 'feat', name: '✨feat: 增加新功能' },
    { value: 'ui', name: '🌻ui: 更新UI' },
    { value: 'fix', name: '🐛fix: 修复bug' },
    { value: 'perf', name: '⚡️perf: 性能优化' },
    { value: 'refactor', name: '♻️refactor: 代码重构' },
    { value: 'chore', name: '🛠️chore: 更改配置文件' },
    { value: 'add', name: '➕add: 添加依赖' },
    { value: 'del', name: '❌del: 删除代码/文件' },
    { value: 'style', name: '🎨style: 样式修改不影响逻辑' },
    { value: 'docs', name: '📝docs: 修改文档' },
    { value: 'test', name: '✅test: 增加测试' },
    { value: 'revert', name: '⏪revert: 版本回退' },
    { value: 'release', name: '⌨️release: 发布' },
    { value: 'deploy', name: '👷deploy: 部署' }
  ],
  messages: {
    type: '选择更改类型:\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    confirmCommit: '确认提交?'
  },
  skipQuestions: ['scope', 'footer']
};
```

`执行 git cz 或者 yarn commit 提交代码`

### 配置 自定义 commitizen 提交规范(git-cz 适配器)

`安装依赖`

```
pnpm i git-cz -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "commit": "git-cz"
},
"config": {
  "commitizen": {
    "path": "git-cz"
  }
}

```

`新建changelog.config.js`

```
具体查看 changelog.config.js
```

`执行 yarn commit 或者 npx git-cz 提交代码`
