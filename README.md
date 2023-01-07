# electron-workbench

## 项目计划

- [x] umi项目初始化
  > umi 和 create-react-app 区别？ umi更加贴近开发，更加贴近业务，更加接地气
  > 1. 通过脚手架创建项目 `yarn create @umijs/umi-app` 
  > 2. `yarn` 安装依赖
  
- [x] electron初始化
  > 1. 执行`yarn add --dev electron` 将 electron 包安装到应用的开发依赖中
  > 2. 在package.json配置文件中的scripts字段下增加一条start命令
  > ```
  >{
  >  "scripts": {
  >    "start": "electron ."
  >  }
  >}
  >```
  
- [x] express初始化

  express 与 express-generator区别?

  Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
  Express-generator是Express的应用生成器，通过使用生成器工具，可以快速创建一个Express的应用骨架。
  使用Express-generator创建Express应用骨架

  > 在app文件夹下，新建server文件夹，存放后端服务
  >
  > 执行 `npx express-generator` 初始化express
  
- [x] 前端编译资源到express运行（前后端开发模式）

  > 此时我们的 服务端express 可以在localhost:3000 访问
  >
  > 我们将umi创建的项目打包成静态文件，放到 express 中访问

  - 进入main文件夹，执行命令 `npm run build` 打包项目

  - 将打包后的`dist`放入`express`静态文件夹中

  - 修改`express`中的 `app.js` 读取静态资源下的`dist`

    > 修改app/server/app.js
    >
    > ![image-20230101172834262](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101172834262.png)
    >
    > umi打包后将dist文件放入app/server/public
    >
    > ![image-20230101172919771](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101172919771.png)
    >
    > ![image-20230101172932989](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101172932989.png)

  - 启动express服务，进入localhost:3000

    > ![image-20230101173026172](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101173026172.png)

  此时，我们的web应用中的前后端开发模式就完成了。

- [x] 通过electron启动express服务器

  > express增加一个方法，启动express服务，当electron启动时，调用express的启动方法，并且在electron中通过iframe访问express服务`localhost:3000`（注意关闭electron安全服务)

  - 修改electron

    > 1. 启动express服务
    >
    > 2. 进入app/index.html 添加iframe，访问express后端服务
    >
    >    ```
    >    <div class="container">
    >    	<iframe src="http://localhost:3000"></iframe>
    >    </div>
    >    ```
    >
    >    这里需要处理一下iframe默认样式
    >
    > 3. 启动electron，此时可以看到页面是express的启动页面
    >
    >    ![image-20230101175701435](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101175701435.png)
    >
    > 4. 定义express启动方法
    >
    >    > 这里为什么要定义express启动方法？
    >    >
    >    > 这里我们需要开启express和electron，为了简化操作，我们可以在electron启动时调用express的启动方法
    >    >
    >    > - 定义、导出
    >    >
    >    > ![image-20230101181348672](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101181348672.png)
    >    >
    >    > - 导入、调用
    >    >
    >    >   ![image-20230101181435387](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101181435387.png)
    >
    > 此时，启动electron会展示后端页面
    >
    > ![image-20230101181552605](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230101181552605.png)
    >
    > 逻辑分析：我们在umi中进行开发，开发完进行打包，将打包后的静态文件放入express中通过服务端访问，最后启动electron调用express的启动方法，通过iframe展示服务端页面。
  
- [x] menuItem组件

  > 完成页面基本布局，将菜单进行拆分组件
  >
  > ![image-20230102032154963](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230102032154963.png)
  
- [x] taskItem组件

  > 完成页面基本布局，将任务进行拆分组件
  >
  > ![image-20230102183035514](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/image-20230102183035514.png)
  
- [x] 任务-添加任务

  > ![GIF 2023-1-8 1-36-09](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-1-8%201-36-09.gif)

- [x] 任务-更多操作

  > <img src="https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-1-8%201-37-19.gif" alt="GIF 2023-1-8 1-37-19" style="zoom:50%;" />

- [x] 任务-完成任务

  > ![GIF 2023-1-8 1-38-19](https://liuxueji.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-1-8%201-38-19.gif)
## 踩坑
1. throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');
> 问题：开发 Electron 项目，总是会发生安装失败或者安装时间太长的问题
> 解决办法：
> 尝试1：删掉再下载，但是一直都失败！
> 尝试2：切换为淘宝源

2. yarn start失败
> 问题：根据electron配置项目，然后执行 yarn start 启动项目，启动失败
> 解决办法：electron文档中是创建 `main.js` 主入口，但是会报错，需要将入口文件改为 `index.js`
