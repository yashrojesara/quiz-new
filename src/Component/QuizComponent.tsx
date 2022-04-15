import { useLocation } from "react-router-dom";

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
      <div
        data-testid="identity"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Hello {name}-{gender}
      </div>
      <div data-testid="quiz" className={"main"}></div>
    </div>
  );
};

export default QuizComponent;
