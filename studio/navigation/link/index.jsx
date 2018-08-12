import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../../src/components/navigation/link/src/index'

const stories = theme => (
  storiesOf('Navigation', module)
  .add('Link', () => (
    <Link url='google.es' theme={theme}>
      go to google
    </Link>
  ))
)

  export default stories