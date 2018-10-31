import React from "react";
import PropTypes from "prop-types";
import { CardStyled } from "./styles";

const CardBasic = ({ hasPadding, theme, children }) => (
  <CardStyled hasPadding={hasPadding} theme={theme}>
    {children}
  </CardStyled>
);

CardBasic.propTypes = {
  hasPadding: PropTypes.bool,

  theme: PropTypes.object,
  children: PropTypes.node
};

CardBasic.defaultProps = {
  hasPadding: false
};

export default CardBasic;
