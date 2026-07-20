import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface QABlockProps {
  question: string;
  answer: string;
  bullets?: string[];
  numberedItems?: string[];
  children?: ReactNode;
  defaultOpen?: boolean;
}

export function QABlock({ question, answer, bullets, numberedItems, children, defaultOpen = false }: QABlockProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-neutral-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-base md:text-lg font-heading font-bold text-neutral-900 pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-primary-600 flex-shrink-0 mt-1 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`px-5 border-t border-neutral-100 overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[10000px] pb-5 pt-0 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0 border-t-0'
        }`}
        aria-hidden={!isOpen}
      >
        <p className="text-neutral-700 leading-relaxed pt-4 mb-4">
          {answer}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="list-none space-y-2 text-neutral-700 mb-4">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {numberedItems && numberedItems.length > 0 && (
          <ol className="list-none space-y-2 text-neutral-700 mb-4">
            {numberedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        )}
        {children}
      </div>
    </div>
  );
}
