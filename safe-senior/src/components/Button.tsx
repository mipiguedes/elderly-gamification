import { styled } from "@stitches/react";

const ButtonStyle = styled("button", {
  width: "100%",
  height: "50px",
  background:
    "linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%)",
  borderRadius: 10,
  border: 0,
  cursor: "pointer",
  fontSize: "1.125rem",
  fontWeight: 800,
  color: "#D8EFFF",
});

export function Button({ text, onClick }: any) {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
}
