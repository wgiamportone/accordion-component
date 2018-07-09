import React, { Component } from 'react';
import './scss/app.scss';
import Accordion from './components/accordion';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <Accordion className="grid-half" title="Section 1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisques commodo purus quis mi cursus hendrerit eu eu metus. Aliquam aliquam arcu eget aliquet scelerisque. Pellentesque sodales turpis vitae venenatis vehicula.</p>
          <p>Ut id porta velit. Ut eu dignissim dui, quis gravida est. Cras quis venenatis mauris, a bibendum enim. Sed at augue libero. Nullam tor tor metus, tincidunt ut urna id, posuere placerat orci. Ut quis risus dictum risus facilisis imperdiet quis sed eros.</p>
        </Accordion>
      </div>
    );
  }
}

export default App;
