import styled from "@emotion/styled";

/*
 * The borderSize is how many pixels wider is the wrapper from the children
 */
const Wrapper = styled.span`
  padding: ${({ borderSize }) => `${borderSize}px`};

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

  ${({ borderColor, theme }) =>
    borderColor === "primary"
      ? `background: ${theme.palette.primary["500"]};`
      : borderColor === "grey"
      ? `background: ${theme.palette.grey["200"]};`
      : ``};
`;

const AvatarBasicStyled = styled.img`
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 500px;
`;
export { Wrapper, AvatarBasicStyled };
