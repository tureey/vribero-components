import React from "react";
import PropTypes from "prop-types";
import { BadgeBasicStyled } from "./styles";

const BadgeBasic = ({ color, size, shape, children, theme }) => (
  <BadgeBasicStyled
    role="status"
    color={color}
    size={size}
    shape={shape}
    theme={theme}
  >
    <span>{children}</span>
  </BadgeBasicStyled>
);

BadgeBasic.propTypes = {
  color: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["square", "rounded", "pill"]),

  theme: PropTypes.object
};

BadgeBasic.defaultProps = {
  color: "primary",
  size: "small",
  shape: "rounded"
};

export default BadgeBasic;
