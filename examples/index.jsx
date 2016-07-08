import React from 'react'
import { render } from 'react-dom'

import '@alife/alpha-apollo/apollo.css'

import { Button, Icon } from '../src/index.jsx'

render(
  <div>
    <Button>
      I`m a button.
      <Icon type="alitalk" />
    </Button>
  </div>,
  document.getElementById('app')
)
