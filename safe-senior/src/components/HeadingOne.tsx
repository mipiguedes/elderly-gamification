import { styled } from "@stitches/react";

const H1 = styled("h1", {
  fontSize: "1.125rem",
  color: "#D8EFFF",
});

export function HeadingOne({ text }: any) {
  return <H1>{text}</H1>;
}
