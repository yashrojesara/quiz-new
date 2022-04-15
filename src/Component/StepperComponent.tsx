import { Stepper, useQuiz } from "react-quiz-stepper";
import "react-quiz-stepper/dist/index.css";

const StepperComponent: React.FC = () => {
  const { state } = useQuiz();
  const test = () => {};
  console.log(state);

  return (
    <Stepper onFinish={test}>
      {state.questions.map((ques) => {
        return <div></div>;
      })}
    </Stepper>
  );
};

export default StepperComponent;
