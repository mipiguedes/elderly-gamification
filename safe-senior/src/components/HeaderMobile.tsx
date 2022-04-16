import { styled } from "@stitches/react";
import { HeadingOne } from "./HeadingOne";
import { ProgressBar } from "./ProgressBar";

type HeaderMobileProps = {
  title: string;
};

const HeaderMobileStyle = styled("header", {
  backgroundColor: "#13274A",
  padding: '0.5rem 2rem',
  height: "fit-content",
  minHeight: "100px",
  borderRadius: "0 0 40px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export const HeaderMobile = ({ title }: HeaderMobileProps) => {
  return (
    <HeaderMobileStyle>
      <HeadingOne text={title} />
      <ProgressBar completed="50"></ProgressBar>
    </HeaderMobileStyle>
  );
};
