"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, Bot, User, Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
interface Message {
  role: "user" | "assistant";
  content: string;
}

const messageVariants: Variants = {
  hidden: (m: Message) => ({ 
    opacity: 0, 
    x: m.role === "user" ? 20 : -20 
  }),
  show: { opacity: 1, x: 0 }
};

export function AIAdvisor() {
  const { dict } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const advisor = dict.ai_advisor || {};

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // API call placeholder for Phase 6
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages: [...messages, userMessage] }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Lo siento, hubo un error técnico. Por favor intenta de nuevo. (I'm sorry, there was a technical error. Please try again.)" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    advisor.suggestion_1,
    advisor.suggestion_2,
    advisor.suggestion_3
  ];

  return (
    <div className="flex flex-col h-[600px] w-full max-w-4xl mx-auto glass-panel rounded-[40px] border border-white/20 shadow-2xl overflow-hidden relative">
      
      {/* Header */}
      <div className="p-8 border-b border-white/10 flex items-center justify-between bg-mex-black/30 backdrop-blur-3xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-terracotta flex items-center justify-center text-white shadow-lg ring-4 ring-terracotta/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-black text-white">{advisor.title}</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-turquoise">{advisor.subtitle}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-turquoise/10 border border-turquoise/20 text-turquoise text-[10px] font-black uppercase tracking-widest italic">
          <Sparkles className="w-4 h-4" />
          Live Intelligence
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] opacity-95"
      >
        <AnimatePresence>
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 py-10"
            >
              <div className="text-center space-y-4">
                <p className="text-slate-400 font-medium italic">
                  &quot;Bienvenido. I am your strategic relocation scout. How can I help you navigate your move?&quot;
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(s)}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 text-left hover:bg-white/10 hover:border-terracotta transition-all group"
                  >
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-sm font-bold text-slate-300 group-hover:text-white">{s}</span>
                      <ArrowRight className="w-4 h-4 text-terracotta opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {messages.map((m, i) => (
            <motion.div
              key={i}
              custom={m}
              variants={messageVariants}
              initial="hidden"
              animate="show"
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] flex gap-4 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg ${
                  m.role === "user" ? "bg-turquoise text-mex-black" : "bg-mex-black border border-white/10 text-terracotta"
                }`}>
                  {m.role === "user" ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                </div>
                <div className={`p-6 rounded-[32px] text-sm leading-relaxed ${
                  m.role === "user" 
                    ? "bg-turquoise text-mex-black font-bold rounded-tr-none" 
                    : "bg-white/5 border border-white/10 text-slate-200 font-medium rounded-tl-none"
                }`}>
                  {m.content}
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-mex-black border border-white/10 text-terracotta flex items-center justify-center">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 p-6 rounded-[32px] bg-white/5 border border-white/10 rounded-tl-none">
                  <div className="w-2 h-2 rounded-full bg-terracotta animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-terracotta animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-terracotta animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <form 
        onSubmit={handleSubmit}
        className="p-8 bg-mex-black/30 backdrop-blur-3xl border-t border-white/10"
      >
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={advisor.placeholder}
            className="w-full pl-8 pr-20 py-6 rounded-3xl bg-mex-black border border-white/10 text-white focus:outline-none focus:border-terracotta transition-all placeholder:text-slate-600 font-bold italic"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-terracotta text-white hover:bg-terracotta/80 disabled:opacity-50 disabled:grayscale transition-all shadow-xl"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-600 font-black uppercase tracking-widest">
           <MessageSquare className="w-3 h-3" />
           {advisor.cta} • Powered by Enter Mexico Intelligence
        </div>
      </form>
    </div>
  );
}
