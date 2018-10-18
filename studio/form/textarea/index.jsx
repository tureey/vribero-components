import React from "react";
import { storiesOf } from "@storybook/react";
import Textarea from "../../../src/components/form/textarea/src/index";

const stories = theme =>
  storiesOf("Form", module).add("Textarea", () => (
    <React.Fragment>
      <h4>Flat appearance inputs</h4>
      <span>small</span>
      &nbsp;
      <Textarea
        type="text"
        size="small"
        name="name"
        placeholder="write sth.."
        theme={theme}
      />
      <br />
      <br />
      <span>medium</span>
      &nbsp;
      <Textarea
        type="text"
        size="medium"
        name="name"
        placeholder="write sth.."
        theme={theme}
      />
      <br />
      <br />
      <span>large</span>
      &nbsp;
      <Textarea
        type="text"
        size="large"
        name="name"
        placeholder="write sth.."
        theme={theme}
      />
    </React.Fragment>
  ));

export default stories;
