# <a name="features">⊙ Ant Design Mobile of React</a>

## <a name="features">⊙ 技术栈</a>
* `React-router-dom 4.2.2`
* `Webpack 3.5.6`
* `ESlint 4.6.1 + Prettier 1.6.1 + Pre-commit`
* `Axios 0.16.2`
* `ES6 + Babel`
* `Ant Design Mobile 2.0.0(beta)`

## <a name="features">⊙ 代码检测</a>
eslint手动检查
```
npm run eslint
```
eslint手动修正
```
npm run fix
```

## <a name="tree">⊙ 目录结构</a>
```
.
├─ build/               # Webpack构建的线上包
├─ dist/                # build 生成的生产环境下的项目
├─ src/                 # 源码目录
│   ├─ assets/          # images
│   ├─ components/      # 组件
│   ├─ const/           # 常量
│   ├─ containers/      # 容器
│   ├─ reducers/        # 函数因子
│   ├─ routers/         # 路由
│   ├─ saga/            # 路由视图基页（VIEW）
│   ├─ server/          # 网络请求提取
│   ├─ utils/           # 公用方法封装
│   ├─ main.js          # 主入口文件
├── static/             # 放置无需经由 Webpack 处理的静态文件
│   ├─ font.css/        # [iconfont+配置](http://www.iconfont.cn/)
├── index.html          # 静态模板页面，开发和build产出，都依赖它
├── .babelrc            # Babel 转码配置
├── .gitlab-ci.yml      # gitlab 自动打包上线
├── .eslintignore       # ESLint 检查中需忽略的文件（夹）
├── .eslintrc           # ESLint 配置
├── .gitignore          # git忽略提交
├── .postcssrc.js       # postcss配置项，vue-cli产出
├── package.json        # 很重要的东西了
```
## <a name="reference">⊙ 操作</a>
项目下载
```
git clone http://gitlab.dev.nongfenqi.com/Tristram/Lux
cd Lux && yarn
```
启动开发环境
```
yarn start
```
构建生产环境代码
```
yarn build
```

## <a name="reference">⊙ 启动静态服务器</a>
[sts启动静态服务器](https://www.npmjs.com/package/sts)
```
yarn build
cd dist && sts 8090
```

## <a name="reference">⊙ 上线打包修改配置</a>
```
new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // drop_debugger: true,
        // drop_console: true
      },
      sourceMap: false   //上线生产不允许带上source文件    <-------look this line
}),
```
