import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  BreadcrumbsListStyled,
  BreadcrumbsElementStyled,
  LastItemStyled,
} from './styles'
import Link from '../../link/src'

const Breadcrumbs = ({
  items,
  theme,
} = props) => (
  <nav aria-label='breadcrumb' role='navigation'>
    <BreadcrumbsListStyled theme={theme}>
      {items.map(({url, label}, index) => {
        const isLastItem = (index + 1) >= items.length
        
        return (
          <BreadcrumbsElementStyled theme={theme} key={index}>
            {!isLastItem && (
              <BreadcrumbLink url={url} theme={theme}>
                {label}
              </BreadcrumbLink>
            )}

            {isLastItem && (
              <LastItemStyled theme={theme}>
                {label}
              </LastItemStyled>
            )}
          </BreadcrumbsElementStyled>
        )
      })}
    </BreadcrumbsListStyled>
  </nav>
)

const BreadcrumbLink = ({url, children, theme}) => (
  <Link color='secondary' url={url} theme={theme}>{children}</Link>
)

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired,

  theme: PropTypes.object,
}

export default Breadcrumbs