import React from 'react';
import { storiesOf } from '@storybook/react';
import HelpText from '../../../src/components/form/helpText/src/index'
import Label from '../../../src/components/form/label/src/index'
import Input from '../../../src/components/form/input/src/index'

const stories = theme => (
  storiesOf('Form', module)
    .add('Input with label and help text', () => (
      <React.Fragment>
        <Label
          forInput='username'
          theme={theme}>
          Nombre de usuario
      </Label>
        <Input
          type='text'
          size='small'
          name='username'
          placeholder='Ej: John Doe'
          theme={theme}
        />
        <HelpText theme={theme}>
          Este es el nombre de usuario para nuestra app
      </HelpText>

        <Label
          forInput='password'
          theme={theme}>
          Nombre de usuario
      </Label>
        <Input
          type='password'
          required
          size='medium'
          name='password'
          placeholder='*****'
          theme={theme}
        />
        <HelpText theme={theme}>
          Este es el nombre de usuario para nuestra app
      </HelpText>

        <Label
          forInput='email'
          theme={theme}>
          Correo electrónico
      </Label>
        <Input
          type='text'
          size='large'
          name='email'
          placeholder='Ej: John Doe'
          theme={theme}
        />
        <HelpText theme={theme}>
          Este es el nombre de usuario para nuestra app
      </HelpText>
      </React.Fragment>
    ))
)

export default stories