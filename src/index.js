/* eslint-disable no-undef */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import store from './store/configureStore';
import { Container } from './styled/IndexStyled';
import ContactFormContainer from './containers/ContactFormContainer';
import theme from './styled/theme';

// Reset CSS using styled-reset
const Reset = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Reset />
      <ThemeProvider theme={theme}>
        <Container>
          <ContactFormContainer />
        </Container>
      </ThemeProvider>
    </Fragment>
  </Provider>,
  document.getElementById('root'),
);
