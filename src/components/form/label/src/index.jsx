import React from "react";
import PropTypes from "prop-types";
import { LabelStyled, Title } from "./styles";

const Label = props => (
  <LabelStyled htmlFor={props.htmlFor} {...props}>
    <Title>{props.text}</Title>
    {props.children}
  </LabelStyled>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

  theme: PropTypes.object
};

export default Label;
