import React from 'react'
import PropTypes from 'prop-types'
import {
  PanelBasicStyled,
  PanelBasicHeaderStyled,
  PanelBasicTitleStyled,
  PanelBasicBodyStyled,
} from './styles'

const PanelBasic = ({title, content, colored, theme} = props) => (
  <PanelBasicStyled colored={colored} theme={theme} {...props}>
    <PanelBasicHeaderStyled theme={theme}>
      <PanelBasicTitleStyled theme={theme}>
        {title}
      </PanelBasicTitleStyled>
    </PanelBasicHeaderStyled>

    <PanelBasicBodyStyled theme={theme}>{content}</PanelBasicBodyStyled>
  </PanelBasicStyled>
)

PanelBasic.propTypes = {
  colored: PropTypes.bool,

  theme: PropTypes.object,
}

PanelBasic.defaultProps = {
  colored: false,
};

export default PanelBasic