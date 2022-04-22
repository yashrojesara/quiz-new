import { useQuiz } from "react-quiz-wizard";
import { Chart } from "react-google-charts";
import { Card, CardContent, Typography } from "@mui/material";

const ReportComponent: React.FC = () => {
  const { generateReport } = useQuiz();

  const report = generateReport().questionAnswers;
  const chartData = generateReport().chartData;
  const correctAnswer = chartData[0].value;
  const InCorrectAnswer = chartData[1].value;
  const UnAnswered = chartData[2].value;

  return (
    <>
      <div data-testid="chart">
        <Chart
          chartType="PieChart"
          data={[
            ["Correct Answer", "InCorrect Answer"],
            ["Correct", correctAnswer],
            ["InCorrect", InCorrectAnswer],
            ["UnAnswered", UnAnswered],
          ]}
          options={{ title: "Result" }}
          style={{ display: "flex", placeContent: "center", height: "250px" }}
          legendToggle
        />
      </div>

      <div style={{ display: "flex", flexFlow: "wrap", padding: "0em 5em" }}>
        {report.map((ques, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 400, margin: 5, minWidth: 300 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold" }}
                  gutterBottom
                >
                  {ques.id}: {ques.question}
                </Typography>
                <Typography sx={{ fontSize: 16 }}>
                  Selected Answer:{" "}
                  {ques.status === "Wrong"
                    ? ques.selectedAnswer
                    : ques.correctAnswer}
                </Typography>
                <Typography sx={{ fontSize: 16 }}>
                  Correct Answer: {ques.correctAnswer}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: ques.status === "Wrong" ? "red" : "green",
                  }}
                >
                  Result:{" "}
                  {ques.selectedAnswer === "Unanswered"
                    ? "Unanswered"
                    : ques.status}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ReportComponent;
