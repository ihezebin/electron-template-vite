# Electron Vite Layout Template

一个基于 Electron、React、TypeScript、Ant Design 和 electron-vite 的桌面应用模板。模板只包含通用示例内容，并提供两套彼此独立的应用布局：

- `src/renderer/src/layouts/topbar`：顶部导航的上下布局
- `src/renderer/src/layouts/sidebar`：左侧导航的左右布局

应用内按钮可以在 `#/topbar` 和 `#/sidebar` 两个路由间切换。实际项目选定布局后，可以直接删除另一布局目录，并在 `App.tsx` 中删除对应 import 和 Route；最后将兜底路由改为保留的路径即可。共享的主题、字体、更新和示例内容不受影响。

## 开发

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run typecheck
npm run build
npm run dist:mac
npm run dist:win
npm run dist:linux
```

构建产物位于 `release/`。应用在 macOS 和 Windows 上关闭窗口时会隐藏到托盘，可从托盘重新打开或退出。托盘中的“示例操作”演示了菜单扩展位置。

## 主题与字体

外观设置支持跟随系统、浅色、深色三种主题，以及朱雀仿宋、霞鹜文楷、小赖字体三种字体。设置由主进程的 `electron-store` 保存，字体在首次使用时动态加载。

## 自动更新

模板使用 `electron-updater`，交互流程为“检查更新 → 用户点击下载 → 下载完成后退出并安装”，不会在检查时自动下载。

发布前必须修改 `electron-builder.yml` 中的 GitHub `owner` 和 `repo`，并配置发布所需的 `GH_TOKEN`。打包时会生成 updater 所需的元数据文件；开发模式只演示检查界面，不会下载或安装更新。

## 开始实际项目时建议替换

1. 修改 `package.json` 的名称、版本、描述和作者。
2. 修改 `electron-builder.yml` 的 `appId`、`productName` 和发布仓库。
3. 替换 `src/main/index.ts` 中的应用标题、托盘名称和示例菜单。
4. 替换 `ExampleContent.tsx`，或按业务拆分页面路由。
5. 在 `build/` 放入正式的应用图标；当前代码中的 SVG 图标仅用于模板运行示例。
