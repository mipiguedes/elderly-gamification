import { styled } from "@stitches/react";

const ContainerMobileStyle = styled("div", {
  backgroundColor: "#D8EFFF",
  width: "100%",
  height: "100%",
  maxWidth: "375px",
  maxHeight: "736px",
});

export const ContainerMobile = ({ children }: any) => {
  return <ContainerMobileStyle>{children}</ContainerMobileStyle>;
};
