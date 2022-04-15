import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizComponent from "./Component/QuizComponent";
import Registration from "./Component/Registration";
import "./App.css";
import { QuizProvider } from "react-quiz-stepper";
import { questions } from "./Component/constants";
import "react-quiz-stepper/dist/index.css";

function App() {
  return (
    <QuizProvider questions={questions}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Quiz" element={<QuizComponent />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
