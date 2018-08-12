import styled from 'styled-components'
import { darken } from 'polished'

const LinkStyled = styled.a`
  font-family: ${props => props.theme.font.family.main};
  font-size: ${props => props.theme.font.size.m};
  font-weight: ${props => props.theme.font.size.s};
  transition: .15s ease all;
  cursor: pointer;
  text-decoration: ${props => props.underlined ? 'underlined' : 'none'};

  ${({color, theme}) =>
    color === 'primary'
      ? `
        color: ${theme.colors.primary}
        &:hover {
          color: ${darken(0.2, theme.colors.primary)}
        }
      `
    : color === 'secondary'
      ? `
        color: ${theme.colors.accent}
        &:hover {
          color: ${darken(0.2, theme.colors.accent)}
        }
      `
      : ``
  };
`
export {
  LinkStyled
}