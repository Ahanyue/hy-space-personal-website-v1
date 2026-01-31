"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Mail, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  Music,
  Pause,
  Play
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                1. 配置数据 (Data)                           */
/* -------------------------------------------------------------------------- */

const siteConfig = {
  profile: {
    name: "HuiYing",
    role: "AI Product Make",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=e5e5e5", // 示例头像API
    bio: "我喜欢做有意思的东西，创造有意思的体验！",
  },
  location: {
    city: "深圳, CN",
    coordinates: "23.1291° N, 113.2644° E",
  },
  thoughts: [
    { id: 1, date: "Today", content: "设计不仅仅是外观，更是它是如何工作的。" },
    { id: 2, date: "Yesterday", content: "Tree-Ring 灰度测试中：真实的线下反馈比实验室模拟深刻得多。" },
    { id: 3, date: "Oct 24", content: "有时候容易找到用户验证的产品，虽然好验证，但竞争也是红海" },
    { id: 4, date: "Oct 20", content: "太开心了！第一个AI产品域名：tree-memory.com.cn" },
  ],
  stack: [
    { name: "React", icon: <Cpu size={18} /> },
    { name: "Next.js", icon: <Layers size={18} /> },
    { name: "TypeScript", icon: <Terminal size={18} /> },
    { name: "Tailwind", icon: <Zap size={18} /> },
    { name: "Framer", icon: <ArrowUpRight size={18} /> },
    { name: "Node.js", icon: <Cpu size={18} /> },
    { name: "Figma", icon: <Layers size={18} /> },
  ],
  writings: [
    {
      id: 1,
      title: "从 0 到 1 独立全栈开发：为什么我坚持亲自落地 AI 产品？",
      summary: "深度解析Tree Ring（无障碍回忆录助手）的架构设计、模型选型与 MVP 验证过程。",
      date: "2026-01-25",
    },
    {
      id: 2,
      title: "提示词工程（Prompt Engineering）：如何通过逻辑驾驭 AI 的不确定性？",
      summary: "基于冠军项目的实战总结，分享结构化 Prompt 的设计思路。",
      date: "2025-12-20",
    },
  ],
  socials: [
    { name: "Twitter", url: "#", icon: <Twitter size={20} /> },
    { name: "GitHub", url: "#", icon: <Github size={20} /> },
    { name: "Email", url: "mailto:hello@example.com", icon: <Mail size={20} /> },
  ],
  music: {
    title: "Hoppípolla",
    artist: "Sigur Rós",
  }
};

/* -------------------------------------------------------------------------- */
/*                            2. 基础组件与样式 (UI)                            */
/* -------------------------------------------------------------------------- */

