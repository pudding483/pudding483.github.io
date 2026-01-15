import Header from './components/Header/Header.jsx';
import BodyWrapper from './layouts/BodyWrapper/BodyWrapper.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';


function App() { /* Ties all component together */
  return (
    <div className="appContainer">
      <Header/>

      <BodyWrapper />
      {/* <Sidebar> + <Content> */}
      
      <Footer/>
    </div>
  );
}

export default App;