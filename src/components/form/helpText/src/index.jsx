import React from "react";
import PropTypes from "prop-types";
import { HelpTextStyled } from "./styles";

const HelpText = props => (
  <HelpTextStyled {...props}>{props.children}</HelpTextStyled>
);

HelpText.propTypes = {
  theme: PropTypes.object
};

export default HelpText;
