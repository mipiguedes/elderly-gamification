import { styled } from "@stitches/react";
import parse from "html-react-parser";

type AlertCardProps = {
  image: string;
  imageAlt: string;
  text: string;
};

const ContentCardStyle = styled("div", {
  margin: "1.5rem",
  padding: "0.65rem",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  height: "fit-content",
  overflowY: "auto",
  maxHeight: "55vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const CartoonImage = styled("img", {
  maxWidth: "100px",
  maxHeight: "100px",
  border: "3px solid #939393",
  borderRadius: "50%",
  boxSizing: "border-box",
  objectFit: "cover",
  objectPosition: 100 % 0,
  marginRight: "0.75rem",
});

const Title = styled("h2", {
  fontSize: "1rem",
  fontWeight: 500,
  color: "#13274A",
  margin: 0,
  lineHeight: 1.3,
  textAlign: "center"
});

export function AlertCard({ image, imageAlt, text }: AlertCardProps) {
  return (
    <ContentCardStyle>
      <CartoonImage src={image} alt={imageAlt} />
      <Title>{parse(text)}</Title>
    </ContentCardStyle>
  );
}