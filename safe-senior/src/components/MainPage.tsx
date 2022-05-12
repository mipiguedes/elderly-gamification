import { useState, useEffect } from "react";
import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { HeadingOne } from "./HeadingOne";
import { ProgressBar } from "./ProgressBar";
import { ContentSection } from "./ContentSection";
import { AlertCard } from "./AlertCard";
import { ReturnButton } from "./ReturnButton";
import { Button } from "./Button";
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
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5rem 0",
});

const ButtonContainer = styled("div", {
  margin: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
});

export function MainPage() {
  const [contentSection, setContentSection] = useState(false);

  const [questionSection, setQuestionSection] = useState(false);

  const [intermediarySection, setIntermediarySection] = useState(false);

  const [exitSection, setExitSection] = useState(false);

  const [initialSection, setInitialSection] = useState(false);

  const [currentQuestionSection, setCurrentQuestionSection] =
    useState("question");

  //Current Sections States

  const [progressBarValue, setProgressBarValue] = useState(0);

  const [currentContent, setCurrentContent] = useState(0);

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedOption, setSelectedOption] = useState(0);

  const [questionResult, setQuestionResult] = useState(true);

  //Cache Storege

  useEffect(() => {
    const storegedCurrentSection = localStorage.getItem("currentSection");

    if (storegedCurrentSection) {
      if (storegedCurrentSection === "content") {
        setContentSection(true);
      }

      if (storegedCurrentSection === "question") {
        setQuestionSection(true);
      }
    } else {
      localStorage.setItem("currentSection", "content");
      setContentSection(true);
    }
  });

  useEffect(() => {
    const storagedCurrentContent = Number(
      localStorage.getItem("currentContent")
    );

    const storagedCurrentQuestion = Number(
      localStorage.getItem("currentQuestion")
    );

    const storagedProgressBarValue = Number(
      localStorage.getItem("progressBarValue")
    );

    if (storagedCurrentContent) {
      setCurrentContent(storagedCurrentContent);
    }

    if (storagedCurrentQuestion) {
      setCurrentQuestion(storagedCurrentQuestion);
    }

    if (storagedProgressBarValue) {
      setProgressBarValue(storagedProgressBarValue);
    }
  });

  const handleSetItemOnCache = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const handleQuestion = () => {
    setCurrentQuestionSection("question");

    const nextFeedback = currentFeedback + 1;

    if (nextFeedback < passwordQuestionsData.length) {
      setCurrentFeedback(nextFeedback);
    }

    SumProgressBarValue();
  };

  const handleFeedback = () => {
    isOptionCorrect();

    setCurrentQuestionSection("feedback");

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < passwordQuestionsData.length) {
      setCurrentQuestion(nextQuestion);
      handleSetItemOnCache("currentQuestion", String(nextQuestion));
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

    if (nextContent >= passwordContent.length) {
      setIntermediarySection(true);
      setContentSection(false);
      handleSetItemOnCache("currentSection", "intermediary");
    } else {
      setCurrentContent(nextContent);
      handleSetItemOnCache("currentContent", String(nextContent));
    }

    SumProgressBarValue();
  };

  const handleButtonPrevious = () => {
    const previousContent = currentContent - 1;
    setCurrentContent(previousContent);
    handleSetItemOnCache("currentContent", String(previousContent));
    SubProgressBarValue();
  };

  const handlePreviousSection = () => {
    if (currentQuestionSection === "question") {
      setCurrentQuestionSection("feedback");
      const previousFeedback = currentFeedback - 1;
      setCurrentFeedback(previousFeedback);
    }

    if (currentQuestionSection === "feedback") {
      setCurrentQuestionSection("question");
      const previousQuestion = currentQuestion - 1;
      setCurrentQuestion(previousQuestion);
      handleSetItemOnCache("currentQuestion", String(previousQuestion));
    }

    SubProgressBarValue();
  };

  const handleIntermediaryButton = () => {
    handleSetItemOnCache("currentSection", "question");
    setIntermediarySection(false);
    setQuestionSection(true);
    setProgressBarValue(0);
    handleSetItemOnCache("progressBarValue", String(0));
  };

  const handleExitSection = () => {
    setIntermediarySection(false);
    setQuestionSection(false);
    setContentSection(false);
    setExitSection(true);
  };

  const handleReturnButton = () => {
    const storagedCurrentSection = localStorage.getItem("currentSection");

    if (storagedCurrentSection === "content") {
      handleSetItemOnCache("currentSection", "content");
      setExitSection(false);
      setContentSection(true);
    }

    if (storagedCurrentSection === "question") {
      handleSetItemOnCache("currentSection", "question");
      setExitSection(false);
      setQuestionSection(true);
    }
  };

  const handleExitButton = () => {
    handleSetItemOnCache("currentSection", "initial");
    setExitSection(false);
    setContentSection(false);
    setQuestionSection(false);
    setInitialSection(true);
  }

  const SumProgressBarValue = () => {
    const newValue = progressBarValue + 1;
    setProgressBarValue(newValue);
    handleSetItemOnCache("progressBarValue", String(newValue));
  };

  const SubProgressBarValue = () => {
    const newValue = progressBarValue - 1;
    setProgressBarValue(newValue);
    handleSetItemOnCache("progressBarValue", String(newValue));
  };

  const isContentSectionActive = contentSection && exitSection === false;

  const isQuestionSectionActive = questionSection && exitSection === false;

  const isIntermediarySection = intermediarySection && exitSection === false;

  return (
    <Main>
      <ContainerMobile>
        <HeaderMobileStyle>
          <Menus>
            {isQuestionSectionActive && (
              <ReturnButton onClick={handlePreviousSection} />
            )}
            {exitSection === false && (
              <Button
                text={"sair"}
                width={"fit-content"}
                onClick={handleExitSection}
                backgroundColor={"#125BDE"}
              />
            )}
          </Menus>
          <HeadingOne text={"senhas seguras na internet"} />
          {exitSection === false && (
            <ProgressBar
              step={progressBarValue}
              totalSteps={passwordContent.length}
            ></ProgressBar>
          )}
        </HeaderMobileStyle>

        {initialSection && (
          <>
            <p>Initial page</p>
          </>
        )}

        {isContentSectionActive && (
          <>
            <ContentSection
              title={passwordContent[currentContent].title}
              content={passwordContent[currentContent].text}
              imageUrl={`../src/img/${passwordContent[currentContent].image}`}
              imageAlt={passwordContent[currentContent].imageAlt}
              buttonPreviousOnClick={handleButtonPrevious}
              buttonNextOnClick={handleButtonNext}
              imageButtonPrevious={arrowLeft}
              imageButtonNext={arrowRight}
            />
          </>
        )}

        {isIntermediarySection && (
          <>
            <AlertCard
              image={`../src/img/dedos-cruzados.png`}
              imageAlt={"idosa com dedos cruzados sorrindo"}
              text={
                "<p><b>Você topa colocar esse conteúdo em prática?</b></p><p>Estou torcendo por você!</p>"
              }
            />
            <ButtonContainer>
              <Button
                text={"Vamos lá"}
                backgroundColor={
                  "linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);"
                }
                width={"100%"}
                onClick={handleIntermediaryButton}
              ></Button>
            </ButtonContainer>
          </>
        )}

        {isQuestionSectionActive && (
          <PasswordQuestionsContainer
            currentFeedback={currentFeedback}
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            currentSection={currentQuestionSection}
            questionResult={questionResult}
            anwserOptions={passwordQuestionsData[currentQuestion].answerOptions}
            handleSelectedOption={setSelectedOption}
            handleButtonContinue={
              currentQuestionSection === "feedback"
                ? () => handleQuestion()
                : () => handleFeedback()
            }
            buttonContinueText={"Continuar"}
          />
        )}

        {exitSection && (
          <>
            <AlertCard
              imageAlt={"idosa com expressão de surpresa"}
              image={`../src/img/mao-na-boca.png`}
              text={"<p><b>Você saiu...</b></p><p>Deseja retornar ao jogo?</p>"}
            />
            <ButtonContainer>
              <Button
                text={"Retornar"}
                backgroundColor={
                  "linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);"
                }
                width={"49%"}
                onClick={handleReturnButton}
              />
              <Button
                text={"Sair"}
                backgroundColor={"#E64E3D"}
                width={"49%"}
                onClick={handleExitButton}
              />
            </ButtonContainer>
          </>
        )}
      </ContainerMobile>
    </Main>
  );
}
