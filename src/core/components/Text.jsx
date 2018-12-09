import React from 'react';

import {
  MjmlText,
} from 'mjml-react';
import { withAppContext } from 'services/context';

/**
 * Text Component.
 * @param {number} [size] - Font size (Optional)
 * @param {Object} [children] - Children view (optional)
 * @param {string} value - Text value to render
 * @param {Object} [props] - Other props from Component declaration
 * @public
*/

const TextColumn = ({
  size, children, value, styles, ...props
}) => {
  /**
   * Parsing of semantic properties with resolvedProps reduce. Returns props Object.
  */

  const resolvedProps = Object.keys(styles.text).reduce((textProps, key) => ({
    ...textProps,
    ...(props[key] === true) ? styles.text[key] : {},
  }), {});

  return (
    <MjmlText {...resolvedProps}>
      {children || value}
    </MjmlText>
  );
};

export default withAppContext(TextColumn);
