import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'components/button/basic/src';

storiesOf('My Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))