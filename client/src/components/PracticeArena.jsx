import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Timer } from 'lucide-react';

const mockQuestions = [
  {
    id: 1,
    category: "Aptitude",
    question: "A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    options: ["120 metres", "180 metres", "324 metres", "150 metres"],
    correctIndex: 3,
    explanation: "Speed = 60 * (5/18) = 50/3 m/sec. Distance = Speed * Time = (50/3) * 9 = 150 metres."
  },
  {
    id: 2,
    category: "Core CS",
    question: "Which of the following condition is NOT required for a deadlock to occur?",
    options: ["Mutual Exclusion", "Hold and Wait", "Preemption allowed", "Circular Wait"],
    correctIndex: 2,
    explanation: "Deadlock requires NO preemption. If preemption is allowed, deadlock cannot occur."
  }
];

export default function PracticeArena() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQ = mockQuestions[currentIndex];

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIndex(prev => prev + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
  };

  if (currentIndex >= mockQuestions.length) {
    return (
      <div className="p-8 rounded-2xl bg-[#131B2A] border border-[#1E293B] text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Quiz Completed! 🎉</h3>
        <p className="text-slate-300 text-sm">Your final score: <span className="text-emerald-400 font-bold font-mono">{score} / {mockQuestions.length}</span></p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {currentQ.category} Arena
          </span>
          <h2 className="text-lg font-bold text-white mt-1">Daily Placement Practice Test</h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <Timer className="w-4 h-4 text-amber-400" /> Question {currentIndex + 1} of {mockQuestions.length}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#131B2A] border border-[#1E293B] space-y-5">
        <p className="text-base text-slate-100 font-medium">{currentQ.question}</p>

        <div className="space-y-2.5">
          {currentQ.options.map((opt, idx) => {
            let btnStyle = "bg-[#0B0F17] border-[#1E293B] text-slate-300 hover:border-slate-600";
            if (isAnswered) {
              if (idx === currentQ.correctIndex) {
                btnStyle = "bg-emerald-500/10 border-emerald-500/40 text-emerald-300";
              } else if (idx === selectedOption) {
                btnStyle = "bg-rose-500/10 border-rose-500/40 text-rose-300";
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs font-medium transition flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt}</span>
                {isAnswered && idx === currentQ.correctIndex && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && <XCircle className="w-4 h-4 text-rose-400" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="p-4 rounded-xl bg-[#0B0F17] border border-slate-800 space-y-2">
            <p className="text-xs font-semibold text-slate-200">Solution & Logic:</p>
            <p className="text-xs text-slate-400">{currentQ.explanation}</p>
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
              >
                Next Question <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}