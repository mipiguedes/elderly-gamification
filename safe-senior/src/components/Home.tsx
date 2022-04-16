import { useState } from "react";
import parse from "html-react-parser";
import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { HeaderMobile } from "./HeaderMobile";
import { ContentCard } from "./ContentCard";
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

export function Home() {
  const [currentContent, setCurrentContent] = useState(0);

  const handleButtonNext = () => {
    const nextContent = currentContent + 1;
    setCurrentContent(nextContent);
  };

  const handleButtonPrevious = () => {
    const nextContent = currentContent - 1;
    setCurrentContent(nextContent);
  };

  return (
    <Main>
      <ContainerMobile>
        <HeaderMobile title={"senhas seguras na internet"} />
        <ContentCard
          title={passwordContent[currentContent].title}
          content={parse(passwordContent[currentContent].text)}
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
      </ContainerMobile>
    </Main>
  );
}
