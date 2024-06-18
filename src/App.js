import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './routes/Login';
import LoginSeller from './routes/LoginSeller';
import LoginManager from './routes/LoginManager';
import LoginEditor from './routes/LoginEditor';
import SellerId from './routes/SellerId';
import ManagerId from './routes/ManagerId';
import SellerPw from './routes/SellerPw';
import ManagerPw from './routes/ManagerPw';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<div>gdgd</div>}></Route>

        {/* LOGIN */}
        <Route path='/login' element={<Login navigate={navigate} />} />
        <Route path='/login/seller' element={<LoginSeller />} />
        <Route path='/login/manager' element={<LoginManager />} />
        <Route path='/login/editor' element={<LoginEditor />} />

        {/* FIND ACC */}
        <Route path='/find/id/seller' element={<SellerId navigate={navigate} />} />
        <Route path='/find/id/manager' element={<ManagerId navigate={navigate} />} />
        <Route path='/find/pw/seller' element={<SellerPw navigate={navigate} />} />
        <Route path='/find/pw/manager' element={<ManagerPw navigate={navigate} />} />

        {/* 404 */}
        <Route path='*' element={
          <div>
            404 페이지임
          </div>
        } />
      </Routes>
      <Nav></Nav>
    </div>
  );
}

export default App;
