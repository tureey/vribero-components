import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../../../src/components/form/input/src/index'

const stories = theme => (
  storiesOf('Form', module)
  .add('Input', () => (
    <React.Fragment>
      <h4>Flat appearance inputs</h4>
      <span>small</span>&nbsp;
      <Input
        appearance='flat'
        type='text'
        size='small'
        name='name'
        placeholder='write sth..'
        theme={theme}
      /><br/><br/><span>medium</span>&nbsp;
      <Input
        appearance='flat'
        type='text'
        size='medium'
        name='name'
        placeholder='write sth..'
        theme={theme}
      /><br/><br/><span>large</span>&nbsp;
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