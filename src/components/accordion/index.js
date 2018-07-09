import React, { Component } from 'react';
import './style.scss';

class Accordion extends Component {
  render() {
    return (
      <div className={"accordion " + this.props.className}>
        <button className="accordion__link">
          <span className="accordion__title">{this.props.title}</span>
        </button>
        <div className="accordion__panel">
          <div className="accordion__panel_inner" ref="inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
