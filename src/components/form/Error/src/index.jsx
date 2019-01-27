import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "./styles";

function Error({ children, theme }) {
  return <Text theme={theme}>{children}</Text>;
}

Error.propTypes = {
  theme: PropTypes.object
};

export default Error;
