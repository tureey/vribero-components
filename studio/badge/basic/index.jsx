import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Badge from "../../../src/components/badge/basic/src/index";

const stories = theme =>
  storiesOf("Badge", module).add("Basic", () => (
    <React.Fragment>
      <span>small</span>
      &nbsp;
      <Badge type="primary" size="small" theme={theme}>
        executive
      </Badge>
      <Badge type="secondary" size="small" theme={theme}>
        executive
      </Badge>
      <Badge type="success" size="small" theme={theme}>
        executive
      </Badge>
      <Badge type="danger" size="small" theme={theme}>
        executive
      </Badge>
      <br />
      <br />
      <span>medium</span>
      &nbsp;
      <Badge type="primary" size="medium" theme={theme}>
        executive
      </Badge>
      <Badge type="secondary" size="medium" theme={theme}>
        executive
      </Badge>
      <Badge type="success" size="medium" theme={theme}>
        executive
      </Badge>
      <Badge type="danger" size="medium" theme={theme}>
        executive
      </Badge>
      <br />
      <br />
      <span>large</span>
      &nbsp;
      <Badge type="primary" size="large" theme={theme}>
        executive
      </Badge>
      <Badge type="secondary" size="large" theme={theme}>
        executive
      </Badge>
      <Badge type="success" size="large" theme={theme}>
        executive
      </Badge>
      <Badge type="danger" size="large" theme={theme}>
        executive
      </Badge>
    </React.Fragment>
  ));

export default stories;
