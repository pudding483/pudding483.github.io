import Header from './components/Header.jsx';
import BodyWrapper from './layouts/BodyWrapper/BodyWrapper.jsx';
import Footer from './components/Footer.jsx';

import './App.css';


function App() { /* Ties all component together */
  return (
    <>
      <Header/>

      <BodyWrapper />
      {/* <Sidebar> + <Content> */}
      
      <Footer/>
    </>
  );
}

export default App;