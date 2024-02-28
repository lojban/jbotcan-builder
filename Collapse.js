/* Fork of https://github.com/nkbt/react-collapse
 *******************************************************************************/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

class Collapse extends PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    springConfig: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  state = {
    from: 0,
    to: 0
  };

  componentDidMount () {
    const { isOpened } = this.props;

    // isOpened will be true on mount if window.innerWidth > 991px
    if (isOpened) {
      const collapseContentHeight = this.CollapseContent.clientHeight;

      this.setState({
        from: collapseContentHeight,
        to: collapseContentHeight
      });
    }
  }

  componentDidUpdate () {
    const { isOpened } = this.props;
    const collapseHeight = this.Collapse.clientHeight;
    const collapseContentHeight = isOpened ? this.CollapseContent.clientHeight : 0;

    if (collapseHeight !== collapseContentHeight) {
      // Only set state in componentDidUpdate in a PureComponent or use shouldComponentUpdate
      this.setState({
        from: collapseHeight,
        to: collapseContentHeight
      });
    }
  }

  // Motion passes an interpolatedStyle object to its child component
  // The properties are the same as the style object passed to Motion
  motionChildren = (interpolatedStyle) => {
    const { height } = interpolatedStyle;
    const { children, isOpened, springConfig, ...rest } = this.props;

    const collapseProps = {
      id: 'Collapse',
      ref: (Collapse) => { this.Collapse = Collapse; },
      style: { overflow: 'hidden', height: Math.max(0, height) }
    };

    const collapseContentProps = {
      id: 'CollapseContent',
      ref: (CollapseContent) => { this.CollapseContent = CollapseContent; }
    };

    return (
      <div {...collapseProps} {...rest}>
        <div {...collapseContentProps}>
          {children}
        </div>
      </div>
    );
  };

  render () {
    const { from, to } = this.state;
    const { springConfig } = this.props;

    // defaultStyle is the initial value for Motion to interpolate on mount
    // style is the value to interpolate on subsequent re-renders
    const motionProps = {
      defaultStyle: { height: from },
      style: { height: spring(to, { precision: 1, ...springConfig }) }
    };

    return (
      // Motion's child component must be a function
      <Motion {...motionProps}>
        {this.motionChildren}
      </Motion>
    );
  }
}

export default Collapse;
