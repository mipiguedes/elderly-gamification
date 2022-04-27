import { styled } from "@stitches/react";
import { useState } from "react";
import { Button } from "./Button";
import { QuestionCard } from "./QuestionCard";
import passwordQuestionsData from "../passwordQuestions.json";
import { AlertCard } from "./AlertCard";

const GroupOptionCard = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Option = styled("button", {
  fontSize: "1.125rem",
  fontWeight: 500,
  color: "#13274A",
  lineHeight: 1.3,
  margin: "0.5rem 1.5rem",
  padding: "0.65rem",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  minHeight: "53px",
  overflowY: "auto",
  maxHeight: "200px",
  cursor: "pointer",
  transition: "all .0.4s",
  "&:hover": {
    backgroundColor: "#ECECEC",
    border: "3px solid #13274A",
  },
  variants: {
    type: {
      active: {
        backgroundColor: "#ECECEC",
        border: "3px solid #13274A",
      },
    },
  },
});

const ButtonContainer = styled("div", {
  margin: "1.5rem",
  display: "flex",
  justifyContent: "center",
});

export function PasswordQuestionsContainer() {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentSection, setCurrentSection] = useState("question");

  const [selectedOption, setSelectedOption] = useState(0);

  const [questionResult, setQuestionResult] = useState(true);

  const anwserOptions = passwordQuestionsData[currentQuestion].answerOptions;

  const handleSelectedOption = (option): any => {
    setSelectedOption(option);
  };

  const handleQuestion = () => {
    setCurrentSection("question");

    const nextFeedback = currentFeedback + 1;

    if (nextFeedback < passwordQuestionsData.length) {
      setCurrentFeedback(nextFeedback);
    }
  };

  const handleFeedback = () => {
    isOptionCorrect();

    setCurrentSection("feedback");

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < passwordQuestionsData.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const isOptionCorrect = () => {
    const currentOption =
      passwordQuestionsData[currentQuestion].answerOptions[selectedOption]
        .isCorrect;

    if (currentOption === true) {
      setQuestionResult(true);
    } else {
      setQuestionResult(false);
    }
  };

  return (
    <>
      {currentSection === "question" && (
        <>
          <QuestionCard
            question={passwordQuestionsData[currentQuestion].question}
            image={`../src/img/${passwordQuestionsData[currentQuestion].image}`}
            imageAlt={passwordQuestionsData[currentQuestion].imageAlt}
          />

          <GroupOptionCard role="radio">
            {anwserOptions.map((anwser, index) => (
              <Option
                type={selectedOption === index ? "active" : ""}
                onClick={() => handleSelectedOption(index)}
                role="radio"
                aria-checked={selectedOption === index ? "true" : "false"}
              >
                {anwser.answerText}
              </Option>
            ))}
          </GroupOptionCard>
        </>
      )}

      {currentSection === "feedback" && (
        <AlertCard
          image={`../src/img/${
            questionResult === true
              ? passwordQuestionsData[currentFeedback].feedbacks
                  ?.imageFeedbackRight
              : passwordQuestionsData[currentFeedback].feedbacks
                  .imageFeedbackWrong
          }`}
          imageAlt={passwordQuestionsData[currentQuestion].imageAlt}
          text={
            questionResult === true
              ? passwordQuestionsData[currentFeedback].feedbacks?.feedbackRight
              : passwordQuestionsData[currentFeedback].feedbacks?.feedbackWrong
          }
        />
      )}

      <ButtonContainer>
        <Button
          onClick={
            currentSection === "feedback"
              ? () => handleQuestion()
              : () => handleFeedback()
          }
          text={"Continuar"}
        />
      </ButtonContainer>
    </>
  );
}
