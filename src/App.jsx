import { createGlobalStyle } from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';


const GlobalStyle = createGlobalStyle`
  body {
    background: #FFF;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
