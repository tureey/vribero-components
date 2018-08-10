import { configure } from '@storybook/react';

function loadStories() {
  require('../studio/index.js');
}

configure(loadStories, module);