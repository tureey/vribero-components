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
  border-radius: ${props.theme.box.radius.rounded};
  
  border: 1px solid ${props.theme.palette.grey["200"]};
  user-select: none;

  font-family: ${props.theme.font.family.primary};
  font-weight: ${props.theme.font.weight.medium};

  line-height: normal;
  white-space: nowrap;
  opacity: ${props.disabled ? 0.6 : 1};
  transition: background 0.15s ease, box-shadow 0.15s ease;
  cursor: ${props.disabled ? "not-allowed" : "pointer"};

  ${stylesColor(props.color, props.importance, props.theme)};
  ${stylesSizes(props.size, props.theme)};
  ${stylesBoxShadow(props.isElevated, props.theme.box.shadow)};
`;

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
      min-width: 50px;
      line-height: 1;
    `
    : `
      font-size: ${theme.font.size.m};
      padding-right: ${theme.spacing.s}  ;
      padding-left: ${theme.spacing.s} ;
      `;

const stylesBoxShadow = (_propsIsElevated, boxShadow) =>
  _propsIsElevated
    ? `
    box-shadow: ${boxShadow["700"]};
    &:hover {
      box-shadow: ${boxShadow["900"]};
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
          color: ${theme.palette.primary["700"]};
        fill: ${theme.palette.primary["700"]};
          border-color: ${theme.palette.primary["700"]};
        }
      `
    : _propColor === "primary" && _propImportance === "tertiary"
    ? `
        color: ${theme.palette.primary["500"]};
        fill: ${theme.palette.primary["500"]};
        background-color: transparent;
        border-color: transparent;

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

const leftIconWrapper = styled.span`
  margin-right: ${props => props.theme.spacing.xs};
`;
const rightIconWrapper = styled.span`
  margin-left: ${props => props.theme.spacing.xs};
`;
export {
  ButtonBasicStyled,
  LinkStyled,
  ButtonInnerStyled,
  leftIconWrapper,
  rightIconWrapper
};
