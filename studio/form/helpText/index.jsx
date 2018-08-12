import React from 'react';
import { storiesOf } from '@storybook/react';
import HelpText from '../../../src/components/form/helpText/src/index'

const stories = theme => (
  storiesOf('Form', module)
  .add('HelpText', () => (
    <HelpText theme={theme}>
      This is a text made for help
    </HelpText>
  ))
)

  export default stories