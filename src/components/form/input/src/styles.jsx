import styled from 'styled-components'
import { darken } from 'polished'

const InputFlatStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: ${props => props.theme.colors.system};
  outline: none;
  font-family: ${props => props.theme.font.family.main};
  letter-spacing: 0.2px;
  font-weight: 300;

  ${({ appearance }) =>
    appearance === 'white'
      ? `
        background: white;
        &:focus {
          background: ${props => darken(0.15, white)};
        }
      `
      : appearance === 'grey'
        ? `
        background-color: ${props => props.theme.colors.grey};
          &:focus {
            background: ${props => darken(0.15, props.theme.colors.grey)};
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
  InputFlatStyled
}