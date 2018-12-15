import styled from "@emotion/styled";
import { darken } from "polished";

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: ${props => props.theme.colors.system};
  outline: none;
  font-family: ${props => props.theme.font.family.main};
  letter-spacing: 0.2px;
  font-weight: 300;
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
    0 1px 2px rgba(102, 119, 136, 0.3);
  background-color: ${props => props.theme.colors.grey_light};
  ${({ shape }) => stylesShape(shape)};
  ${({ disabled }) => stylesDisabled(disabled)};
  ${({ size, theme }) => sylesSize(size, theme)};

  &:focus {
    background: ${props => darken(0.1, props.theme.colors.grey_light)};
  }

  & + label {
    margin-top: ${props => props.theme.spacing.l};
  }

  ${props =>
    props.appearance === "white"
      ? `
        background: white;
        &:focus {
          background: ${props => darken(0.15, white)};
        }
      `
      : ``};
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
