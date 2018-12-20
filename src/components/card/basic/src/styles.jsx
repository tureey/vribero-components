import styled from "@emotion/styled";

const CardStyled = styled.button`
  display: inline-block;
  box-sizing: border-box;
  min-width: 275px;
  border: ${props => `1px solid ${props.theme.palette.grey["200"]}`};
  border-radius: 3px;
  background: white;
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.weight.m};
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
    0 1px 2px rgba(102, 119, 136, 0.3);

  button {
    cursor: pointer;
  }

  ${({ hasPadding, theme }) => stylesPadding(hasPadding, theme)};
`;

const stylesPadding = (hasPadding, theme) =>
  hasPadding ? `padding: ${theme.spacing.theme.padd.m}` : `padding: 0`;

export { CardStyled };
