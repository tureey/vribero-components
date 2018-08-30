import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  BreadcrumbsListStyled,
  BreadcrumbsElementStyled,
  LastItemStyled
} from "./styles";
import Link from "vribero-component--navigation-link--themed/lib";

const Breadcrumbs = props => (
  <nav aria-label="breadcrumb" role="navigation">
    <BreadcrumbsListStyled theme={props.theme}>
      {props.items.map(({ url, label }, index) => {
        const isLastItem = index + 1 >= props.items.length;

        return (
          <BreadcrumbsElementStyled theme={props.theme} key={index}>
            {!isLastItem && (
              <BreadcrumbLink
                color={props.color}
                target={props.target}
                url={url}
                theme={props.theme}
              >
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
  </nav>
);

const BreadcrumbLink = ({ color, target, url, children, theme }) => (
  <Link color={color} target={target} url={url} theme={theme}>
    {children}
  </Link>
);

Breadcrumbs.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  target: PropTypes.oneOf(["_self", "_blank"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string
    })
  ).isRequired,

  theme: PropTypes.object
};

Breadcrumbs.defaultProps = {
  color: "primary",
  target: "_self"
};

export default Breadcrumbs;
