import { styled } from "@stitches/react";
import { ContainerMobile } from "./ContainerMobile";
import { HeaderMobile } from "./HeaderMobile";
import { ContentCard } from "./ContentCard";
import { NavigationButton } from "./NavigationButton";
import sorridente from "../img/sorridente.png";

const Main = styled("div", {
  backgroundColor: "#060D18",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const content = (
  <>
    <p>
      Esse ambiente repleto de <b>informações</b> e oportunidades também oferece
      alguns riscos.
    </p>
  </>
);

export function Home() {
  return (
    <Main>
      <ContainerMobile>
        <HeaderMobile title={"senhas seguras na internet"} />
        <ContentCard
          title="Você sabia que é necessário tomar alguns cuidados com o que você faz na Internet?"
          content={content}
          imageUrl={sorridente}
          imageAlt="idosa lala"
        ></ContentCard>
        <NavigationButton previous={2} next={1}></NavigationButton>
      </ContainerMobile>
    </Main>
  );
}
