import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import BodyWrapper from './layouts/BodyWrapper/BodyWrapper.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
    /* Ties all component together */
    return (
        <div className="appContainer">
            <Header />

            <Routes>
                <Route path="/" element={<BodyWrapper></BodyWrapper>}>
                    <Route index element={<Home></Home>} />
                    <Route path="archive" element={<Archive></Archive>} />
                    <Route path="about" element={<About></About>} />
                </Route>
            </Routes>

            <BodyWrapper />
            {/* <Sidebar> + <Content> */}

            <Footer />
        </div>
    );
}

export default App;
