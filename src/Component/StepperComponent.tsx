import { Stepper, useQuiz, saveQuestionAnswer } from "react-quiz-wizard";
import "react-quiz-wizard/dist/index.css";
import {
  Card,
  CardContent,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import StepperActions from "./StepperActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StepperComponent = (props: any) => {
  const { languageID } = props;
  const [value, setValue] = useState<number | number[]>(0);
  const navigate = useNavigate();

  const onFinish = () => {
    console.log("here");
    navigate("/report");
  };
  const { state, dispatch, getSavedAnswer } = useQuiz();

  const onNextClick = (index: number) => {
    dispatch(saveQuestionAnswer({ questionId: index + 1, answerId: value }));
  };

  return (
    <Card sx={{ width: 450, maxWidth: "100%" }}>
      <CardContent>
        <Stepper onFinish={onFinish}>
          {state?.questions?.map((ques: any, index: number) => {
            const savedAnswer = getSavedAnswer(index + 1);

            return (
              <div key={index}>
                <span style={{ margin: "2em 0em", display: "flex" }}>
                  {ques.questionInfo[languageID].title}
                </span>
                <FormControl key={index}>
                  <RadioGroup
                    defaultValue={savedAnswer}
                    onChange={(_, v) => setValue(+v)}
                  >
                    {ques.optionsInfo.map((opt: any, index: number) => {
                      return (
                        <FormControlLabel
                          key={index}
                          value={opt.id}
                          control={<Radio required />}
                          label={opt.languageInfo[languageID].title}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <StepperActions
                  index={index}
                  onNextClick={() => onNextClick(index)}
                  onFinish={() => onFinish()}
                  value={value}
                />
              </div>
            );
          })}
        </Stepper>
      </CardContent>
    </Card>
  );
};

export default StepperComponent;
