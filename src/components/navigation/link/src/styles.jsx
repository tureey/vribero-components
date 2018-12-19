import styled from "@emotion/styled";

const LinkStyled = styled.a`
  font-family: ${props => props.theme.font.family.main};
  font-weight: ${props => props.theme.font.weight.m};
  color: ${theme.palette.primary["500"]}
  text-decoration: ${({ isUnderlined }) =>
    isUnderlined ? "underline" : "none"};
  cursor: pointer;
  transition: text-decoration 0.15s ease;

  :hover {
    color: ${theme.palette.primary["700"]}
    text-decoration: underline;
  }
`;
export { LinkStyled };
