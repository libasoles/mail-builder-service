import React from 'react';

const injectProps = (children, props) => (typeof children === 'function'
  ? children(props)
  : React.Children.map(children, item => React.cloneElement(item, props)));

export default injectProps;
