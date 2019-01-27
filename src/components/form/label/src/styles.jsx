import styled from "@emotion/styled";

const LabelStyled = styled.label`
  display: block;

  + label {
    margin-bottom: ${props => props.theme.spacing.m};
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xxs};
  color: ${props => props.theme.palette.grey["800"]};
  font-size: ${props => props.theme.font.size.m};
  font-family: ${props => props.theme.font.family.primary};
  font-weight: ${props => props.theme.font.weight.medium};
  letter-spacing: 0.25px;

  + input,
  + textarea,
  + select {
    margin-bottom: ${props => props.theme.spacing.xs};
  }
`;

export { LabelStyled, Title };
