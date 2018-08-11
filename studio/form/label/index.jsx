import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../../../src/components/form/label/src/index'
import Input from '../../../src/components/form/input/src/index'


const stories = theme => (
  storiesOf('Form', module)
  .add('Label', () => (
    <React.Fragment>
      <Label
        forInput='input_name'
        theme={theme}>
        Nombre de usuario
      </Label>
      <Input
        appearance='flat'
        type='text'
        size='medium'
        name='name'
        placeholder='write sth..'
        theme={theme}
      />
      <br/><br/>
      <Label
        forInput='input_name'
        theme={theme}>
        Nombre de usuario
      </Label>
      <Input
        appearance='flat'
        type='text'
        size='large'
        name='name'
        placeholder='write sth..'
        theme={theme}
      />
    </React.Fragment>
  ))
)

  export default stories