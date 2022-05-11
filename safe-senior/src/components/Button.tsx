import { styled } from "@stitches/react";

type ButtonProps = {
  text?: string;
  width?: string;
  backgroundColor?: string;
  onClick: Function;
};

export function Button({ text, backgroundColor, width, onClick }: ButtonProps) {
  const ButtonStyle = styled("button", {
    width: `${width}`,
    padding: "0.75rem",
    background: `${backgroundColor}`,
    borderRadius: 10,
    border: 0,
    cursor: "pointer",
    fontSize: "1.125rem",
    fontWeight: 800,
    color: "#D8EFFF",
  });
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}
