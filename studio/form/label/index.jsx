import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../../../src/components/form/label/src/index'
import Input from '../../../src/components/form/input/src/index'

const stories = theme => (
  storiesOf('Form', module)
  .add('Label', () => (
    <Label
      forInput='input_name'
      theme={theme}>
      Nombre de usuario
    </Label>
  ))
)

  export default stories