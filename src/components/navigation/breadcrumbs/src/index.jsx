import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  BreadcrumbsListStyled,
  BreadcrumbsElementStyled,
  LastItemStyled
} from "./styles";
import Link from "vribero-component--navigation-link--themed/lib";

function Breadcrumbs(props) {
  return (
    <nav aria-label="breadcrumb" role="navigation">
      <BreadcrumbsList {...props} />
    </nav>
  );
}

function BreadcrumbsList(props) {
  return (
    <BreadcrumbsListStyled theme={props.theme}>
      {props.items.map(({ url, label }, index) => {
        const isLastItem = index === array.length - 1;
        return (
          <BreadcrumbsElementStyled theme={props.theme} key={index}>
            {!isLastItem && (
              <BreadcrumbLink url={url} theme={props.theme}>
                {label}
              </BreadcrumbLink>
            )}

            {isLastItem && (
              <LastItemStyled theme={props.theme}>{label}</LastItemStyled>
            )}
          </BreadcrumbsElementStyled>
        );
      })}
    </BreadcrumbsListStyled>
  );
}

function BreadcrumbLink({ url, children, theme }) {
  return (
    <Link target="_self" url={url} theme={theme}>
      {children}
    </Link>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired,

  theme: PropTypes.object.isRequired
};

export default Breadcrumbs;
