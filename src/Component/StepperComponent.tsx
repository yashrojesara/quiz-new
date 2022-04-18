import {
  Stepper,
  useQuiz,
  saveQuestionAnswer,
  Question,
  QuestionType,
} from "react-quiz-wizard";
import "react-quiz-wizard/dist/index.css";
import {
  Card,
  CardContent,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import StepperActions from "./StepperActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StepperComponent = (props: any) => {
  const { languageID } = props;
  const [value, setValue] = useState<number | number[]>(0);
  const [testValue, setTestValue] = useState<Array<number>>([]);
  const navigate = useNavigate();

  const onFinish = () => {
    navigate("/report");
  };
  const { state, dispatch, getSavedAnswer } = useQuiz();

  const onNextClick = (index: number) => {
    dispatch(
      saveQuestionAnswer({
        questionId: index + 1,
        answerId: index !== 3 ? value : testValue,
      })
    );
    setValue(0);
  };

  const handleChange = (answerId: number) => {
    if (testValue.includes(answerId)) {
      const filtered = testValue.filter((v) => v !== answerId);
      filtered.sort();
      setTestValue(filtered);
    } else {
      setTestValue((prev) => [...prev, answerId].sort());
    }
  };

  return (
    <Card sx={{ width: 450, maxWidth: "100%" }}>
      <CardContent>
        <Stepper onFinish={onFinish}>
          {state?.questions?.map((ques: Question, index: number) => {
            const savedAnswer = getSavedAnswer(index + 1);

            return (
              <>
                {ques.type === QuestionType.Single ? (
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
                  </div>
                ) : (
                  <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">
                      {ques.questionInfo[languageID].title}
                    </FormLabel>
                    <FormGroup>
                      {ques.optionsInfo.map((o) => (
                        <FormControlLabel
                          key={o.id}
                          control={
                            <Checkbox
                              checked={testValue.includes(o.id)}
                              onChange={() => handleChange(o.id)}
                              name={o.languageInfo[languageID].title}
                            />
                          }
                          label={o.languageInfo[languageID].title}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                )}
                <StepperActions
                  index={index}
                  onNextClick={() => onNextClick(index)}
                  value={value}
                  testValue={testValue}
                />
              </>
            );
          })}
        </Stepper>
      </CardContent>
    </Card>
  );
};

export default StepperComponent;
