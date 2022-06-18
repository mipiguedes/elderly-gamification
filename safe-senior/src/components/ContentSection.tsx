import { styled } from "@stitches/react";
import { ContentCard } from "./ContentCard";

type ContentCardProps = {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  buttonPreviousOnClick: Function;
  imageButtonPrevious: string;
  buttonNextOnClick: Function;
  imageButtonNext: string;
};


const NavigationButtonStyle = styled("div", {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  });
  
  const Button = styled("button", {
    backgroundColor: "#FFFFFF",
    width: "105px",
    height: "58px",
    border: 0,
    borderRadius: 10,
    padding: "5px",
    cursor: "pointer"
  });
  
  const Image = styled("img", {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  });

export function ContentSection({
  title,
  content,
  imageUrl,
  imageAlt,
  buttonPreviousOnClick,
  imageButtonPrevious,
  buttonNextOnClick,
  imageButtonNext
}: ContentCardProps) {
  return (
    <>
      <ContentCard
        title={title}
        content={content}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />

      <NavigationButtonStyle>
        <Button onClick={buttonPreviousOnClick}>
          <Image src={imageButtonPrevious} alt="Seta Voltar" />
        </Button>
        <Button onClick={buttonNextOnClick}>
          <Image src={imageButtonNext} alt="Seta Prosseguir" />
        </Button>
      </NavigationButtonStyle>
    </>
  );
}
