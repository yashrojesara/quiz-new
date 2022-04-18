import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const GenderArray = ["Male", "Female"];
  const [gender, setGender] = useState<string>(GenderArray[0]);
  const LanguageArray = ["English", "French"];
  const [selectedLanguage, setSelectedLanguage] = useState(LanguageArray[0]);

  const onButtonClick = () => {
    const data = {
      name,
      selectedLanguage,
      gender,
    };

    navigate("/quiz", { state: data });
  };

  return (
    <div className="form">
      <Card>
        <CardContent sx={{ minWidth: 250 }}>
          <TextField
            inputProps={{ "data-testid": "name-search-input" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Enter Your Name"
            fullWidth
          />

          <div data-testid="gender" className={"margin"}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                value={gender}
                onChange={(x) => setGender(x.target.value)}
              >
                {GenderArray.map((x) => {
                  return (
                    <FormControlLabel
                      key={x}
                      value={x}
                      control={<Radio />}
                      label={x}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>

          <div data-testid="language" className={"margin"}>
            <FormControl>
              <FormLabel>Language</FormLabel>
              <RadioGroup
                value={selectedLanguage}
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                }}
              >
                {LanguageArray.map((x) => {
                  return (
                    <FormControlLabel
                      key={x}
                      value={x}
                      control={<Radio />}
                      label={x}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>

          <div className={"margin"}>
            <Button
              data-testid="next"
              onClick={onButtonClick}
              variant="contained"
              color="primary"
              disabled={name ? false : true}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
