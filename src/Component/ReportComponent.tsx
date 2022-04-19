import { useQuiz } from "react-quiz-wizard";
import { Chart } from "react-google-charts";

const ReportComponent: React.FC = () => {
  const { generateReport } = useQuiz();
  console.log(generateReport());

  const chartData = generateReport().chartData;
  const correctAnswer = chartData[0].value;
  const InCorrectAnswer = chartData[1].value;
  const UnAnswered = chartData[2].value;

  return (
    <>
      <Chart
        chartType="PieChart"
        data={[
          ["Correct Answer", "InCorrect Answer"],
          ["Correct", correctAnswer],
          ["InCorrect", InCorrectAnswer],
          ["UnAnswered", UnAnswered],
        ]}
        options={{ title: "Result" }}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  );
};

export default ReportComponent;
