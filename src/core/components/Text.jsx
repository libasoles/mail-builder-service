import React from 'react';

import {
  MjmlText,
} from 'mjml-react';

const styles = {
  primaryColor: '#fe5000',
  textColors: {
    dark: '#1e2c3e',
    light: '#69869d',
    inverse: '#fff',
  },
};

/**
 * Semantic properties for Text formatting
 */

const semanticProps = {
  left: { align: 'left' },
  right: { align: 'right' },
  center: { align: 'center' },
  dark: { color: styles.textColors.dark },
  white: { color: 'white' },
  light: { color: styles.textColors.light },
  primary: { color: styles.primaryColor },
  bold: { fontWeight: 600 },
  h1: {
    fontSize: '24px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  h2: {
    fontWeight: 600,
    fontSize: '18px',
    paddingTop: '4px',
    paddingBottom: '4px',
    textTransform: 'uppercase',
  },
  h3: {
    fontWeight: 600,
    fontSize: '14px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  h4: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '22px',
  },
  h5: {
    fontSize: '14px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  h6: {
    fontSize: '14px',
    paddingTop: '4px',
    paddingBottom: '4px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  header: {
    fontSize: '15px',
    color: styles.textColors.inverse,
    padding: '12px',
    textTransform: 'uppercase',
  },
  huge: {
    fontSize: '20px',
    lineHeight: '26px',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  large: {
    fontSize: '18px',
    lineHeight: '24px',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  medium: {
    fontSize: '16px',
    lineHeight: '22px',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  normal: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  small: {
    fontSize: '12px',
    lineHeight: '15px',
  },
  tiny: {
    fontSize: '11px',
    lineHeight: '16px',
  },
};

/**
 * Text Component.
 * @param {number} [size] - Font size (Optional)
 * @param {Object} [children] - Children view (optional)
 * @param {string} value - Text value to render
 * @param {Object} [props] - Other props from Component declaration
 * @public
*/

const TextColumn = ({
  size, children, value, ...props
}) => {
  /**
   * Parsing of semantic properties with resolvedProps reduce. Returns props Object.
  */

  const resolvedProps = Object.keys(semanticProps).reduce((resolvedProps, key) => ({
    ...resolvedProps,
    ...(props[key] === true) ? semanticProps[key] : {},
  }), {});

  return (
    <MjmlText {...resolvedProps}>
      {children || value}
    </MjmlText>
  );
};

export default TextColumn;
export {
  semanticProps,
};
