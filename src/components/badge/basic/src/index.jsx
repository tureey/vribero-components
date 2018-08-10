import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({children, theme, ...props}) => (
  <span className={className}>{children}</span>
)

export default Badge

Badge.propTypes = {
  theme: PropTypes.object,
}