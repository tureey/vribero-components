import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "../../../src/components/avatar/basic/src/index";

const img_src =
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350";

const stories = theme =>
  storiesOf("Avatar", module).add("Basic", () => (
    <React.Fragment>
      <span>Without border</span>
      &nbsp;
      <Avatar url={img_src} size="xsmall" theme={theme}>
        executive
      </Avatar>
      <Avatar url={img_src} size="small" theme={theme}>
        executive
      </Avatar>
      <Avatar url={img_src} size="medium" theme={theme}>
        executive
      </Avatar>
      <Avatar url={img_src} size="large" theme={theme}>
        executive
      </Avatar>
      <br />
      <br />
      <span>with border grey</span>
      &nbsp;
      <Avatar url={img_src} size="xsmall" theme={theme}>
        executive
      </Avatar>
      <Avatar url={img_src} size="small" theme={theme}>
        executive
      </Avatar>
      <Avatar url={img_src} size="medium" theme={theme}>
        executive
      </Avatar>
      <Avatar url={img_src} size="large" theme={theme}>
        executive
      </Avatar>
      <br />
      <br />
      <span>with border primary</span>
      &nbsp;
      <Avatar
        url={img_src}
        isBordered
        borderColor="primary"
        size="xsmall"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        isBordered
        borderColor="secondary"
        size="small"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        isBordered
        borderColor="success"
        size="medium"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        isBordered
        borderColor="danger"
        size="large"
        theme={theme}
      >
        executive
      </Avatar>
      <br />
      <br />
      <span>with border secondary</span>
      &nbsp;
      <Avatar
        url={img_src}
        isBordered
        borderColor="primary"
        size="xsmall"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        isBordered
        borderColor="secondary"
        size="small"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        isBordered
        borderColor="success"
        size="medium"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        isBordered
        borderColor="danger"
        size="large"
        theme={theme}
      >
        executive
      </Avatar>
      <span>Shape square</span>
      &nbsp;
      <Avatar
        url={img_src}
        shape="square"
        isBordered
        borderColor="primary"
        size="xsmall"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        shape="square"
        isBordered
        borderColor="secondary"
        size="small"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        shape="square"
        isBordered
        borderColor="success"
        size="medium"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        shape="square"
        isBordered
        borderColor="danger"
        size="large"
        theme={theme}
      >
        executive
      </Avatar>
      <span>Shape rounded</span>
      &nbsp;
      <Avatar
        url={img_src}
        shape="rounded"
        isBordered
        borderColor="primary"
        size="xsmall"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        shape="rounded"
        isBordered
        borderColor="secondary"
        size="small"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        shape="rounded"
        isBordered
        borderColor="success"
        size="medium"
        theme={theme}
      >
        executive
      </Avatar>
      <Avatar
        url={img_src}
        shape="rounded"
        isBordered
        borderColor="danger"
        size="large"
        theme={theme}
      >
        executive
      </Avatar>
    </React.Fragment>
  ));

export default stories;
