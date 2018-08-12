import React from 'react';
import { storiesOf } from '@storybook/react';
import PanelBasic from '../../../src/components/panel/basic/src/index'

const panelContent = () => (
  <div>this is the content of the panel</div>
)

const stories = theme => (
  storiesOf('Panel', module)
  .add('Basic', () => (
    <React.Fragment>
      <PanelBasic
        title='This is he title of the Panel'
        content={<div>this is the content of the panel</div>}
        colored
        theme={theme}/>

      <br/><br/>

      <PanelBasic
        title='This is he title of the Panel'
        content={<div>this is the content of the panel</div>}
        theme={theme}/>
    </React.Fragment>
  ))
)

  export default stories


  /* 

    1- CREAR PAQUETES DE NPM Y PUBLICARLOS.
      1.1- MIRAR SI PONER WEBPACK EN CADA UNO DE ELLOS O COMO HACERLO
      1.2- PULICARLOS
    2- MIRAR COMO USAR LERNA
    3- CREAR WEBAPP DE SGM
      3.1- CREAR PROYECTO EN GIT
      3.2- MIRAR QUE TODOS LOS PQUETES NPM FUNCIONAN
      3.3- EMPEZAR CON LA WEBAPP
      
  
  
  */