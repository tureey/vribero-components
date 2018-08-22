import styled from 'styled-components'
import { darken } from 'polished'

const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: ${props => props.theme.colors.system};
  outline: none;
  font-family: ${props => props.theme.font.family.main};
  letter-spacing: 0.2px;
  font-weight: 300;
  box-shadow: 0 6px 8px rgba(102,119,136,.03), 0 1px 2px rgba(102,119,136,.3);
  background-color: ${props => props.theme.colors.grey};
  &:focus {
    background: ${props => darken(0.15, props.theme.colors.grey)};
  }
  
  & + label {
    margin-top: ${props => props.theme.spacing.marg.xl};
  }

  ${props =>
    props.appearance === 'white'
      ? `
        background: white;
        &:focus {
          background: ${props => darken(0.15, white)};
        }
      `
      : ``
  };

  ${({ shape }) =>
    shape === 'square'
      ? `border-radius: 0;`
      : shape === 'rounded'
        ? `border-radius: 2px`
        : shape === 'pill'
          ? `border-radius: 500px` : ``
  };
  
  ${({ size, theme }) =>
    size === 'small'
      ? `
        font-size: ${theme.font.size.xs};
        padding-top: ${theme.spacing.padd.s};
        padding-bottom: ${theme.spacing.padd.s};
        padding-right: ${theme.spacing.padd.s};
        padding-left: ${theme.spacing.padd.s};
      `
      : size === 'medium'
        ? `
        font-size: ${theme.font.size.s};
        padding-top: ${theme.spacing.padd.m};
        padding-bottom: ${theme.spacing.padd.m};
        padding-right: ${theme.spacing.padd.m};
        padding-left: ${theme.spacing.padd.m};
      `
        : size === 'large'
          ? `
        font-size: ${theme.font.size.m};
        padding-top: ${theme.spacing.padd.l};
        padding-bottom: ${theme.spacing.padd.l};
        padding-right: ${theme.spacing.padd.l};
        padding-left: ${theme.spacing.padd.l};
      ` : ``
  };
`

export {
  InputStyled
}