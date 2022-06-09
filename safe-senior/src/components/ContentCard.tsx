import { styled } from "@stitches/react";
import parse from "html-react-parser";

type ContentCardProps = {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
};

const ContentCardStyle = styled("div", {
  margin: "1.5rem",
  padding: "0.65rem",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  height: "fit-content",
  overflowY: "auto",
  maxHeight: "55vh",
});

const ContentHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
});

const ContentBody = styled("div", {
  fontSize: "1rem",
  color: "#13274A",
  p: {
    lineHeight: 1.50,
  },
});

const CartoonImage = styled("img", {
  maxWidth: "70px",
  maxHeight: "70px",
  border: "3px solid #939393",
  borderRadius: "50%",
  boxSizing: "border-box",
  objectFit: "cover",
  objectPosition: 100 % 0,
  marginRight: "0.75rem",
});

const Title = styled("h2", {
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#13274A",
  margin: 0,
  lineHeight: 1.3,
});

export function ContentCard({
  title,
  content,
  imageUrl,
  imageAlt,
}: ContentCardProps) {
  return (
    <ContentCardStyle>
      <ContentHeader>
        <CartoonImage src={`${imageUrl}`} alt={`${imageAlt}`}></CartoonImage>
        <Title>{parse(title)}</Title>
      </ContentHeader>
      <ContentBody>{parse(content)}</ContentBody>
    </ContentCardStyle>
  );
}
