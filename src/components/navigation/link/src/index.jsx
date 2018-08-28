import React from "react";
import PropTypes from "prop-types";
import { LinkStyled } from "./styles";

const Link = props => (
  <LinkStyled
    color={props.color}
    href={props.url}
    target={props.target}
    isUnderlined={props.underlined}
    theme={props.theme}
    {...props}
  >
    {props.children}
  </LinkStyled>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  title: PropTypes.string,
  isUnderlined: PropTypes.bool,
  target: PropTypes.oneOf(["_self", "_blank"]),

  theme: PropTypes.object
};

Link.defaultProps = {
  color: "primary",
  isUnderlined: false,
  target: "_blank"
};

export default Link;
