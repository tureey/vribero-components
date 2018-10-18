import React from "react";
import PropTypes from "prop-types";
import { ButtonBasicStyled, LinkStyled, ButtonInnerStyled } from "./styles";

const CardBasic = ({ closable, hasPadding, theme, children }) => (
  <ButtonBasicStyled hasPadding={hasPadding} closable={closable} theme={theme}>
    {children}
  </ButtonBasicStyled>
);

CardBasic.propTypes = {
  closable: PropTypes.bool,
  hasPadding: PropTypes.bool,

  theme: PropTypes.object,
  children: PropTypes.node
};

CardBasic.defaultProps = {
  closable: true,
  hasPadding: false
};

export default CardBasic;
