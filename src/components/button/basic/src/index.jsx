import React from "react";
import PropTypes from "prop-types";
import {
  ButtonBasicStyled,
  LinkStyled,
  ButtonInnerStyled,
  LeftIconWrapper,
  RightIconWrapper
} from "./styles";

const ButtonBasic = ({
  size,
  type,
  color,
  importance,
  link,
  isElevated,
  fullWidth,
  disabled,
  onClick,
  leftIcon,
  rightIcon,
  href,
  theme,
  children
}) => {
  return !link ? (
    <ButtonBasicStyled
      size={size}
      type={type}
      color={color}
      importance={importance}
      isElevated={isElevated}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      theme={theme}
    >
      <InnerButton leftIcon={leftIcon} rightIcon={rightIcon} theme={theme}>
        {children}
      </InnerButton>
    </ButtonBasicStyled>
  ) : (
    <LinkStyled
      size={size}
      type={type}
      color={color}
      isElevated={isElevated}
      fullWidth={fullWidth}
      importance={importance}
      href={href}
      theme={theme}
    >
      <InnerButton leftIcon={leftIcon} rightIcon={rightIcon} theme={theme}>
        {children}
      </InnerButton>
    </LinkStyled>
  );
};

const InnerButton = ({ leftIcon, rightIcon, children, theme }) => (
  <ButtonInnerStyled theme={theme}>
    {leftIcon && <LeftIconWrapper theme={theme}>{leftIcon}</LeftIconWrapper>}
    <span>{children}</span>
    {rightIcon && (
      <RightIconWrapper theme={theme}>{rightIcon}</RightIconWrapper>
    )}
  </ButtonInnerStyled>
);

ButtonBasic.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  importance: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["square", "rounded", "pill"]),

  isElevated: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,

  theme: PropTypes.object.isRequired
};

ButtonBasic.defaultProps = {
  type: "button",
  color: "primary",
  importance: "primary",
  size: "medium",
  shape: "rounded",

  isElevated: true,
  fullWidth: false
};

export default ButtonBasic;
