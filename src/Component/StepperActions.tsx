import { CardActions, Button } from "@mui/material";
import { useStepper } from "react-quiz-wizard";

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
          if (props.value || props.testValue.length !== 0) {
            props.onNextClick();
          }
          handleNext();
        }}
        variant="contained"
        data-testid="next"
      >
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </CardActions>
  );
};

export default StepperActions;
