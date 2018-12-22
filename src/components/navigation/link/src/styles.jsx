import styled from "@emotion/styled";

const LinkStyled = styled.a`
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.palette.primary["500"]};
  text-decoration: ${({ isUnderlined }) =>
    isUnderlined ? "underline" : "none"};
  cursor: pointer;
  transition: text-decoration 0.15s ease;

  :hover {
    color: ${({ theme }) => theme.palette.primary["700"]};
    text-decoration: underline;
  }
`;
export { LinkStyled };
