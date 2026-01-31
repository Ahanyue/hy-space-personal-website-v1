"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  ArrowUpRight, 
  Github, 
  Mail, 
  Terminal, 
  Music,
  Pause, 
  Play, 
  Sparkles, 
  Heart, 
  PenTool, 
  MessageCircle, 
  Check 
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                1. 站点配置数据 (Data)                       */
/* -------------------------------------------------------------------------- */

const siteConfig = {
  profile: {
    name: "HuiYing",
    role: "AI Product Manager",
    // 这里的头像建议后续换成你自己的图片路径，例如 "/avatar.jpg"
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=HuiYing&backgroundColor=e5e5e5", 
    bio: "嘿👋！我是huiying，我希望能在理性逻辑与感性审美之间寻找平衡。目前专注于 AI 产品的定义与落地，想要用 Vibecoding 做一些有趣有意思的东西。",
  },
  location: {
    city: "深圳, CN",
    coordinates: "22.5431° N, 114.0579° E",
  },
  // 个人特质 (原 Tech Stack)
  capabilities: [
    { name: "Figma", icon: <PenTool size={18} /> },
    { name: "AI Product", icon: <Sparkles size={18} /> },
    { name: "Vibecoding", icon: <Terminal size={18} /> },
    { name: "INFJ", icon: <Heart size={18} /> },
    { name: "后摇", icon: <Music size={18} /> },
  ],
  // 碎碎念
  thoughts: [
    { id: 1, date: "Today", content: "设计不仅仅是外观，更是它是如何工作的。" },
    { id: 2, date: "Yesterday", content: "Tree-Ring 灰度测试中：真实的线下反馈比实验室模拟深刻得多。" },
    { id: 3, date: "Oct 24", content: "有时候容易找到用户验证的产品，虽然好验证，但竞争也是红海" },
    { id: 4, date: "Oct 20", content: "太开心了！第一个AI产品域名：tree-memory.com.cn" },
  ],
  // 文章
  writings: [
    {
      id: 1,
      title: "从 0 到 1 独立全栈开发：为什么我坚持亲自落地 AI 产品？",
      summary: "深度解析Tree Ring（无障碍回忆录助手）的架构设计、模型选型与 MVP 验证过程。",
      date: "2026-01-25",
    },
    {
      id: 2,
      title: "提示词工程：如何通过逻辑驾驭 AI 的不确定性？",
      summary: "基于冠军项目的实战总结，分享结构化 Prompt 的设计思路。",
      date: "2025-12-20",
    },
  ],
  // 社交链接 (isCopy: true 代表点击复制，false 代表跳转)
  socials: [
    { name: "WeChat", value: "lluttermoon", icon: <MessageCircle size={20} />, isCopy: true },
    { name: "Email", value: "384496557@qq.com", icon: <Mail size={20} />, isCopy: true },
    { name: "GitHub", value: "https://github.com/Ahanyue", icon: <Github size={20} />, isCopy: false },
  ],
  music: {
    title: "Hoppípolla",
    artist: "Sigur Rós",
  }
};

/* -------------------------------------------------------------------------- */
/*                            2. 基础组件与样式 (UI)                            */
/* -------------------------------------------------------------------------- */

/**
 * Card 组件
 * @param overflowVisible 如果为 true，则允许内容(如气泡)超出卡片边界显示
 */
