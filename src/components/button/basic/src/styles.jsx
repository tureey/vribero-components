import styled from "@emotion/styled";

const stylesCommon = theme => `
  border: '1px solid ${theme.palette.grey["200"]};
  background: none;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${theme.spacing.s};
  padding-left: ${theme.spacing.s};
  min-width: 40px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  user-select: none;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${theme.font.family.main};
  font-size: ${theme.font.size.m};
  font-weight: ${theme.font.weight.m};
  height: 40px;
  line-height: normal;
  white-space: nowrap;
  transition: 0.15s background-color all;
`;

const ButtonBasicStyled = styled.button`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ theme }) => stylesCommon(theme)};
  ${({ shape, theme }) => stylesShape(shape, theme.box.radius)};
  ${({ isElevated, theme }) =>
    stylesBoxShadow(isElevated, theme.box.boxShadow)};
  ${({ size, theme }) => stylesSizes(size, theme)};
  ${({ color, importance, theme }) => stylesColors(color, importance, theme)};
`;

const LinkStyled = styled.a`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-decoration: none;
  ${({ theme }) => stylesCommon(theme)};
  ${({ shape, theme }) => stylesShape(shape, theme.box.radius)};
  ${({ isElevated, theme }) =>
    stylesBoxShadow(isElevated, theme.box.boxShadow)};
  ${({ size, theme }) => stylesSizes(size, theme.box.radius)};

  ${({ color, importance, theme }) =>
    color === "primary" && importance === "primary"
      ? `
        color: white;
        fill: white;
        background-color: ${theme.palette.primary["500"]};
        border-color: ${theme.palette.primary["500"]};

        &:hover, &:focus {
          background-color: ${theme.palette.primary["700"]};
          border-color: ${theme.palette.primary["700"]};
        }
  `
      : color === "primary" && importance === "secondary"
      ? `
        color: ${theme.palette.primary["500"]};
        fill: ${theme.palette.primary["500"]};
        background-color: transparent;
        border-color: ${theme.palette.primary["500"]};

        &:hover, &:focus {
          border-color: ${theme.palette.primary["700"]};
        }
      `
      : color === "primary" && importance === "tertiary"
      ? `
        color: ${theme.palette.primary["500"]};
        fill: ${theme.palette.primary["500"]};
        background-color: transparent;

        &:hover, &:focus {
          color: ${theme.palette.primary["700"]};
        fill: ${theme.palette.primary["700"]};
        }
      `
      : ``}
`;

const stylesShape = (shape, radius) =>
  shape === "square"
    ? `border-radius: ${radius.none}`
    : shape === "rounded"
    ? `border-radius: ${radius.rounded}`
    : shape === "pill"
    ? `border-radius: ${radius.pill}`
    : ``;

const stylesSizes = (size, theme) =>
  size === "small"
    ? `
    font-size: ${theme.font.size.s};
    padding-right: ${theme.spacing.s};
    padding-left: ${theme.spacing.s};
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

const stylesBoxShadow = (isElevated, boxShadow) =>
  isElevated
    ? `
    box-shadow: ${boxShadow["0"]}
    &:hover {
      box-shadow: ${boxShadow["1"]}
    }
  `
    : "";

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

export { ButtonBasicStyled, LinkStyled, ButtonInnerStyled };
