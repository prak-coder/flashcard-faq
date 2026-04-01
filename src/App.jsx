import { useState } from "react";
const faq = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
  },
  {
    id: 2,
    question: "What is a component?",
    answer: "Reusable building block of a React application",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "A syntax extension that lets you write HTML inside JavaScript",
  },
  {
    id: 4,
    question: "What are props?",
    answer: "Inputs passed from parent to child components",
  },
  {
    id: 5,
    question: "What is state?",
    answer: "A built-in object used to store dynamic data in a component",
  },
  {
    id: 6,
    question: "What is useEffect?",
    answer: "A hook used to handle side effects in functional components",
  },
];
function App() {
  return (
    <div className="flex flex-row h-full">
      <FlashCards />
    </div>
  );
}

export default App;

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(selectedId !== id ? id : null);
  }
  return (
    <>
      {faq.map((faq) => (
        <p
          className={`h-30 w-50 ${selectedId !== faq.id ? "bg-amber-50" : "bg-red-300"}  rounded m-1`}
          onClick={() => handleClick(faq.id)}
          key={faq.id}
        >
          {selectedId !== faq.id ? faq.question : faq.answer}
        </p>
      ))}
    </>
  );
}
