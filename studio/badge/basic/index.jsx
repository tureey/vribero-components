import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Avatar from '../../../src/components/avatar/basic/src/index'

const stories = theme => (
  storiesOf('Avatar', module)
    .add('Basic', () => (
      <React.Fragment>
        <span>Without border</span>&nbsp;
        <Avatar url={img_url} size='xsmall' theme={theme}>executive</Avatar>
        <Avatar url={img_url} size='small' theme={theme}>executive</Avatar>
        <Avatar url={img_url} size='medium' theme={theme}>executive</Avatar>
        <Avatar url={img_url} size='large' theme={theme}>executive</Avatar>
        <br /><br />
        <span>with border grey</span>&nbsp;
        <Avatar url={img_url} size='xsmall' theme={theme}>executive</Avatar>
        <Avatar url={img_url} size='small' theme={theme}>executive</Avatar>
        <Avatar url={img_url} size='medium' theme={theme}>executive</Avatar>
        <Avatar url={img_url} size='large' theme={theme}>executive</Avatar>
        <br /><br />
        <span>with border primary</span>&nbsp;
        <Avatar url={img_url} isBordered borderColor='primary' size='xsmall' theme={theme}>executive</Avatar>
        <Avatar url={img_url} isBordered borderColor='secondary' size='small' theme={theme}>executive</Avatar>
        <Avatar url={img_url} isBordered borderColor='success' size='medium' theme={theme}>executive</Avatar>
        <Avatar url={img_url} isBordered borderColor='danger' size='large' theme={theme}>executive</Avatar>
        <br /><br />
        <span>with border secondary</span>&nbsp;
        <Avatar url={img_url} isBordered borderColor='primary' size='xsmall' theme={theme}>executive</Avatar>
        <Avatar url={img_url} isBordered borderColor='secondary' size='small' theme={theme}>executive</Avatar>
        <Avatar url={img_url} isBordered borderColor='success' size='medium' theme={theme}>executive</Avatar>
        <Avatar url={img_url} isBordered borderColor='danger' size='large' theme={theme}>executive</Avatar>
        <span>Shape square</span>&nbsp;
        <Avatar url={img_url} shape='square' isBordered borderColor='primary' size='xsmall' theme={theme}>executive</Avatar>
        <Avatar url={img_url} shape='square' isBordered borderColor='secondary' size='small' theme={theme}>executive</Avatar>
        <Avatar url={img_url} shape='square' isBordered borderColor='success' size='medium' theme={theme}>executive</Avatar>
        <Avatar url={img_url} shape='square' isBordered borderColor='danger' size='large' theme={theme}>executive</Avatar>
        <span>Shape rounded</span>&nbsp;
        <Avatar url={img_url} shape='rounded' isBordered borderColor='primary' size='xsmall' theme={theme}>executive</Avatar>
        <Avatar url={img_url} shape='rounded' isBordered borderColor='secondary' size='small' theme={theme}>executive</Avatar>
        <Avatar url={img_url} shape='rounded' isBordered borderColor='success' size='medium' theme={theme}>executive</Avatar>
        <Avatar url={img_url} shape='rounded' isBordered borderColor='danger' size='large' theme={theme}>executive</Avatar>
      </React.Fragment>
    ))
)

export default stories