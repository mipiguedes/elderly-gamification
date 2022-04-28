import { styled } from "@stitches/react";
import { QuestionCard } from "./QuestionCard";

type QuestionSectionProps = {
  question: string;
  image: string;
  imageAlt: string;
  anwserOptions: any;
  handleSelectedOption: Function;
  selectedOption: number;
};

const GroupOptionCard = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Option = styled("button", {
  fontSize: "1.125rem",
  fontWeight: 500,
  color: "#13274A",
  lineHeight: 1.3,
  margin: "0.5rem 1.5rem",
  padding: "0.65rem",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  minHeight: "53px",
  overflowY: "auto",
  maxHeight: "200px",
  cursor: "pointer",
  transition: "all .0.4s",
  "&:hover": {
    backgroundColor: "#ECECEC",
    border: "3px solid #13274A",
  },
  variants: {
    type: {
      active: {
        backgroundColor: "#ECECEC",
        border: "3px solid #13274A",
      },
    },
  },
});

export function QuestionSection({
  question,
  image,
  imageAlt,
  anwserOptions,
  handleSelectedOption,
  selectedOption,
}: QuestionSectionProps) {
  return (
    <>
      <QuestionCard question={question} image={image} imageAlt={imageAlt} />
      <GroupOptionCard role="radio">
        {anwserOptions.map((anwser: any, index: any) => (
          <Option
            type={selectedOption === index ? "active" : ""}
            onClick={() => handleSelectedOption(index)}
            role="radio"
            aria-checked={selectedOption === index ? "true" : "false"}
          >
            {anwser.answerText}
          </Option>
        ))}
      </GroupOptionCard>
    </>
  );
}
