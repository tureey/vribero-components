import styled from "@emotion/styled";

const LabelStyled = styled.label`
  display: block;
  color: ${props => props.theme.palette.grey["900"]};
  font-size: ${props => props.theme.font.size.m};
  font-family: ${props => props.theme.font.family.main};
  font-weight: ${props => props.theme.font.weight.m};
  letter-spacing: 0.25px;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export { LabelStyled };
