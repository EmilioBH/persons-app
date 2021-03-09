import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Siderbar';

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
