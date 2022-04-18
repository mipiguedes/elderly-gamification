import { useState } from "react";
import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { HeaderMobile } from "./HeaderMobile";
import { ContentCard } from "./ContentCard";
import { AlertCard } from "./AlertCard";
import { QuestionCard } from "./QuestionCard";
import passwordContent from "../passwordContent.json";
import passwordQuestionsData from "../passwordQuestions.json";
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

const NavigationButtonStyle = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  position: "absolute",
  bottom: "40px",
});

const Button = styled("button", {
  backgroundColor: "#FFFFFF",
  width: "105px",
  height: "58px",
  border: 0,
  borderRadius: 10,
  padding: "5px",
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export function MainPage() {
  const [currentContent, setCurrentContent] = useState(0);

  const [currentQuestion, setcurrentQuestion] = useState(0);

  const [contentSection, setContentSection] = useState(true);

  const [questionSection, setQuestionSection] = useState(false);

  const [intermediarySection, setIntermediarySection] = useState(false);

  const handleButtonNext = () => {
    const nextContent = currentContent + 1;

    if (nextContent === passwordContent.length) {
      setIntermediarySection(true);
      setContentSection(false);
    }

    setCurrentContent(nextContent);
  };

  const handleButtonPrevious = () => {
    const nextContent = currentContent - 1;
    setCurrentContent(nextContent);
  };

  return (
    <Main>
      <ContainerMobile>
        <HeaderMobile
          title={"senhas seguras na internet"}
          step={currentContent + 1}
          totalSteps={passwordContent.length}
        />
        {contentSection && (
          <>
            <ContentCard
              title={passwordContent[currentContent].title}
              content={passwordContent[currentContent].text}
              imageUrl={`../src/img/${passwordContent[currentContent].image}`}
              imageAlt={passwordContent[currentContent].imageAlt}
            />

            <NavigationButtonStyle>
              <Button onClick={handleButtonPrevious}>
                <Image src={arrowLeft} alt="Seta Voltar" />
              </Button>
              <Button onClick={handleButtonNext}>
                <Image src={arrowRight} alt="Seta Prosseguir" />
              </Button>
            </NavigationButtonStyle>
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
        { questionSection && (
         <QuestionCard question={passwordQuestionsData[currentQuestion].question} anwserOptions={passwordQuestionsData[currentQuestion].answerOptions} image={`../src/img/${passwordQuestionsData[currentQuestion].image}`} imageAlt={passwordQuestionsData[currentQuestion].imageAlt}></QuestionCard>
        )}
      </ContainerMobile>
    </Main>
  );
}
