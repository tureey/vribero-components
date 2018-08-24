import styled from 'styled-components'

const AvatarBasicStyled = styled.img`
  border: ${props => props.isBordered ? '1px solid' : 'none'};
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  transition: .15s ease all;

  ${({ size }) =>
    size === 'small'
      ? `
        width: 1.5rem;
        height: 1.5rem;
        `
      : size === 'medium'
        ? `
            width: 2.5rem;
            height: 2.5rem;
            `
        : size === 'large'
          ? `
            width: 3.5rem;
            height: 3.5rem;
            `: ``
  }

  ${({ shape }) =>
    shape === 'square'
      ? `border-radius: 0;`
      : shape === 'rounded'
        ? `border-radius: 3px`
        : shape === 'circle'
          ? `border-radius: 500px` : ``
  };

  ${({ borderColor, theme }) =>
    borderColor === 'primary'
      ? `border-color: ${theme.colors.primary};` :
      borderColor === 'secondary'
        ? `border-color: ${theme.colors.accent};` :
        borderColor === 'system'
          ? `border-color: ${theme.colors.system};` :
          borderColor === 'grey'
            ? `border-color: ${theme.colors.grey};` : ``
  };
`
export {
  AvatarBasicStyled
}