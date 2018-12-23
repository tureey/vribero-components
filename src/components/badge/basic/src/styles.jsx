import styled from "@emotion/styled";

const BadgeBasicStyled = styled.span`
  background: transparent;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.primary};
  line-height: normal;
  white-space: nowrap;
  font-weight: ${props => props.theme.font.weight.medium};
  color: white;
  background: ${props => props.theme.palette.primary["500"]};

  ${({ size, theme }) => stylesSizes(size, theme)};
  ${({ shape, theme }) => stylesShape(shape, theme)};
  ${({ color, theme }) => stylesColor(color, theme)};
`;

const stylesSizes = (_propSize, theme) =>
  _propSize === "small"
    ? `
      font-size: ${theme.font.size.xs};
      padding: ${theme.spacing.xxs} ${theme.spacing.xs};
    `
    : _propSize === "large"
    ? `
    font-size: ${theme.font.size.m};
    padding: ${theme.spacing.xs} ${theme.spacing.l};
    font-weight: ${props => props.theme.font.weight.bold};
    `
    : `
    font-size: ${theme.font.size.s};
    padding: ${theme.spacing.xxs} ${theme.spacing.xs};
      `;

const stylesShape = (shape, theme) =>
  shape === "square"
    ? `border-radius: ${theme.box.radius.none}`
    : shape === "pill"
    ? `border-radius: ${theme.box.radius.pill}`
    : `border-radius: ${theme.box.radius.rounded}`;

const stylesColor = (color, theme) =>
  color === "yellow"
    ? `
      background: ${theme.palette.accent.yellow["300"]};
      color:  ${theme.palette.accent.yellow["700"]};
    `
    : color === "red"
    ? `
      background: ${theme.palette.accent.red["300"]};
      color:  ${theme.palette.accent.red["700"]};
      `
    : `
      background: ${theme.palette.primary["300"]};
      color:  ${theme.palette.primary["700"]};
    `;

export { BadgeBasicStyled };
