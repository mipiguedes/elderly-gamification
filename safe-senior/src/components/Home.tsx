import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { HeaderMobile } from "./HeaderMobile";

const Main = styled("div", {
  backgroundColor: "#060D18",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export function Home() {
  return (
    <Main>
      <ContainerMobile>
        <HeaderMobile title={"senhas seguras na internet"} />
      </ContainerMobile>
    </Main>
  );
}
