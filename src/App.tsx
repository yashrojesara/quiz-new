import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizComponent from "./Component/QuizComponent";
import Registration from "./Component/Registration";
import ReportComponent from "./Component/ReportComponent";
import { QuizProvider } from "react-quiz-wizard";
import { questions } from "./Component/constants";
import "./App.css";
import "react-quiz-wizard/dist/index.css";

function App() {
  return (
    <QuizProvider questions={questions}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Quiz" element={<QuizComponent />} />
          <Route path="/Report" element={<ReportComponent />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
