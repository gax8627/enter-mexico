import { Quiz } from "@/components/features/Quiz";

export default function QuizPage() {
  return (
    <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
          Find Your <span className="text-gradient-gold">Perfect City</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Take the 60-second assessment to discover your strategic base in Mexico.
        </p>
      </div>
      
      <Quiz />
    </div>
  );
}
