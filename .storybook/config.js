import { configure } from '@storybook/react';

function loadStories() {
  require('../studio/index.js');
  require('../studio/button/basic/index.js');
}

configure(loadStories, module);