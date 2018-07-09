import React, { Component } from 'react';
import './style.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccordionOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isAccordionOpen: !prevState.isAccordionOpen,
      height: this.refs.inner.clientHeight
    }));
  }

  render() {
    return (
      <div className={"accordion " + this.props.className + (this.state.isAccordionOpen ? ' accordion--open' : ' accordion--closed')} >
        <button className="accordion__link" onClick={this.handleClick}>
          <span className="accordion__title">{this.props.title}</span>
        </button>
        <div className="accordion__panel" ref="AccordionInner" style={{height: (this.state.isAccordionOpen ? this.state.height : '0')}}>
          <div className="accordion__panel_inner" ref="inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
