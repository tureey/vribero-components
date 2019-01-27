import React from "react";
import PropTypes from "prop-types";
import { LabelStyled, Title, HelpText, FormField, Error } from "./styles";

const Label = props => (
  <LabelStyled htmlFor={props.htmlFor} {...props}>
    <Title theme={props.theme}>{props.text}</Title>
    <HelpText theme={props.theme}>{props.help}</HelpText>
    <FormField theme={props.theme}>{props.children}</FormField>
    <Error theme={props.theme}>{props.error}</Error>
  </LabelStyled>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  help: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,

  theme: PropTypes.object
};

export default Label;
