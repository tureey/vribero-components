import React from "react";
import PropTypes from "prop-types";
import { CardStyled, CardMediaStyled, CardContentStyled } from "./styles";

const CardMedia = ({ media, theme, children }) => (
  <CardStyled>
    <CardMediaStyled theme={theme}>
      {overlay}
      {media}
    </CardMediaStyled>

    <CardContentStyled theme={theme}>{children}</CardContentStyled>
  </CardStyled>
);

CardMedia.propTypes = {
  media: PropTypes.node.isRequired,
  overlay: PropTypes.node,

  theme: PropTypes.object,
  children: PropTypes.node.isRequierd
};

CardMedia.defaultProps = {
  overlay: null
};

export default CardMedia;
