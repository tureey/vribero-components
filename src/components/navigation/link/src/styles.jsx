import styled from "@emotion/styled";

const LinkStyled = styled.a`
  font-family: ${props => props.theme.font.family.main};
  font-weight: ${props => props.theme.font.weight.m};
  transition: 0.15s ease all;
  cursor: pointer;
  text-decoration: ${props => (props.isUnderlined ? "underline" : "none")};

  :hover {
    text-decoration: underline;
  }

  ${({ color, theme }) =>
    color === "primary"
      ? `
        color: ${theme.palette.primary["500"]}
        &:hover {
          color: ${theme.palette.primary["700"]}
        }
      `
      : ``};
`;
export { LinkStyled };
