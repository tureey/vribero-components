import React from 'react'
import PropTypes from 'prop-types'
import {
  PanelBasicStyled,
  PanelBasicHeaderStyled,
  PanelBasicTitleStyled,
  PanelBasicBodyStyled,
} from './styles'

const PanelBasic = props => (
  <PanelBasicStyled colored={props.colored} theme={props.theme} {...props}>
    <PanelBasicHeaderStyled theme={props.theme}>
      <PanelBasicTitleStyled theme={props.theme}>
        {props.title}
      </PanelBasicTitleStyled>
    </PanelBasicHeaderStyled>

    <PanelBasicBodyStyled theme={props.theme}>
      {props.content}
    </PanelBasicBodyStyled>
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