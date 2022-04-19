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
  const { state, dispatch, getSavedAnswer } = useQuiz();

  const [value, setValue] = useState<number | number[]>(0);
  const [checkBoxValues, setCheckBoxValues] = useState<Array<number>>([]);
  const navigate = useNavigate();

  const onFinish = () => {
    navigate("/report");
  };

  const onNextClick = (index: number) => {
    dispatch(
      saveQuestionAnswer({
        questionId: index + 1,
        answerId: index !== 3 ? value : checkBoxValues,
      })
    );
    setValue(0);
  };

  const handleChange = (answerId: number) => {
    if (checkBoxValues.includes(answerId)) {
      const filtered = checkBoxValues.filter((v) => v !== answerId);
      filtered.sort();
      setCheckBoxValues(filtered);
    } else {
      setCheckBoxValues((prev) => [...prev, answerId].sort());
    }
  };

  return (
    <Card sx={{ width: 450, maxWidth: "100%" }}>
      <CardContent>
        <Stepper onFinish={onFinish}>
          {state?.questions?.map((ques: Question, index: number) => {
            const savedAnswer = getSavedAnswer(index + 1);

            return (
              <div key={index}>
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
                  <FormControl
                    key={index}
                    component="fieldset"
                    variant="standard"
                  >
                    <FormLabel component="legend">
                      {ques.questionInfo[languageID].title}
                    </FormLabel>
                    <FormGroup>
                      {ques.optionsInfo.map((o) => (
                        <FormControlLabel
                          key={o.id}
                          control={
                            <Checkbox
                              checked={checkBoxValues.includes(o.id)}
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
                  testValue={checkBoxValues}
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
