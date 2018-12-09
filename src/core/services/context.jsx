import React from 'react';
import PropTypes from 'prop-types';

const StylesContext = React.createContext({});
const ConfigContext = React.createContext({});
const I18nContext = React.createContext({});
const RequestDataContext = React.createContext({});


const AppContextProvider = ({
  styles, config, i18n, data, children,
}) => (
  <StylesContext.Provider value={styles}>
    <ConfigContext.Provider value={config}>
      <I18nContext.Provider value={i18n}>
        <RequestDataContext.Provider value={data}>
          {children}
        </RequestDataContext.Provider>
      </I18nContext.Provider>
    </ConfigContext.Provider>
  </StylesContext.Provider>
);

AppContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
  config: PropTypes.shape({}).isRequired,
  i18n: PropTypes.func.isRequired,
  styles: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};

const withAppContext = (Component) => {
  return function WrappedComponent(props) {
    return (
      <StylesContext.Consumer>
        {styles => (
          <ConfigContext.Consumer>
            {config => (
              <I18nContext.Consumer>
                {t => (
                  <RequestDataContext.Consumer>
                    {data => (
                      <Component {...props} config={config} styles={styles} t={t} data={data} />
                    )}
                  </RequestDataContext.Consumer>
                )}
              </I18nContext.Consumer>
            )
            }
          </ConfigContext.Consumer>
        )}
      </StylesContext.Consumer>
    );
  };
}

export {
  AppContextProvider,
  withAppContext,
};
