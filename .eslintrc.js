module.exports = {
  // 指定配置文件根目录：表示当前文件为eslint的根配置文件，逐层查找时无需往更上一级的文件目录中进行搜索
  root: true,
  // 运行环境极其局全局变量
  env: {
    browser: true, //浏览器环境
  },
  // eslint解析器配置项
  parserOptions: {
    "ecmaVersion": 6, // 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本
    "sourceType": "module",// 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  extends: [
    "plugin:eslint/recommended"
  ],
  plugins: [
    "react-hooks",
    'import', 
    'node', 
    'promise'
  ],
  rules: {
    "quotes": ["error", "double"],
  },
}