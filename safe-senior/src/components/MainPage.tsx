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
  justifyContent: "center",
});

export function MainPage() {
  const [contentSection, setContentSection] = useState(false);

  const [questionSection, setQuestionSection] = useState(false);

  const [intermediarySection, setIntermediarySection] = useState(false);

  const [exitSection, setexitSection] = useState(false);

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
    const storegedCurrentContent = Number(
      localStorage.getItem("currentContent")
    );

    if (storegedCurrentContent) {
      setCurrentContent(storegedCurrentContent);
    }

    const storegCurrentQuestion = Number(
      localStorage.getItem("currentQuestion")
    );

    if (storegCurrentQuestion) {
      setCurrentQuestion(storegCurrentQuestion);
    }

  });

  const handleStoragedCurrentSection = (section: string) => {
    localStorage.setItem("currentSection", section);
  };

  const handleStoragedCurrentContent = (content:string) => {
    localStorage.setItem("currentContent", content);
  };

  const handleStoragedCurrentQuestion = (question:string) => {
    localStorage.setItem("currentQuestion", question);
  };

  const handleSelectedOption = (option): any => {
    setSelectedOption(option);
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
      handleStoragedCurrentQuestion(String(nextQuestion));
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
      handleStoragedCurrentSection("intermediary");
    } else {
      setCurrentContent(nextContent);
      handleStoragedCurrentContent(String(nextContent));
    }

    SumProgressBarValue();
  };

  const handleButtonPrevious = () => {
    const previousContent = currentContent - 1;
    setCurrentContent(previousContent);
    handleStoragedCurrentContent(String(previousContent));
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
      handleStoragedCurrentQuestion(String(previousQuestion));
    }

    SubProgressBarValue();
  };

  const handleIntermediaryButton = () => {
    handleStoragedCurrentSection("question");
    setIntermediarySection(false);
    setQuestionSection(true);
    setProgressBarValue(0);
  };

  const SumProgressBarValue = () => {
    const newValue = progressBarValue + 1;
    setProgressBarValue(newValue);
  };

  const SubProgressBarValue = () => {
    const newValue = progressBarValue - 1;
    setProgressBarValue(newValue);
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
            <Button
              text={"sair"}
              width={"fit-content"}
              onClick={handlePreviousSection}
              backgroundColor={"#125BDE"}
            ></Button>
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
              buttonNextOnClick={handleButtonNext}
              imageButtonPrevious={arrowLeft}
              imageButtonNext={arrowRight}
            />
          </>
        )}

        {intermediarySection && (
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

        {questionSection && (
          <PasswordQuestionsContainer
            currentFeedback={currentFeedback}
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            currentSection={currentQuestionSection}
            questionResult={questionResult}
            anwserOptions={passwordQuestionsData[currentQuestion].answerOptions}
            handleSelectedOption={handleSelectedOption}
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
                width={"100%"}
                onClick={handleFeedback}
              ></Button>
            </ButtonContainer>
          </>
        )}
      </ContainerMobile>
    </Main>
  );
}
