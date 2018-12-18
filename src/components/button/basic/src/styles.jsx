import styled from "@emotion/styled";

const ButtonBasicStyled = styled.button`
  ${props => stylesCommon(props)};
`;
const LinkStyled = styled.a`
  text-decoration: none;
  ${props => stylesCommon(props)};
`;

const stylesCommon = props => `
  display: inline-block;
  min-width: 40px;
  width: ${props.fullWidth ? "100%" : "auto"};
  height: 40px;
  box-sizing: border-box;
  
  border: 1px solid ${props.theme.palette.grey["200"]};
  background: none;
  padding-top: 0 ${props.theme.spacing.s} 0 ${props.theme.spacing.s};
  user-select: none;

  font-family: ${props.theme.font.family.main};
  font-size: ${props.theme.font.size.m};
  font-weight: ${props.theme.font.weight.m};

  line-height: normal;
  white-space: nowrap;
  opacity: ${props.disabled ? 0.6 : 1};
  transition: 0.15s background-color all;
  cursor: ${props.disabled ? "not-allowed" : "pointer"};

  ${stylesColor(props.color, props.importance, props.theme)};
  ${stylesShape(props.shape, props.theme.box.radius)};
  ${stylesSizes(props.size, props.theme)};
  ${stylesBoxShadow(props.isElevated, props.theme.box.shadow)};
`;

const stylesShape = (_propShape, radius) =>
  _propShape === "rounded"
    ? `border-radius: ${radius.rounded}`
    : _propShape === "pill"
    ? `border-radius: ${radius.pill}`
    : `border-radius: ${radius.none}`;

const stylesSizes = (_propSize, theme) =>
  _propSize === "small"
    ? `
      font-size: ${theme.font.size.s};
      padding-right: ${theme.spacing.s};
      padding-left: ${theme.spacing.s};
      min-width: 32px;
    `
    : _propSize === "large"
    ? `
      font-size: ${theme.font.size.l};
      padding-right: ${theme.spacing.m};
      padding-left: ${theme.spacing.m};
      min-width: 48px;
    `
    : `
      font-size: ${theme.font.size.m};
      padding-right: ${theme.spacing.s}  ;
      padding-left: ${theme.spacing.s} ;
      `;

const stylesBoxShadow = (_propsIsElevated, boxShadow) =>
  _propsIsElevated
    ? `
    box-shadow: ${boxShadow["0"]}
    &:hover {
      box-shadow: ${boxShadow["1"]}
    }
  `
    : "";

const stylesColor = (_propColor, _propImportance, theme) =>
  _propColor === "primary" && _propImportance === "primary"
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
    : _propColor === "primary" && _propImportance === "secondary"
    ? `
        color: ${theme.palette.primary["500"]};
        fill: ${theme.palette.primary["500"]};
        background-color: transparent;
        border-color: ${theme.palette.primary["500"]};

        &:hover, &:focus {
          border-color: ${theme.palette.primary["700"]};
        }
      `
    : _propColor === "primary" && _propImportance === "tertiary"
    ? `
        color: ${theme.palette.primary["500"]};
        fill: ${theme.palette.primary["500"]};
        background-color: transparent;

        &:hover, &:focus {
          color: ${theme.palette.primary["700"]};
          fill: ${theme.palette.primary["700"]};
        }
      `
    : ``;

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
