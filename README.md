This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm i react-router-dom`

- 下面两个都会默认依赖 react-router
- react-router-dom 用于浏览器
- react-router-native 用于 React Native

### 使用 Redux

- npm i redux react-redux @types/redux @types/react-redux
- npm i redux-devtools -D
- npm i redux-actions @types/redux-actions 简化 redux 的使用

### `npm i redux-actions@4.4.2`

- 使用 typesafe-actions 替换 redux-actions
- 安装最新版本会有问题暂使用 4.4.2
- typesafe-actions 是一款专门为 ts 设计的库，能够帮助开发者减少 redux 样板代码，并自动为开发者创建好类型

### `npm i redux-observable`

### `npm i axios`

### 配置less module(为了兼容antd的less文件，项目中样式文件以*.module.less命名)

- npm i less less-loader --D

- 生成webpack配置项文件  npm run eject

- config/webpack.config.js添加如下代码

```js
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
……
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader'
  ),
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: getStyleLoaders({
      importLoaders: 3,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
  },
  'less-loader'
  ),
},
```

### Antd的按需加载 `npm i babel-plugin-import --D`

- 项目根目录新建babel.config.js文件

```js
module.exports = {
  plugins: [
    ["import", { libraryName: "antd", style: true}] // `style: true` 会加载 less 文件
  ]
};
```
