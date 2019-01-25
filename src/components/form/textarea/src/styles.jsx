import styled from "@emotion/styled";

const TextareaStyled = styled.textarea`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 150px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: ${props => props.theme.palette.grey["100"]};
  box-shadow: ${({ theme }) =>
    `${theme.box.shadow["100"]},${theme.box.shadow["100"]}`};
  transition: box-shadow 0.15s ease-out, background-color 0.5s ease;

  color: ${props => props.theme.palette.grey["800"]};
  font-family: ${props => props.theme.font.family.primary};
  letter-spacing: 0.2px;
  font-weight: 300;

  + label {
    margin-top: ${props => props.theme.spacing.m};
  }

  &:focus {
    background: ${props => props.theme.palette.grey["200"]};
    box-shadow: ${({ theme }) =>
      `${theme.box.shadow["100"]},${theme.box.shadow["300"]}`};
  }

  ${props =>
    props.appearance === "white"
      ? `
        background: white;
      `
      : ``};

  ${({ shape }) =>
    shape === "square"
      ? `border-radius: 0;`
      : shape === "rounded"
      ? `border-radius: 2px`
      : shape === "pill"
      ? `border-radius: 500px`
      : ``};

  ${({ size, theme }) =>
    size === "small"
      ? `
        font-size: ${theme.font.size.xs};
        padding-top: ${theme.spacing.xs};
        padding-bottom: ${theme.spacing.xs};
        padding-right: ${theme.spacing.xs};
        padding-left: ${theme.spacing.xs};
      `
      : size === "medium"
      ? `
        font-size: ${theme.font.size.s};
        padding-top: ${theme.spacing.s};
        padding-bottom: ${theme.spacing.s};
        padding-right: ${theme.spacing.s};
        padding-left: ${theme.spacing.s};
      `
      : size === "large"
      ? `
        font-size: ${theme.font.size.m};
        padding-top: ${theme.spacing.m};
        padding-bottom: ${theme.spacing.m};
        padding-right: ${theme.spacing.m};
        padding-left: ${theme.spacing.m};
      `
      : ``};
`;

export { TextareaStyled };
