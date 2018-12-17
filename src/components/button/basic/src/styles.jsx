import styled from "@emotion/styled";

const ButtonBasicStyled = styled.button`
  border: ${props => `1px solid ${props.theme.palette.grey["200"]}`};
  border-radius: 2px;
  background: none;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${props => props.theme.spacing.s};
  padding-left: ${props => props.theme.spacing.s};
  min-width: 40px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  user-select: none;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.weight.m};
  height: 40px;
  line-height: normal;
  white-space: nowrap;
  transition: 0.15s ease all;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ shape }) => stylesShape(shape)};
  ${({ isElevated }) => stylesBoxShadow(isElevated)};
  ${({ size, theme }) => stylesSizes(size, theme)};
  ${({ color, importance, theme }) => stylesColors(color, importance, theme)};
`;
const LinkStyled = styled.a`
  border: ${props => `1px solid ${props.theme.palette.grey["200"]}`};
  background: none;
  min-width: 40px;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${props => props.theme.spacing.s};
  padding-left: ${props => props.theme.spacing.s};
  user-select: none;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.weight.m};
  height: 40px;
  line-height: normal;
  min-width: 40px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  white-space: nowrap;
  transition: 0.15s ease all;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-decoration: none;

  ${({ shape }) => stylesShape(shape)};
  ${({ isElevated }) => stylesBoxShadow(isElevated)};
  ${({ size, theme }) => stylesSizes(size, theme)};
  ${({ color, importance, theme }) => stylesColors(color, importance, theme)};
`;

const ButtonInnerStyled = styled.span`
  align-items: center;
  display: inline-flex;
  height: 100%;
  pointer-events: none;

  img:first-child,
  i:first-child,
  svg:first-child {
    margin-right: ${props => props.theme.spacing.xs};
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

const stylesSizes = (size, theme) =>
  size === "small"
    ? `
    font-size: ${theme.font.size.s};
    padding-right: ${theme.spacing.xs};
    padding-left: ${theme.spacing.xs};
    min-width: 32px;
  `
    : size === "medium"
    ? `
    font-size: ${theme.font.size.m};
    padding-right: ${theme.spacing.s}  ;
    padding-left: ${theme.spacing.s} ;
  `
    : size === "large"
    ? `
    font-size: ${theme.font.size.l};
    padding-right: ${theme.spacing.m};
    padding-left: ${theme.spacing.m};
    min-width: 48px;
  `
    : ``;

const stylesColors = (color, importance, theme) =>
  color === "primary" && importance === "primary"
    ? `${stylesImportancePrimaryOf(theme.palette.primary["500"])}`
    : color === "primary" && importance === "secondary"
    ? `${stylesImportanceSecondaryOf(theme.palette.primary["500"])}`
    : color === "primary" && importance === "tertiary"
    ? `${stylesImportancetertiaryOf(theme.palette.primary["500"])}`
    : color === "secondary" && importance === "primary";

const colorAndFill = color => `
  color: ${color}
  fill: ${color}
`;

const stylesBoxShadow = isElevated =>
  isElevated ? `box-shadow: 0 4px 7px -3px rgba(1,1,1,0.54);` : "";

const stylesImportancePrimaryOf = color => `
  ${colorAndFill("white")}
  background-color: ${color};
  border-color: ${color};
  cursor: hover;
  /* @todo box shadow in buttons only primary and secondary */
  /*box-shadow: 0 4px 7px -3px rgba(1,1,1,0.54);*/

  &:hover, &:focus {
    background-color: ${darken(0.05, color)}
    border-color: ${darken(0.05, color)} 
  }
`;

const stylesImportanceSecondaryOf = color => `
  ${colorAndFill(color)}
  background-color: transparent;
  border-color: ${color};

  &:hover, &:focus {
    border-color: ${darken(0.15, color)}
    ${colorAndFill(darken(0.15, color))}
  }
`;

const stylesImportancetertiaryOf = color => `
  ${colorAndFill(color)}
  background-color: transparent;
  border-color: transparent;

  &:hover, &:focus {
    ${colorAndFill(darken(0.15, color))}
  }
`;

export { ButtonBasicStyled, LinkStyled, ButtonInnerStyled };
