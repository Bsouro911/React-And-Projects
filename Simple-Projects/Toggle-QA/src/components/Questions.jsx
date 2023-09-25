import SingleQnA from "./SingleQnA";

function Questions({ questions, activeId, toggleQuestion }) {
  return (
    <section className="container">
      <h2>Toggle Questions and Answers</h2>
      {questions.map((ques) => {
        return (
          <SingleQnA
            key={ques.id}
            {...ques}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}

export default Questions;
