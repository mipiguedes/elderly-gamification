import { styled } from "@stitches/react";
import { HeadingOne } from "./HeadingOne";
import { ProgressBar } from "./ProgressBar";

type HeaderMobileProps = {
  title: string;
  step: number;
  totalSteps: number;
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

export const HeaderMobile = ({
  title,
  step,
  totalSteps,
}: HeaderMobileProps) => {
  return (
    <HeaderMobileStyle>
      <HeadingOne text={title} />
      <ProgressBar step={step} totalSteps={totalSteps}></ProgressBar>
    </HeaderMobileStyle>
  );
};
