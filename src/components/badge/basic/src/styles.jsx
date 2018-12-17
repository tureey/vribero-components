import styled from "@emotion/styled";

const BadgeBasicStyled = styled.span`
  background: none;
  font-size: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: ${props => props.theme.spacing.s};
  padding-left: ${props => props.theme.spacing.s};
  user-select: none;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: 300;
  line-height: normal;
  white-space: nowrap;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;
export { BadgeBasicStyled };
