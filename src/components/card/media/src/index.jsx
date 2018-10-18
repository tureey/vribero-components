import React from "react";
import PropTypes from "prop-types";
import { CardStyled, MediaWrapper, ChildrenWrapper } from "./styles";

const CardMedia = ({ media, theme, children }) => (
  <CardStyled>
    <MediaWrapper theme={theme}>
      {overlay}
      {media}
    </MediaWrapper>

    <ChildrenWrapper theme={theme}>{children}</ChildrenWrapper>
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
