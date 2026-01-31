

<div id="中文版本"></div>

## 🇨🇳 中文版本

### 📖 项目介绍

欢迎来到我的数字花园。这是一个以“视觉优先”为理念设计的极简主义个人作品集网站。

该项目摒弃了传统的长篇大论式排版，采用流行的 **Bento Grid（便当盒）** 布局，将信息拆解为模块化的卡片。我的目标是创造一种**流畅、优雅且富有细节**的交互体验，融合了磨砂玻璃质感与细腻的微交互动画。

### ✨ 核心亮点

- **🍱 Bento Grid 布局：** 灵感来源于 Apple 控制中心，采用网格化设计，使内容展示井井有条且富有节奏感。
- **🌫️ 玻璃拟态 UI：** 深色模式下配合磨砂玻璃背景、噪点纹理以及微弱的发光边框，营造高级质感。
- **🌊 丝滑的交互动画：** 基于 **Framer Motion** 构建，包含交错式入场动画、具有物理回弹感的悬停效果以及无缝的布局切换。
- **🧩 数据驱动架构：** 所有的文字内容（个人简介、社交链接、碎碎念）都与 UI 代码分离，通过配置文件轻松管理。
- **📱 全端响应式：** 在手机、平板和桌面端都能提供完美的浏览体验。

### 🛠️ 技术栈

| 分类 | 技术 / 库 |
|------|-----------|
| **框架** | Next.js 14 (App Router) |
| **语言** | TypeScript |
| **样式** | Tailwind CSS |
| **动画库** | Framer Motion |
| **图标库** | Lucide React |
| **部署托管** | Vercel |

### 📂 目录结构说明

为了方便理解项目结构，核心文件组织如下：

```text
├── app/                  # Next.js 应用主目录
│   ├── layout.tsx        # 全局布局 (字体、元数据)
│   ├── page.tsx          # 主页面 (Bento Grid 核心逻辑)
│   └── globals.css       # 全局样式 (Tailwind 指令)
├── components/           # UI 组件目录
│   └── ui/               # 基础组件
├── config/               # ⚡️ 内容配置中心 (修改此处更新网站)
│   └── site.ts           # 存放个人信息、链接、文章数据
├── public/               # 静态资源 (图片、图标)
└── package.json          # 项目依赖配置
```

---

<div id="english-version"></div>

## 🇬🇧 English Version

### 📖 Introduction

Welcome to my digital garden. This project is a minimalist personal portfolio website designed with a **"Visual First"** philosophy. 

It moves away from traditional text-heavy layouts, utilizing a **Bento Grid** structure to present information in modular, digestible chunks. The goal was to create an experience that feels **fluid, elegant, and interactive**, featuring glassmorphism aesthetics and micro-interactions.

### ✨ Key Features

- **🍱 Bento Grid Layout:** A responsive, grid-based design inspired by Apple's control center, allowing for organized content presentation.
- **🌫️ Glassmorphism UI:** Modern frosted glass effects with subtle noise textures and glowing borders for a premium feel.
- **🌊 Fluid Animations:** Powered by **Framer Motion**, elements feature staggered fade-ins, spring-physics hover effects, and smooth layout transitions.
- **🧩 Data-Driven Content:** All content (profiles, links, thoughts) is separated into a `siteConfig` file, making maintenance effortless.
- **📱 Fully Responsive:** Perfectly adapted for mobile, tablet, and desktop screens.

### 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |


---