const Card = ({ children, className, colSpan, rowSpan, noPadding = false, overflowVisible = false }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.01, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative rounded-3xl 
        bg-zinc-900/40 backdrop-blur-xl 
        border border-white/10 
        shadow-lg flex flex-col
        ${colSpan || "col-span-1"} 
        ${rowSpan || "row-span-1"} 
        ${className}
        ${noPadding ? "p-0" : "p-6"}
        ${overflowVisible ? "overflow-visible" : "overflow-hidden"}
      `}
    >
      {/* 噪点背景层 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               3. 功能卡片组件                               */
/* -------------------------------------------------------------------------- */

const IntroCard = () => (
  <Card colSpan="md:col-span-2" rowSpan="md:row-span-1" className="justify-center">
    <div className="flex items-center gap-6">
      <div className="relative shrink-0">
        <img src={siteConfig.profile.avatar} alt="Avatar" className="w-20 h-20 rounded-full border-2 border-white/20 shadow-xl" />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-zinc-900 animate-pulse" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">{siteConfig.profile.name}</h1>
        <p className="text-blue-400 font-medium mt-1">{siteConfig.profile.role}</p>
        <p className="text-zinc-400 text-sm mt-2 font-light leading-relaxed max-w-sm">
          {siteConfig.profile.bio}
        </p>
      </div>
    </div>
  </Card>
);

const ThoughtsCard = () => (
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-2">
    <div className="flex items-center gap-2 mb-4 text-zinc-100 font-medium">
      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
      <span>My Thoughts</span>
    </div>
    <div className="overflow-y-auto no-scrollbar flex-1 space-y-4 pr-2">
      {siteConfig.thoughts.map((item) => (
        <div key={item.id} className="group">
          <p className="text-xs text-zinc-500 mb-1 font-mono">{item.date}</p>
          <p className="text-sm text-zinc-300 group-hover:text-white transition-colors leading-snug">
            {item.content}
          </p>
          <div className="w-full h-[1px] bg-white/5 mt-3" />
        </div>
      ))}
    </div>
  </Card>
);

const CapabilitiesCard = () => (
  <Card colSpan="md:col-span-2" rowSpan="md:row-span-1" className="flex flex-col justify-center overflow-hidden">
    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-4">Capabilities & Vibes</p>
    <div className="relative w-full overflow-hidden">
      <motion.div 
        className="flex gap-4"
        animate={{ x: [0, -400] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {/* 重复两遍以实现无缝滚动 */}
        {[...siteConfig.capabilities, ...siteConfig.capabilities].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-zinc-300 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 whitespace-nowrap shadow-sm">
            <span className="text-blue-400">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </Card>
);

// 单个社交图标组件（包含复杂的交互逻辑）
const SocialIcon = ({ item }: { item: any }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (item.isCopy) {
      // 复制逻辑
      navigator.clipboard.writeText(item.value);
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
    } else {
      // 跳转逻辑
      window.open(item.value, "_blank");
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -55, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            // pointer-events-none 解决鼠标遮挡闪烁问题
            className="absolute pointer-events-none whitespace-nowrap px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-xs text-white z-[100] flex items-center gap-2 shadow-2xl"
          >
            {copied ? (
              <span className="flex items-center gap-1"><Check size={12} className="text-green-400" /> 已复制</span>
            ) : (
              item.value
            )}
            {/* 小三角 */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 border-r border-b border-white/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => item.isCopy && setShowTooltip(true)}
        onMouseLeave={() => !copied && setShowTooltip(false)}
        onClick={handleClick}
        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-inner"
      >
        {item.icon}
      </motion.button>
    </div>
  );
};

const SocialsCard = () => (
  // 必须开启 overflowVisible，否则气泡会被切掉
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" overflowVisible={true} className="flex items-center justify-center gap-4">
    {siteConfig.socials.map((social) => (
      <SocialIcon key={social.name} item={social} />
    ))}
  </Card>
);

const WritingsCard = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  return (
    <Card colSpan="md:col-span-2" rowSpan="md:row-span-2">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-xl font-semibold text-white">Latest Writings</h2>
        <span className="text-xs text-zinc-500 font-mono">Archive</span>
      </div>
      <div className="space-y-3">
        {siteConfig.writings.map((post) => (
          <motion.div 
            key={post.id} layout
            onClick={() => setActiveId(activeId === post.id ? null : post.id)}
            className={`p-4 rounded-2xl cursor-pointer transition-all border ${activeId === post.id ? "bg-white/10 border-white/20" : "bg-white/5 border-transparent hover:border-white/10"}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-zinc-200 pr-4">{post.title}</h3>
              <span className="text-xs text-zinc-500 font-mono mt-1 shrink-0">{post.date}</span>
            </div>
            <AnimatePresence>
              {activeId === post.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{post.summary}</p>
                  <div className="mt-3 flex items-center text-xs text-blue-400 font-medium">查看全文 <ArrowUpRight size={12} className="ml-1" /></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

const MapCard = () => (
  <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" noPadding className="relative group overflow-hidden">
    <div className="absolute inset-0 bg-zinc-800 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #555 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute opacity-75" />
        <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white relative z-10" />
      </div>
    </div>
    <div className="absolute bottom-4 left-4 z-20">
      <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Location</p>
      <p className="text-sm font-semibold text-white flex items-center gap-1"><MapPin size={12} /> {siteConfig.location.city}</p>
    </div>
  </Card>
);

const AestheticCard = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" noPadding className="relative flex flex-col justify-end p-5 group overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-40'}`} />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3">
           <div className="flex gap-1 items-end h-4">
             {[1,2,3,4].map(i => (
               <motion.div key={i} className="w-1 bg-white/60 rounded-t-sm" animate={isPlaying ? { height: [4, 16, 8, 14, 4] } : { height: 4 }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }} />
             ))}
           </div>
           <button onClick={() => setIsPlaying(!isPlaying)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white transition-colors">
             {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
           </button>
        </div>
        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Now Playing</p>
        <p className="text-sm font-semibold text-white mt-1 truncate">{siteConfig.music.title} - {siteConfig.music.artist}</p>
      </div>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*                               4. 主页面入口 (Layout)                        */
/* -------------------------------------------------------------------------- */

export default function BentoPortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 font-sans p-4 md:p-8 lg:p-12 flex items-center justify-center">
      <motion.div 
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
        initial="hidden" animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
      >
        <IntroCard />
        <MapCard />
        <SocialsCard />
        <CapabilitiesCard />
        <ThoughtsCard />
        <AestheticCard />
        <WritingsCard /> 
      </motion.div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}