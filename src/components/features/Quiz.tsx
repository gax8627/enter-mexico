"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the Questions based on quiz_logic.md
const questions = [
  {
    id: "motivation",
    question: "What is your primary motivation for moving?",
    options: [
      { id: "savings", label: "Slash my expenses (Need < $1,500/mo)", value: "affordability" },
      { id: "lifestyle", label: "Upgrade my lifestyle (Beach/Luxury)", value: "lifestyle" },
      { id: "medical", label: "Medical/Dental care access", value: "medical" },
    ],
  },
  {
    id: "budget",
    question: "What is your monthly all-in budget?",
    options: [
      { id: "low", label: "Under $1,500", value: "low" },
      { id: "mid", label: "$1,500 - $3,000", value: "mid" },
      { id: "high", label: "$3,000+", value: "high" },
    ],
  },
  {
    id: "vibe",
    question: "Pick your ideal daily scenery:",
    options: [
      { id: "desert", label: "Desert Sun & City Conveniences", value: "urban" },
      { id: "beach", label: "Ocean Breeze & Sunsets", value: "beach" },
      { id: "colonial", label: "Historic Streets & Culture", value: "colonial" },
    ],
  },
  {
    id: "housing_mx",
    question: "What is your plan for Mexico?",
    options: [
      { id: "rent", label: "Rent first (Test the waters)", value: "rent" },
      { id: "buy", label: "Buy immediately (Investment)", value: "buy" },
    ],
  },
  {
    id: "housing_us",
    question: "What about your current home?",
    options: [
      { id: "renter", label: "I rent currently", value: "rent" },
      { id: "owner_keep", label: "I own and will keep it", value: "keep" },
      { id: "owner_sell", label: "I own and plan to SELL", value: "sell" },
    ],
  },
];

export function Quiz() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculated, setIsCalculated] = useState(false);

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
    // Simple Logic from quiz_logic.md
    // Medical OR Low Budget -> Mexicali
    // Beach -> Rosarito/Ensenada
    // Colonial OR High Budget -> San Miguel

    let match = "mexicali"; // Default

    if (answers.motivation === "medical" || answers.budget === "low") {
      match = "mexicali";
    } else if (answers.vibe === "beach") {
      // Tie breaker for beach
      match = answers.budget === "mid" ? "rosarito" : "ensenada";
    } else if (answers.vibe === "colonial" || answers.budget === "high") {
      match = "san-miguel";
    }

    // Simulate "Processing" then Redirect
    setTimeout(() => {
      router.push(`/city/${match}`);
    }, 1500);
  };

  if (isCalculated) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-white">
        <div className="w-16 h-16 border-4 border-sand-500 border-t-transparent rounded-full animate-spin mb-6" />
        <h2 className="text-2xl font-serif">Analyzing your responses...</h2>
        <p className="text-slate-400">Finding your perfect Mexican city.</p>
      </div>
    );
  }

  const question = questions[currentStep];

  return (
    <div className="w-full max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-white/10">
        <motion.div
          className="h-full bg-sand-500"
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
          transition={{ duration: 0.3 }}
          className="space-y-8 mt-6"
        >
          <div className="space-y-2">
            <span className="text-sand-400 text-sm font-bold tracking-wider uppercase">
              Question {currentStep + 1} of {questions.length}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {question.question}
            </h2>
          </div>

          <div className="grid gap-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.value)}
                className={`group flex items-center justify-between p-6 rounded-xl text-left transition-all duration-200 border ${
                  answers[question.id] === option.value
                    ? "bg-sand-500 text-ocean-900 border-sand-500"
                    : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:border-sand-500/50"
                }`}
              >
                <span className="font-medium text-lg">{option.label}</span>
                {answers[question.id] === option.value && (
                  <Check className="w-6 h-6" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 text-slate-400 hover:text-white transition-colors ${
                currentStep === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!answers[question.id]}
              className="px-8 py-3 bg-white text-ocean-900 font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              {currentStep === questions.length - 1 ? "Find Match" : "Next"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
