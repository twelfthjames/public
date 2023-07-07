import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/header';
import Home from './components/home';

const GlobalStyle = createGlobalStyle`
  body {
    background: #DBD7CF;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  )
}

export default App;
