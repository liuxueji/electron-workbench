# electron-workbench

## 踩坑
1. throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');
> 问题：开发 Electron 项目，总是会发生安装失败或者安装时间太长的问题
> 解决办法：
> 尝试1：删掉再下载，但是一直都失败！
> 尝试2：切换为淘宝源

2. yarn start失败
> 问题：根据electron配置项目，然后执行 yarn start 启动项目，启动失败
> 解决办法：electron文档中是创建 `main.js` 主入口，但是会报错