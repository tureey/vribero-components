import styled from "@emotion/styled";

const HelpTextStyled = styled.span`
  display: block;
  margin-top: ${props => props.theme.spacing.xxs};
  color: ${({ theme }) => theme.palette.grey["700"]};
  font-size: ${props => props.theme.font.size.xs};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: ${props => props.theme.font.weight.light};
  font-style: italic;
  letter-spacing: 0.25px;

  + input,
  + textarea,
  + select {
    margin-top: ${props => props.theme.spacing.xs};
  }
`;

export { HelpTextStyled };
