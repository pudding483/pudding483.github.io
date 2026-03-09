<div align = center>
  <h1>astro-theme-reimu</h1>
  <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fastro-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">
  <img alt="GitHub License" src="https://img.shields.io/github/license/D-Sketon/astro-theme-reimu">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/astro-theme-reimu">

💘 博麗 霊夢 💘

<img src="https://cdn.jsdelivr.net/gh/D-Sketon/astro-theme-reimu/screenshot.png"/>
</div>

---

- 代辦事項：
  - PreLoadering 動畫不管是否載入完成，均有最短時間
  - 麵包屑導航 (可略)
  - 為甚麼要建這個 blog => 放在關於
  - 除了 writeup 其他類別的文章

---

本主题是 [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu) 的 Astro 移植版本，一款博丽灵梦风格的 Astro 主题。

| framework                    | repository                                                         | version                                                                                                                                                                                     | stars                                                                                              |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Hexo](https://hexo.io/)     | [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu)   | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhexo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">  | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hexo-theme-reimu">  |
| [Hugo](https://gohugo.io)    | [hugo-theme-reimu](https://github.com/D-Sketon/hugo-theme-reimu)   | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhugo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">  | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hugo-theme-reimu">  |
| [Astro](https://astro.build) | [astro-theme-reimu](https://github.com/D-Sketon/astro-theme-reimu) | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fastro-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version"> | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/astro-theme-reimu"> |

### 项目结构

```plain
/
├── public/              # 静态资源
│   ├── images/
│   │   ├── banner.webp
│   │   ├── banner-800w.webp
│   │   ├── banner-600w.webp
│   │   ├── favicon.ico
│   │   ├── reimu.png
│   │   └── taichi.png
│   └── robots.txt
├── src/
│   ├── components/      # Astro/React 组件
│   ├── content/         # 内容集合
│   │   ├── blog/        # 博客文章
│   │   └── config.ts    # 内容集合配置
│   ├── hooks/           # React Hooks
│   ├── languages/       # i18n 语言文件
│   │   ├── en.ts
│   │   ├── zh-cn.ts
│   │   ├── zh-tw.ts
│   │   └── ja.ts
│   ├── layouts/         # 页面布局
│   ├── pages/           # 页面路由
│   │   ├── about.mdx    # 关于页面
│   │   ├── archives/    # 归档页面
│   │   ├── blog/        # 博客页面
│   │   ├── categories/  # 分类页面
│   │   ├── tags/        # 标签页面
│   │   └── rss.xml.js   # RSS 订阅
│   ├── plugins/         # Markdown 插件
│   ├── styles/          # 样式文件
│   ├── utils/           # 工具函数
│   ├── config.ts        # 主题配置文件
│   ├── covers.ts        # 封面图配置
│   └── env.d.ts
├── astro.config.mjs     # Astro 配置
├── package.json
└── tsconfig.json
```
