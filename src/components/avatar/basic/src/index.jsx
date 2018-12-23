import React from "react";
import PropTypes from "prop-types";
import { Wrapper, AvatarBasicStyled } from "./styles";

const AvatarBasic = ({ src, alt, size, borderSize, borderColor, theme }) => (
  <Wrapper
    size={size}
    borderSize={borderSize}
    borderColor={borderColor}
    theme={theme}
  >
    <AvatarBasicStyled role="status" src={src} alt={alt} theme={theme} />
  </Wrapper>
);

AvatarBasic.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large"]),
  borderSize: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  borderColor: PropTypes.oneOf(["primary", "grey"]),

  theme: PropTypes.object
};

AvatarBasic.defaultProps = {
  size: "small",
  borderSize: 0,
  borderColor: "grey"
};

export default AvatarBasic;
