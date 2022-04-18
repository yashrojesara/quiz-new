import { CardActions, Button } from "@mui/material";
import { useStepper } from "react-quiz-stepper";

const StepperActions = (props: any) => {
  const { handleBack, handleNext, isLastStep } = useStepper();

  return (
    <CardActions>
      {props.index !== 0 && (
        <Button
          onClick={() => {
            handleBack();
          }}
          variant="contained"
        >
          Back
        </Button>
      )}
      <Button
        onClick={() => {
          if (props.value) {
            handleNext();
            isLastStep ? props.onFinish() : props.onNextClick();
          } else {
            alert("Please select answer");
          }
        }}
        variant="contained"
      >
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </CardActions>
  );
};

export default StepperActions;
