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
        width: 20px;
        height: 20px;
        `
      : size === "small"
      ? `
        width: 25px;
        height: 25px;
        `
      : size === "medium"
      ? `
        width: 30px;
        height: 30px;
        `
      : `
        width: 40px;
        height: 40px;
      `}

  ${({ shape }) =>
    shape === "square"
      ? `border-radius: 0;`
      : shape === "rounded"
      ? `border-radius: 3px`
      : shape === "circle"
      ? `border-radius: 500px`
      : ``};

  ${({ borderColor, theme }) =>
    borderColor === "primary"
      ? `border-color: ${theme.palette.primary["500"]};`
      : borderColor === "grey"
      ? `border-color: ${theme.palette.grey["200"]};`
      : ``};
`;
export { AvatarBasicStyled };
