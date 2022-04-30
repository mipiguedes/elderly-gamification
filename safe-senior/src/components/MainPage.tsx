import { useState } from "react";
import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { HeadingOne } from "./HeadingOne";
import { ProgressBar } from "./ProgressBar";
import { ContentSection } from "./ContentSection";
import { AlertCard } from "./AlertCard";
import { ReturnButton } from "./ReturnButton";
import { PasswordQuestionsContainer } from "./PasswordQuestionsContainer";
import passwordQuestionsData from "../passwordQuestions.json";
import passwordContent from "../passwordContent.json";
import arrowRight from "../img/arrow-right.png";
import arrowLeft from "../img/arrow-left.png";

const Main = styled("div", {
  backgroundColor: "#060D18",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const HeaderMobileStyle = styled("header", {
  backgroundColor: "#13274A",
  padding: "0.5rem 2rem",
  height: "fit-content",
  minHeight: "100px",
  borderRadius: "0 0 40px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Menus = styled("div", {
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
});

export function MainPage() {
  //Sections States

  const [contentSection, setContentSection] = useState(false);

  const [questionSection, setQuestionSection] = useState(true);

  const [intermediarySection, setIntermediarySection] = useState(false);

  const [currentSection, setCurrentSection] = useState("question");

  //Current Sections States

  const [progressBarValue, setProgressBarValue] = useState(0);

  const [currentContent, setCurrentContent] = useState(0);

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedOption, setSelectedOption] = useState(0);

  const [questionResult, setQuestionResult] = useState(true);

  const handleSelectedOption = (option): any => {
    setSelectedOption(option);
  };

  const handleQuestion = () => {
    setCurrentSection("question");

    const nextFeedback = currentFeedback + 1;

    if (nextFeedback < passwordQuestionsData.length) {
      setCurrentFeedback(nextFeedback);
    }

    SumProgressBarValue();
  };

  const handleFeedback = () => {
    isOptionCorrect();

    setCurrentSection("feedback");

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < passwordQuestionsData.length) {
      setCurrentQuestion(nextQuestion);
    }

    SumProgressBarValue();
  };

  const isOptionCorrect = () => {
    const currentOption =
      passwordQuestionsData[currentQuestion].answerOptions[selectedOption]
        .isCorrect;

    setQuestionResult(currentOption);
  };

  const handleButtonNext = () => {
    const nextContent = currentContent + 1;

    if (nextContent === passwordContent.length) {
      setIntermediarySection(true);
      setContentSection(false);
    }

    setCurrentContent(nextContent);
    SumProgressBarValue();
  };

  const handleButtonPrevious = () => {
    const previousContent = currentContent - 1;
    setCurrentContent(previousContent);
    SubProgressBarValue();
  };

  const handlePreviousSection = () => {
    if (currentSection === "question") {
      setCurrentSection("feedback");
      const previousFeedback = currentFeedback - 1;
      setCurrentFeedback(previousFeedback);
    }

    if (currentSection === "feedback") {
      setCurrentSection("question");
      const previousQuestion = currentQuestion - 1;
      setCurrentQuestion(previousQuestion);
    }

    SubProgressBarValue();
  };

  const SumProgressBarValue = () => {
    const newValue = progressBarValue + 1;
    setProgressBarValue(newValue);
  };

  const SubProgressBarValue = () => {
    const newValue = progressBarValue - 1;
    setProgressBarValue(newValue);
  };

  const ProgressBarInitialValue = () => {
    setProgressBarValue(0);
  };

  const isQuestionSectionActive = true;

  return (
    <Main>
      <ContainerMobile>
        <HeaderMobileStyle>
          <Menus>
            {isQuestionSectionActive && (
              <ReturnButton onClick={handlePreviousSection} />
            )}
          </Menus>
          <HeadingOne text={"senhas seguras na internet"} />
          <ProgressBar
            step={progressBarValue}
            totalSteps={passwordContent.length}
          ></ProgressBar>
        </HeaderMobileStyle>

        {contentSection && (
          <>
            <ContentSection
              title={passwordContent[currentContent].title}
              content={passwordContent[currentContent].text}
              imageUrl={`../src/img/${passwordContent[currentContent].image}`}
              imageAlt={passwordContent[currentContent].imageAlt}
              buttonPreviousOnClick={handleButtonPrevious}
              imageButtonPrevious={arrowLeft}
              buttonNextOnClick={handleButtonNext}
              imageButtonNext={arrowRight}
            />
          </>
        )}

        {intermediarySection && (
          <AlertCard
            image={`../src/img/dedos-cruzados.png`}
            imageAlt={"idosa com dedos cruzados sorrindo"}
            text={
              "<p><b>Você topa colocar esse conteúdo em prática?</b></p><p>Estou torcendo por você!</p>"
            }
          />
        )}

        {questionSection && (
          <PasswordQuestionsContainer
            currentFeedback={currentFeedback}
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            currentSection={currentSection}
            questionResult={questionResult}
            anwserOptions={passwordQuestionsData[currentQuestion].answerOptions}
            handleSelectedOption={handleSelectedOption}
            handleButtonContinue={
              currentSection === "feedback"
                ? () => handleQuestion()
                : () => handleFeedback()
            }
            buttonContinueText={"Continuar"}
          />
        )}
      </ContainerMobile>
    </Main>
  );
}
