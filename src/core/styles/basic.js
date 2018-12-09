const basic = {
  background: {
    body: '#f1f4f6',
  },
  primaryColor: '#0077CC',
  textColors: {
    normal: '#3b5c76',
    light: '#69869d',
    dark: '#1e2c3e',
    inverse: '#ffffff',
  },
};

const components = {
  container: {
    borderBottom: '8px solid #f1f4f6',
    backgroundColor: '#fff',
    padding: '46px 24px',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#cbdbe7',
    padding: '20px 4px',
  },
  text: {
    left: { align: 'left' },
    right: { align: 'right' },
    center: { align: 'center' },
    dark: { color: basic.textColors.dark },
    white: { color: 'white' },
    light: { color: basic.textColors.light },
    primary: { color: basic.primaryColor },
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
      color: basic.textColors.inverse,
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
  },
};

export default {
  ...basic,
  ...components,
};
