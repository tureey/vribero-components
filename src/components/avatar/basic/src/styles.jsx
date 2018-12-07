import styled from "@emotion/styled";

const AvatarBasicStyled = styled.img`
  border: ${props => (props.isBordered ? "1px solid" : "none")};
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  transition: 0.15s ease all;

  ${({ size }) =>
    size === "xsmall"
      ? `
    width: 1.5rem;
    height: 1.5rem;
    `
      : size === "small"
        ? `
        width: 2rem;
        height: 2rem;
        `
        : size === "medium"
          ? `
            width: 2.5rem;
            height: 2.5rem;
            `
          : size === "large"
            ? `
            width: 3.5rem;
            height: 3.5rem;
          `
            : size === "giant"
              ? `
            width: 10rem;
            height: 10rem;
            `
              : ``} ${({ shape }) =>
    shape === "square"
      ? `border-radius: 0;`
      : shape === "rounded"
        ? `border-radius: 3px`
        : shape === "circle"
          ? `border-radius: 500px`
          : ``};

  ${({ borderColor, theme }) =>
    borderColor === "primary"
      ? `border-color: ${theme.colors.primary};`
      : borderColor === "secondary"
        ? `border-color: ${theme.colors.accent};`
        : borderColor === "system"
          ? `border-color: ${theme.colors.system};`
          : borderColor === "grey"
            ? `border-color: ${theme.colors.grey};`
            : ``};
`;
export { AvatarBasicStyled };
