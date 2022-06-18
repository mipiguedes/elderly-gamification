import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { Button } from "./Button";

const WelcomeSectionStyle = styled("div", {
  backgroundColor: "#060D18",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  length: 0,
  
});

const WelcomeHeader = styled("div", {
  backgroundColor: "#13274A",
  borderRadius: "40px",
  width: "100%",
  minHeight: "45%",
  length: 0,
  marginTop: "-40px",
  position: "relative",
  overflow: "hidden",
});

const WelcomeContent = styled("div", {
  padding: "1rem 3rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const CartoonImage = styled("img", {
  position: "absolute",
  bottom: "-10px",
  left: "10px",
  length: 0,
  maxWidth: "80%",
});

const Title = styled("h2", {
  fontSize: "1.15rem",
  fontWeight: 700,
  color: "#13274A",
  margin: "1rem 0",
  lineHeight: 1.3,
  textAlign: "left",
});

const Paragraph = styled("p", {
  fontSize: "1.05rem",
  fontWeight: 500,
  color: "#13274A",
  margin: "0.5rem 0",
  lineHeight: 1.3,
  textAlign: "left",
});

const ParagraphSmall = styled("p", {
  fontSize: "1.05rem",
  fontWeight: 500,
  color: "#13274A",
  lineHeight: 1.3,
  textAlign: "left",
  margin: "0.5rem 0 1rem 0",
});

const handleSetItemOnCache = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const ResetContentValue = () => {
  handleSetItemOnCache('currentContent', '0');
  handleSetItemOnCache('progressBarValue', '0');
  handleSetItemOnCache('currentSection', 'content');
  handleSetItemOnCache('currentQuestion', '0');
};

const handleContinueButton = () => {
  ResetContentValue();
  window.location.href = "/jogar";
}

export const WelcomeSection = () => {
  return (
    <WelcomeSectionStyle>
      <ContainerMobile>
        <WelcomeHeader>
          <CartoonImage
            src={`../src/img/acenando.png`}
            alt={"imagem idosa acenando"}
          />
        </WelcomeHeader>
        <WelcomeContent>
          <Title>Seja bem-vindo(a)!</Title>
          <Paragraph>É um prazer ter você aqui!</Paragraph>

          <ParagraphSmall>
            Não precisa ser difícil se manter seguro (a) na internet, vou te
            ensinar!
          </ParagraphSmall>

          <ParagraphSmall>Vamos começar então?</ParagraphSmall>
          <Button
            text="Começar"
            backgroundColor="linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%)"
            width="100%"
            onClick={handleContinueButton}
          ></Button>
        </WelcomeContent>
      </ContainerMobile>
    </WelcomeSectionStyle>
  );
};
