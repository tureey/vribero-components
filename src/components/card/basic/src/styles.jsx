import styled from "styled-components";
import { darken } from "polished";

const ButtonBasicStyled = styled.button`
  display: inline-block;
  box-sizing: border-box;
  min-width: 275px;
  border: ${props => `1px solid ${props.theme.colors.grey_light}`};
  border-radius: 3px;
  background: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.weight.m};

  button {
    cursor: pointer;
  }

  ${({ hasPadding, theme }) => stylesPadding(hasPadding, theme)};
`;

const stylesPadding = (hasPadding, theme) =>
  hasPadding ? `padding: ${theme.spacing.theme.padd.m}` : `padding: 0`;

export { ButtonBasicStyled, LinkStyled, ButtonInnerStyled };
