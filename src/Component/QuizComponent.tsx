import { useLocation } from "react-router-dom";
import StepperComponent from "./StepperComponent";

const QuizComponent: React.FC = () => {
  const { state } = useLocation();
  const data = state as any;

  let selectedLanguage = "English";
  let name = "";
  let gender = "";
  if (data) {
    selectedLanguage = data.selectedLanguage;
    name = data.name;
    gender = data.gender;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        Hello {name}-{gender}
      </div>
      <br />
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        Your preferred language is {selectedLanguage}
      </div>

      <div data-testid="quiz" className={"main"}>
        <StepperComponent />
      </div>
    </div>
  );
};

export default QuizComponent;
