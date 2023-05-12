import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';


const faqData = [
  {
    id: 1,
    bootcamp: 'Python Developer Bootcamp',
    questions: [
      {
        id: 1,
        question: 'What are the prerequisites for this bootcamp?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        question: 'Is this bootcamp suitable for beginners?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    id: 2,
    bootcamp: 'React JS Bootcamp',
    questions: [
      {
        id: 1,
        question: 'What are the prerequisites for this bootcamp?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        question: 'Do I need prior programming knowledge for this bootcamp?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  {
    id: 2,
    bootcamp: 'React JS Bootcamp',
    questions: [
      {
        id: 1,
        question: 'What are the prerequisites for this bootcamp?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        question: 'Do I need prior programming knowledge for this bootcamp?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },
  // Add more bootcamps and their questions/answers if needed
];

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };

  return (
    <div className="container my-5 p-5 bg-light">
      <h2>FAQ</h2>
      {faqData.map((item) => (
        <div className="mb-4" key={item.id}>
          <h4>{item.bootcamp}</h4>
          {item.questions.map((question) => (
            <div className="accordion" id={`accordion-${item.id}-${question.id}`} key={question.id}>
              <div className={`card ${activeQuestion === question.id ? 'active' : ''}`}>
                <div
                  className="card-header"
                  id={`heading-${item.id}-${question.id}`}
                  onClick={() => toggleQuestion(question.id)}
                >
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse-${item.id}-${question.id}`} aria-expanded="true" aria-controls={`collapse-${item.id}-${question.id}`}>
                      {question.question}
                    </button>
                  </h5>
                </div>

                <div
                  id={`collapse-${item.id}-${question.id}`}
                  className={`collapse ${activeQuestion === question.id ? 'show' : ''}`}
                  aria-labelledby={`heading-${item.id}-${question.id}`}
                  data-parent={`#accordion-${item.id}-${question.id}`}
                >
                  <div className="card-body">{question.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
