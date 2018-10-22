import basic from './basic';

const sections = {
  top: {
    backgroundColor: basic.primaryColor,
  },
  header: {
    imageContainer: {
      borderRadius: '50%', display: 'block', width: '94px', height: '94px', overflow: 'hidden', margin: '0 auto',
    },
    image: {
      width: '100px',
      padding: '0 25px 10px',
    },
  },
  feedback: {
    icons: {
      default: {
        width: '56px',
        height: '56px',
        padding: '0px',
        paddingRight: '20px',
      },
      positive: {
        align: 'right',
        src: 'https://s3.amazonaws.com/geopagos/images/naranja/mailings/good.png',
      },
      negative: {
        align: 'left',
        src: 'https://s3.amazonaws.com/geopagos/images/naranja/mailings/bad.png',
      },
    },
  },
  body: {

  },
  map: {
  },
  bottom: {
    backgroundColor: basic.primaryColor,
  },
  footer: {
    logos: {
      container: {
        verticalAlign: 'middle',
      },
      client: {
        src: 'https://s3.amazonaws.com/geopagos/images/naranja/mailings/logo.png',
        width: 54,
      },
      poweredBy: {
        src: 'https://s3.amazonaws.com/geopagos/images/naranja/mailings/logo-geopagos.png',
        width: 97,
        paddingTop: 25,
      },
    },
    website: {
      color: basic.primaryColor,
      textDecoration: 'none',
    },
    background: '#f1f4f6',
  },
};

export default {
  sections,
  dateTime: {
    container: {
      border: '1px solid #cbdbe7',
      borderRadius: '24px',
    },
    text: {
      textAlign: 'center !important',
      color: basic.textColors.light,
      padding: 6,
    },
  },
  badge: {
    color: '#ff840f',
    backgroundColor: '#fef3e8',
  },
};
