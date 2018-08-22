import styled from 'styled-components'
import { lighten, darken } from 'polished'

const AvatarBasicStyled = styled.img`
  border: 1px solid;
  border: ${props => props.isBordered ? '1px solid' : 'none'}
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  transition: .15s ease all;

  ${({size, theme}) =>
    size === 'xsmall'
      ? `
        width: 2rem;
        height: 2rem;
      `
    : size === 'medium'
      ? `
      width: 3rem;
      height: 3rem;
      `
    :  size === 'large'
      ? `
      width: 4rem;
      height: 4rem;
      `
    :  size === 'large'
      ? `
      width: 5rem;
      height: 5rem;
      `:``
  };

  ${({shape}) =>
    shape === 'square'
      ? `border-radius: 0;`
    : shape === 'rounded'
      ? `border-radius: 3px`
    : shape === 'pill'
      ? `border-radius: 500px` : ``
  };

  ${({type, theme}) =>
    type === 'primary'
      ? `
        color: white;
        fill: white;
        background-color: ${theme.colors.primary};
      `:
    type === 'secondary'
      ? `
        color: white;
        fill: white;
        background-color: ${theme.colors.accent};
      `:
    type === 'success'
      ? `
      color: white;
      fill: white;
      background-color: ${theme.colors.success};
      `:
    type === 'danger'
      ? `
      color: white;
      fill: white;
      background-color: ${theme.colors.danger};
      `:``
  };
`
export {
  AvatarBasicStyled
}