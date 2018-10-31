import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../../../src/components/button/basic/src/index";

const stories = theme =>
  storiesOf("Button", module).add("Basic", () => (
    <React.Fragment>
      <h4>Primary buttons</h4>
      <span>small</span>
      &nbsp;
      <Button
        size="small"
        type="primary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="small"
        type="primary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="small"
        type="primary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <span>medium</span>
      &nbsp;
      <Button
        size="medium"
        type="primary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="medium"
        type="primary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="medium"
        type="primary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <span>large</span>
      &nbsp;
      <Button
        size="large"
        type="primary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="large"
        type="primary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="large"
        type="primary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <h4>Secondary buttons</h4>
      <span>small</span>
      &nbsp;
      <Button
        size="small"
        type="secondary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="small"
        type="secondary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="small"
        type="secondary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <span>medium</span>
      &nbsp;
      <Button
        size="medium"
        type="secondary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="medium"
        type="secondary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="medium"
        type="secondary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <span>large</span>
      &nbsp;
      <Button
        size="large"
        type="secondary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="large"
        type="secondary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        size="large"
        type="secondary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <h3>Links as buttons</h3>
      <Button
        link
        href="#"
        size="small"
        type="primary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="small"
        type="primary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="small"
        type="primary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        link
        href="#"
        size="medium"
        type="primary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="medium"
        type="primary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="medium"
        type="primary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        link
        href="#"
        size="large"
        type="primary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="large"
        type="primary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="large"
        type="primary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        link
        href="#"
        size="small"
        type="secondary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="small"
        type="secondary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="small"
        type="secondary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        link
        href="#"
        size="medium"
        type="secondary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="medium"
        type="secondary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="medium"
        type="secondary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
      <Button
        link
        href="#"
        size="large"
        type="secondary"
        importance="primary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="large"
        type="secondary"
        importance="secondary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      &nbsp;
      <Button
        link
        href="#"
        size="large"
        type="secondary"
        importance="terciary"
        theme={theme}
        onClick={action("clicked")}
      >
        Button
      </Button>
      <br />
      <br />
    </React.Fragment>
  ));

export default stories;
