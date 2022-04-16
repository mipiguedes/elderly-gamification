import { styled } from "@stitches/react";

export const ProgressBar = ({ completed }: any) => {
  const ContainerStyles = styled("div", {
    height: 12,
    width: "100%",
    backgroundColor: "#F0F9FF",
    borderRadius: 50,
    margin: '0.5rem',
  });

  const FillerStyles = styled("div", {
    transition: 'width 1s ease-in-out',
    height: "100%",
    width: `${completed}%`,
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
      <FillerStyles role="progressbar" aria-valuenow={`${completed}`} aria-valuemin="0" aria-valuemax="100">
        <LabelStyle/>
      </FillerStyles>
    </ContainerStyles>
  );
};
