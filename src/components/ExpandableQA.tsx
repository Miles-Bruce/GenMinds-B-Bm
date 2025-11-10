import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Question {
  q: string;
  a: string;
}

interface ExpandableQAProps {
  labelCollapsed: string;
  labelExpanded: string;
  intro: string;
  questions: Question[];
  initialVisible?: number;
}

const ExpandableQA = ({ 
  labelCollapsed, 
  labelExpanded, 
  intro, 
  questions,
  initialVisible = 3 
}: ExpandableQAProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleQuestion = (index: number) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenQuestions(newOpen);
  };

  const visibleQuestions = showAll ? questions : questions.slice(0, initialVisible);

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors"
        >
          {isExpanded ? labelExpanded : labelCollapsed}
          {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>

        {isExpanded && (
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 animate-fade-in">
            <p className="text-muted-foreground text-center mb-6">{intro}</p>
            
            <div className="space-y-4">
              {visibleQuestions.map((item, index) => (
                <div
                  key={index}
                  className="border border-border/20 rounded-xl overflow-hidden bg-card/20 hover:bg-card/40 transition-all"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-foreground">{item.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openQuestions.has(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openQuestions.has(index) && (
                    <div className="px-4 pb-4 text-muted-foreground animate-accordion-down">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {questions.length > initialVisible && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="mt-6 w-full text-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Show more questions
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpandableQA;
