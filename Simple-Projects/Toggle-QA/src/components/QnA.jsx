import { useState } from "react";
import questions from "../data";
import Questions from "./Questions";

function QnA() {
  //   const [ide, setIde] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default QnA;