// 玻璃拟态卡片容器
const Card = ({ children, className, colSpan, rowSpan, noPadding = false }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative overflow-hidden rounded-3xl 
        bg-zinc-900/40 backdrop-blur-xl 
        border border-white/10 
        shadow-lg flex flex-col
        ${colSpan || "col-span-1"} 
        ${rowSpan || "row-span-1"} 
        ${className}
        ${noPadding ? "p-0" : "p-6"}
      `}
    >
      {/* 噪点纹理层 (Noise Texture Overlay) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* 卡片内部辉光 (Inner Glow) */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               3. 功能卡片实现                               */
/* -------------------------------------------------------------------------- */

// Card 1: Intro (Profile)
const IntroCard = () => (
  <Card colSpan="md:col-span-2" rowSpan="md:row-span-1" className="justify-center">
    <div className="flex items-center gap-6">
      <div className="relative shrink-0">
        <img 
          src={siteConfig.profile.avatar} 
          alt="Avatar" 
          className="w-20 h-20 rounded-full border-2 border-white/20 shadow-xl"
        />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-zinc-900 animate-pulse" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">{siteConfig.profile.name}</h1>
        <p className="text-zinc-400 mt-1 flex items-center gap-2">
          {siteConfig.profile.role}
        </p>
        <p className="text-zinc-500 text-sm mt-2 font-light leading-relaxed max-w-xs">
          {siteConfig.profile.bio}
        </p>
      </div>
    </div>
  </Card>
);

// Card 2: Thoughts (Scrollable)
const ThoughtsCard = () => (
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-2" className="overflow-hidden">
    <div className="flex items-center gap-2 mb-4 text-zinc-100 font-medium">
      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
      <span>My Thoughts</span>
    </div>
    <div className="overflow-y-auto no-scrollbar mask-gradient flex-1 space-y-4 pr-2">
      {siteConfig.thoughts.map((item) => (
        <div key={item.id} className="group cursor-default">
          <p className="text-xs text-zinc-500 mb-1 font-mono">{item.date}</p>
          <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
            {item.content}
          </p>
          <div className="w-full h-[1px] bg-white/5 mt-3" />
        </div>
      ))}
    </div>
  </Card>
);

// Card 3: Map
const MapCard = () => (
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" noPadding className="relative group">
    {/* 抽象地图背景模拟 */}
    <div className="absolute inset-0 bg-zinc-800 opacity-50" 
         style={{ 
           backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', 
           backgroundSize: '20px 20px' 
         }} 
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute opacity-75" />
        <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
      </div>
    </div>
    <div className="absolute bottom-4 left-4 z-20">
      <p className="text-xs text-zinc-400 font-mono uppercase tracking-widest">Location</p>
      <p className="text-sm font-semibold text-white flex items-center gap-1">
        <MapPin size={12} /> {siteConfig.location.city}
      </p>
    </div>
  </Card>
);

// Card 4: Stack (Infinite Marquee)
const StackCard = () => (
  <Card colSpan="md:col-span-2" rowSpan="md:row-span-1" className="flex flex-col justify-center overflow-hidden">
    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-3">Tech Stack</p>
    <div className="relative w-full overflow-hidden mask-fade-sides">
      <motion.div 
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -500] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {/* 重复两遍以实现无缝滚动 */}
        {[...siteConfig.stack, ...siteConfig.stack].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            {tech.icon}
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </Card>
);

// Card 5: Writings (Expandable)
const WritingsCard = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <Card colSpan="md:col-span-2" rowSpan="md:row-span-2">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-xl font-semibold text-white">Latest Writings</h2>
        <span className="text-xs text-zinc-500 font-mono">Archive</span>
      </div>
      
      <div className="space-y-4">
        {siteConfig.writings.map((post) => (
          <motion.div 
            key={post.id}
            layout
            onClick={() => setActiveId(activeId === post.id ? null : post.id)}
            className={`p-4 rounded-xl cursor-pointer transition-colors border ${
              activeId === post.id 
                ? "bg-white/10 border-white/20" 
                : "bg-white/5 border-transparent hover:bg-white/10"
            }`}
          >
            <motion.div layout className="flex justify-between items-start">
              <h3 className="font-medium text-zinc-200">{post.title}</h3>
              <span className="text-xs text-zinc-500 font-mono mt-1">{post.date}</span>
            </motion.div>
            
            <AnimatePresence>
              {activeId === post.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {post.summary}
                  </p>
                  <div className="mt-3 flex items-center text-xs text-blue-400 font-medium">
                    Read more <ArrowUpRight size={12} className="ml-1" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

// Card 6: Socials
const SocialsCard = () => (
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" className="flex flex-col justify-center items-center gap-4">
    <div className="flex gap-4">
      {siteConfig.socials.map((social) => (
        <a 
          key={social.name} 
          href={social.url} 
          className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5"
        >
          {social.icon}
        </a>
      ))}
    </div>
  </Card>
);

// Card 7: Aesthetic (Music Player Vibe)
const AestheticCard = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" noPadding className="relative flex flex-col justify-end p-5 group overflow-hidden">
      {/* 动态渐变背景 */}
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-50'}`} />
      
      {/* 3D 形状动画 (CSS实现) */}
      <div className="absolute top-[-20%] right-[-20%] w-32 h-32 blur-2xl rounded-full bg-pink-500/30 animate-pulse" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-2">
           <div className="flex gap-1 items-end h-4">
             {[1,2,3,4].map(i => (
               <motion.div 
                 key={i}
                 className="w-1 bg-white/80 rounded-t-sm"
                 animate={isPlaying ? { height: [4, 16, 8, 14, 4] } : { height: 4 }}
                 transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
               />
             ))}
           </div>
           <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
           >
             {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
           </button>
        </div>
        <div>
          <p className="text-xs text-zinc-400 font-mono">Now Playing</p>
          <div className="marquee-container overflow-hidden whitespace-nowrap w-full">
             <p className="text-sm font-semibold text-white mt-1 truncate">
               {siteConfig.music.title} - {siteConfig.music.artist}
             </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*                               4. 主页面组件 (Layout)                        */
/* -------------------------------------------------------------------------- */

export default function BentoPortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-white/20 font-sans p-4 md:p-8 lg:p-12 flex items-center justify-center">
      
      <motion.div 
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // 交错动画核心
            },
          },
        }}
      >
        {/* Row 1 */}
        <IntroCard />
        <MapCard />
        <SocialsCard />

        {/* Row 2 */}
        <StackCard />
        <ThoughtsCard />
        <AestheticCard />
        
        {/* Row 3 (Writings takes remaining space usually, but adjusted for grid packing) */}
        {/* 为了更好的Bento视觉，我们把Writings放在最后作为大块，或者根据实际内容调整 */}
        <WritingsCard /> 
        
      </motion.div>

      {/* CSS 补充: 隐藏滚动条但保留功能 */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-gradient {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        .mask-fade-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}