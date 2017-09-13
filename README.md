# <a name="features">&sect; Ant Design Mobile of React @农分期</a>

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 15.6.1
* Redux 3.7.2
* React-redux 5.0.6
* React-router-dom 4.2.2 
* Redux-saga 0.15.6
* Webpack 3.5.6
* Babel-ESlint + Pre-ommit
* Axios 0.16.2
* ES6 + Babel
* Ant Design Mobile 2.0.0(beta)
*** 

### <a name="tree">⊙ 目录结构</a>
```
.
├─ build/               # Webpack构建的线上包
├─ dist/                # build 生成的生产环境下的项目
├─ src/                 # 源码目录
│   ├─ assets/          # images
│   ├─ components/      # 组件（COMPONENT）
│   ├─ const/           # 常量集中管理
│   ├─ containers/      # 容器
│   ├─ reducers/        # 函数因子
│   ├─ routers/         # 路由
│   ├─ saga/            # 路由视图基页（VIEW）
│   ├─ server/          # 网络请求提取
│   ├─ utils/           # 公用方法封装
│   ├─ main.js          # 主入口文件
├── static/             # 放置无需经由 Webpack 处理的静态文件
├── test/               # vue-cli产出的测试目录，暂时没有处理，待更
├── index.html          # 静态模板页面，开发和build产出，都依赖它
├── .babelrc            # Babel 转码配置
├── .eslintignore       # ESLint 检查中需忽略的文件（夹）
├── .eslintrc           # ESLint 配置
├── .gitignore          # git忽略提交
├── .postcssrc.js       # postcss配置项，vue-cli产出
├── package.json        # 很重要的东西了
```
## <a name="reference">&sect; 操作</a>
项目下载
```
git clone https://github.com/brucecham/react-cli.git
cd react-cli && yarn
```
启动开发环境
```
yarn start
```
构建生产环境代码
```
yarn build
```

## <a name="reference">&sect; 启动静态服务器</a>
> [sts启动静态服务器](https://www.npmjs.com/package/sts)
```
yarn build
cd dist && sts 8090
```
