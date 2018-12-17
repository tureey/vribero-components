import styled from "@emotion/styled";

const HelpTextStyled = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.grey["700"]};
  font-size: ${props => props.theme.font.size.xs};
  font-family: ${props => props.theme.font.family.main};
  font-weight: ${props => props.theme.font.weight.s};
  letter-spacing: 0.25px;
  margin-top: ${props => props.theme.spacing.xs};
  font-style: italic;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export { HelpTextStyled };
