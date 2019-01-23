import styled from "@emotion/styled";

const TextareaStyled = styled.textarea`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 150px;
  box-sizing: border-box;
  border: none;
  color: ${props => props.theme.palette.grey["900"]};
  outline: none;
  font-family: ${props => props.theme.font.family.primary};
  letter-spacing: 0.2px;
  font-weight: 300;
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
    0 1px 2px rgba(102, 119, 136, 0.3);
  background-color: ${props => props.theme.palette.grey["100"]};
  &:focus {
    background: ${props => props.theme.palette.grey["200"]};
  }

  & + label {
    margin-top: ${props => props.theme.spacing.l};
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
