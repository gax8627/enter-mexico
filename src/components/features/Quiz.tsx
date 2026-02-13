"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export function Quiz() {
  const router = useRouter();
  const { lang, dict } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculated, setIsCalculated] = useState(false);

  const questions = dict.quiz.questions;

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    setIsCalculated(true);
    let match = "mexicali";

    if (answers.motivation === "medical" || answers.budget === "low") {
      match = "mexicali";
    } else if (answers.vibe === "beach") {
      match = answers.budget === "mid" ? "rosarito" : "ensenada";
    } else if (answers.vibe === "colonial" || answers.budget === "high") {
      match = "san-miguel";
    }

    setTimeout(() => {
      router.push(`/city/${match}`);
    }, 2000);
  };

  if (isCalculated) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-white min-h-[400px]">
        <div className="w-20 h-20 border-4 border-terracotta border-t-transparent rounded-full animate-spin mb-8 shadow-[0_0_30px_rgba(226,114,91,0.3)]" />
        <h2 className="text-3xl font-serif font-black mb-2">{dict.quiz.loading}</h2>
        <p className="text-slate-400 text-lg uppercase tracking-widest">{dict.quiz.loading_sub}</p>
      </div>
    );
  }

  const question = questions[currentStep];

  return (
    <div className="w-full max-w-3xl mx-auto glass-panel p-8 md:p-16 rounded-[40px] relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
      
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-terracotta via-sun-yellow to-turquoise opacity-50" />
      
      {/* Progress */}
      <div className="absolute top-2 left-0 w-full h-1 bg-white/5">
        <motion.div
          className="h-full bg-terracotta"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="text-terracotta text-sm font-black tracking-[0.3em] uppercase">
              {dict.quiz.step_label} {currentStep + 1} {dict.quiz.of} {questions.length}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
              {question.question}
            </h2>
          </div>

          <div className="grid gap-5">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(option.value)}
                className={`group flex items-center justify-between p-7 rounded-2xl text-left transition-all duration-300 border-2 ${
                  answers[question.id] === option.value
                    ? "bg-terracotta text-white border-terracotta shadow-[0_10px_20px_rgba(226,114,91,0.3)]"
                    : "bg-white/5 text-slate-200 border-white/10 hover:border-turquoise/50 hover:bg-white/10"
                }`}
              >
                <span className="font-bold text-xl">{option.label}</span>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  answers[question.id] === option.value
                    ? "bg-white border-white text-terracotta"
                    : "border-white/20 group-hover:border-turquoise"
                }`}>
                  {answers[question.id] === option.value && <Check className="w-5 h-5" />}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/5">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs transition-all ${
                currentStep === 0 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-white"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-turquoise" />
              {dict.quiz.back}
            </button>
            
            <button
              onClick={handleNext}
              disabled={!answers[question.id]}
              className="px-10 py-4 bg-white text-mex-black font-black uppercase tracking-widest text-sm rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-turquoise transition-all flex items-center gap-3 shadow-xl shadow-turquoise/20"
            >
              {currentStep === questions.length - 1 ? dict.quiz.find_match : dict.quiz.next}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
