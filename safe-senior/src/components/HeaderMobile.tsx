import { styled } from "@stitches/react";
import { HeadingOne } from "./HeadingOne";

type HeaderMobileProps = {
  title: string;
};

const Header = styled("header", {
  backgroundColor: "#13274A",
  width: "100%",
  height: "fit-content",
  minHeight: "100px",
  borderRadius: "0 0 40px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const HeaderMobile = ({ title }: HeaderMobileProps) => {
  return (
    <Header>
      <HeadingOne text={title} />
    </Header>
  );
};
