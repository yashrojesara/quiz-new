import { useQuiz } from "react-quiz-wizard";

const ReportComponent: React.FC = () => {
  const { generateReport } = useQuiz();
  console.log(generateReport());
  return <></>;
};

export default ReportComponent;
