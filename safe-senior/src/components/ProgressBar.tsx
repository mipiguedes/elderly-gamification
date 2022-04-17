import { styled } from "@stitches/react";

type ProgressBarProps = {
  step: number;
  totalSteps: number;
};

export const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const completedSteps = ((step * 100) / totalSteps) <= 100 ? ((step * 100) / totalSteps) : 100;

  const ContainerStyles = styled("div", {
    height: 12,
    width: "100%",
    backgroundColor: "#F0F9FF",
    borderRadius: 50,
    margin: "0.5rem",
  });

  const FillerStyles = styled("div", {
    transition: "width 1s ease-in-out",
    height: "100%",
    width: `${completedSteps}%`,
    backgroundColor: "#56A486",
    borderRadius: "inherit",
    textAlign: "right",
  });

  const LabelStyle = styled("span", {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  });

  return (
    <ContainerStyles>
      <FillerStyles
        role="progressbar"
        aria-valuenow={`${completedSteps}`}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <LabelStyle />
      </FillerStyles>
    </ContainerStyles>
  );
};
