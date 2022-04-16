import { styled } from "@stitches/react";
import arrowRight from "../img/arrow-right.png";
import arrowLeft from "../img/arrow-left.png";

type NavigationButtonProps = {
  next: number;
  previous: number;
};

const NavigationButtonStyle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 1.5rem",
});

const Button = styled("button", {
  backgroundColor: "#FFFFFF",
  width: "105px",
  height: "58px",
  border: 0,
  borderRadius: 10,
  padding: "5px"
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export function NavigationButton({ next, previous }: NavigationButtonProps) {
  return (
    <NavigationButtonStyle>
      <Button>
        <Image src={arrowLeft} alt="Seta Voltar" />
      </Button>
      <Button>
        <Image src={arrowRight} alt="Seta Prosseguir" />
      </Button>
    </NavigationButtonStyle>
  );
}
