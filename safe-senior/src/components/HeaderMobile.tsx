import { styled } from "@stitches/react";
import { ReturnButton } from "./ReturnButton";
import { HeadingOne } from "./HeadingOne";
import { ProgressBar } from "./ProgressBar";

type HeaderMobileProps = {
  title: string;
  step: number;
  totalSteps: number;
  isQuestionSectionActive?: boolean;
};

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

export const HeaderMobile = ({
  title,
  step,
  totalSteps,
  isQuestionSectionActive = true
}: HeaderMobileProps) => {
  return (
    <HeaderMobileStyle>
      <Menus>{isQuestionSectionActive && <ReturnButton />}</Menus>
      <HeadingOne text={title} />
      <ProgressBar step={step} totalSteps={totalSteps}></ProgressBar>
    </HeaderMobileStyle>
  );
};
