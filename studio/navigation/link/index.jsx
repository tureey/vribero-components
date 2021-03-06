import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "../../../src/components/navigation/link/src/index";

const stories = theme =>
  storiesOf("Navigation", module).add("Link", () => (
    <React.Fragment>
      <Link url="google.es" title="Title of the link" theme={theme}>
        Basic link with secondary color
      </Link>
      <br />
      <br />
      <Link url="google.es" title="Title of the link" underlined theme={theme}>
        Underlined link with secondary color
      </Link>
      <br />
      <br />
      <Link
        url="google.es"
        title="Title of the link"
        color="primary"
        theme={theme}
      >
        Basic link with primary color
      </Link>
      <br />
      <br />
      <Link
        url="google.es"
        title="Title of the link"
        color="primary"
        underlined
        theme={theme}
      >
        Underlined link with primary color
      </Link>
    </React.Fragment>
  ));

export default stories;
