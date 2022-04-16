import { styled } from "@stitches/react";

const HeadingOneStyle = styled("h1", {
  fontSize: "1.125rem",
  color: "#D8EFFF",
});

export function HeadingOne({ text }: any) {
  return <HeadingOneStyle>{text}</HeadingOneStyle>;
}
