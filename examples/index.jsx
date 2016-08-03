import React from 'react'
import { render } from 'react-dom'

import ProductSelector from './product-selector.jsx'
import '@alife/alpha-apollo/apollo.css'

import {
  Button,
  Icon,
} from '../src/index.jsx'

render(
  <div>
    <Button>
      I`m a button.
      <Icon type="alitalk" />
    </Button>

    <ProductSelector />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div>
      end
    </div>

  </div>,
  document.getElementById('app')
)
