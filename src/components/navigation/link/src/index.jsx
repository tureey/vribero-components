import React from "react";
import PropTypes from "prop-types";
import { LinkStyled } from "./styles";

const Link = props => (
  <LinkStyled
    color={props.color}
    href={props.url}
    target={props.target}
    isUnderlined={props.isUnderlined}
    theme={props.theme}
    {...props} // We can use nofollow, no opener, no referrer..
  >
    {props.children}
  </LinkStyled>
);

Link.propTypes = {
  color: PropTypes.oneOf(["primary"]),
  url: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  target: PropTypes.oneOf(["_self", "_blank"]),

  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

Link.defaultProps = {
  color: "primary",
  isUnderlined: false,
  target: "_blank"
};

export default Link;
