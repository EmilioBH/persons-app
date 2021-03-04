
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Sidebar from './Siderbar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout-container">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
