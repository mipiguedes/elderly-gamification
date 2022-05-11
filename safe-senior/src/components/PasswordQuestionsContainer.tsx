import { styled } from "@stitches/react";
import { Button } from "./Button";
import { QuestionSection } from "./QuestionSection";
import passwordQuestionsData from "../passwordQuestions.json";
import { AlertCard } from "./AlertCard";

type PasswordQuestionsContainerProps = {
  currentFeedback: number;
  currentQuestion: number;
  selectedOption: number;
  currentSection: string;
  questionResult: boolean;
  anwserOptions: any;
  handleSelectedOption: Function;
  handleButtonContinue: Function;
  buttonContinueText: string;
};

const ButtonContainer = styled("div", {
  margin: "1.5rem",
  display: "flex",
  justifyContent: "center",
});

export function PasswordQuestionsContainer({
  currentFeedback,
  currentQuestion,
  selectedOption,
  currentSection,
  questionResult,
  anwserOptions,
  handleSelectedOption,
  handleButtonContinue,
  buttonContinueText,
}: PasswordQuestionsContainerProps) {
  return (
    <>
      {currentSection === "question" && (
        <>
          <QuestionSection
            question={passwordQuestionsData[currentQuestion].question}
            image={`../src/img/${passwordQuestionsData[currentQuestion].image}`}
            imageAlt={passwordQuestionsData[currentQuestion].imageAlt}
            handleSelectedOption={handleSelectedOption}
            anwserOptions={anwserOptions}
            selectedOption={selectedOption}
          />
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
          backgroundColor={
            "linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);"
          }
          width={"100%"}
          onClick={handleButtonContinue}
          text={buttonContinueText}
        />
      </ButtonContainer>
    </>
  );
}
