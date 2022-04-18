import { useLocation } from "react-router-dom";
import StepperComponent from "./StepperComponent";

const QuizComponent: React.FC = () => {
  const { state } = useLocation();
  const data = state as any;

  const selectedLanguage = data?.selectedLanguage
    ? data.selectedLanguage
    : "English";
  const name = data?.name ? data.name : "";
  const gender = data?.gender ? data.gender : "";

  const languageID = selectedLanguage === "English" ? 0 : 1;

  return (
    <div className="main">
      <div className="identity">
        Welcome {name}-{gender}
      </div>
      <br />
      <div className="identity">
        Your preferred language is {selectedLanguage}
      </div>
      <br />
      <br />
      <StepperComponent languageID={languageID} />
    </div>
  );
};

export default QuizComponent;
