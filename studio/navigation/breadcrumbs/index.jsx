import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from '../../../src/components/navigation/breadcrumbs/src/index'

const items = [
  {url: '/home', label: 'Inicio'},
  {url: '/forum', label: 'Foro'},
  {url: '/forum/categories/id', label: 'Batallas navales'},
  {url: '/home', label: 'Inicio'},
  {url: '/forum', label: 'Foro'},
  {url: '/forum/categories/id', label: 'Batallas navales'},
]

const stories = theme => (
  storiesOf('Navigation', module)
  .add('Breadcrumbs', () => (
    <Breadcrumbs theme={theme} items={items}/>
  ))
)

  export default stories