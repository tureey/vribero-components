import React from "react";
import { storiesOf } from "@storybook/react";
import PanelBasic from "../../../src/components/panel/basic/src/index";

const stories = theme =>
  storiesOf("Panel", module).add("Basic", () => (
    <React.Fragment>
      <PanelBasic
        title="This is he title of the Panel"
        content={<div>this is the content of the panel</div>}
        colored
        theme={theme}
      />

      <br />
      <br />

      <PanelBasic
        title="This is he title of the Panel"
        content={<div>this is the content of the panel</div>}
        theme={theme}
      />
    </React.Fragment>
  ));

export default stories;
