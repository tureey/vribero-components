import styled from "@emotion/styled";

const InputStyled = styled.input`
  background-color: ${props => props.theme.palette.grey["200"]};
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
    0 1px 2px rgba(102, 119, 136, 0.3);

  color: ${props => props.theme.palette.grey["500"]};
  font-family: ${props => props.theme.font.family.primary};
  letter-spacing: 0.2px;
  font-weight: 300;

  ${props => (props.appearance === "white" ? `background: white;` : ``)};
  ${({ shape }) => stylesShape(shape)};
  ${({ disabled }) => stylesDisabled(disabled)};
  ${({ size, theme }) => sylesSize(size, theme)};

  & + label {
    margin-top: ${props => props.theme.spacing.m};
  }

  &:focus {
    background: ${props => props.theme.palette.grey["300"]};
  }
`;

const stylesShape = shape =>
  shape === "square"
    ? `border-radius: 0;`
    : shape === "rounded"
    ? `border-radius: 3px`
    : shape === "pill"
    ? `border-radius: 500px`
    : ``;

const sylesSize = (size, theme) =>
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
    : ``;

const stylesDisabled = disabled =>
  disabled
    ? `
      cursor: not-allowed;
      opacity: 0.4;`
    : `
      cursor: text;
      opacity: 1;
    `;
export { InputStyled };
