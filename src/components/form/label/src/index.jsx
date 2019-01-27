import React from "react";
import PropTypes from "prop-types";
import { LabelStyled, Title, Help, Error } from "./styles";

const Label = props => (
  <LabelStyled htmlFor={props.htmlFor} theme={props.theme} {...props}>
    <Title theme={props.theme}>{props.text}</Title>
    {help && <Help theme={props.theme}>{props.help}</Help>}
    {props.field}
    {error && <Error theme={props.theme}>{props.error}</Error>}
  </LabelStyled>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  help: PropTypes.string,
  field: PropTypes.node.isRequired,
  error: PropTypes.string,

  theme: PropTypes.object
};

export default Label;
