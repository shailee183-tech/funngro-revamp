import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ items }) {
  // Allow toggling open/close, default first item open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-q-${index}`;
        const answerId = `faq-a-${index}`;

        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <h3>
              <button
                type="button"
                id={questionId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="faq-question-btn"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon-wrapper" aria-hidden="true">
                  <ChevronDown size={18} />
                </span>
              </button>
            </h3>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className="faq-answer-wrapper"
              style={{
                display: isOpen || !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ? undefined : (isOpen ? 'block' : 'none')
              }}
            >
              <div className="faq-answer-text">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
