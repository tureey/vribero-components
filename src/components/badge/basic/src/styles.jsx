import styled from "@emotion/styled";

const BadgeBasicStyled = styled.span`
  background: transparent;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.primary};
  line-height: normal;
  white-space: nowrap;
  font-weight: ${props => props.theme.font.weight.medium};

  ${({ size, theme }) => stylesSizes(size, theme)};
`;

const stylesSizes = (_propSize, theme) =>
  _propSize === "small"
    ? `
      font-size: ${theme.font.size.xs};
      padding: ${theme.spacing.xs} ${theme.spacing.xxs};
    `
    : _propSize === "large"
    ? `
    font-size: ${theme.font.size.m};
    padding: ${theme.spacing.xs} ${theme.spacing.l};
    font-weight: ${props => props.theme.font.weight.bold};
    `
    : `
    font-size: ${theme.font.size.s};
    padding: ${theme.spacing.s} ${theme.spacing.xs};
      `;
export { BadgeBasicStyled };
