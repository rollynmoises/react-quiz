import Options from "./components/Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
