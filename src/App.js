import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import OTPPage from './Pages/OTPPage/OTPPage';
import RegisterInfo from './Pages/RegisterInfo/RegisterInfo';
import Dashboard from './Pages/Dashboard/Dashboard';
import SideNav from './Pages/Shared/SideNav/SideNav';
import Hrm from './Pages/Hrm/Hrm';
import AddStock from './AddStock/AddStock';

function App() {
  const PrivateLayout = ({ children }) => {
    return (

      <div className="App">

        <SideNav>
          {children}
        </SideNav>
      </div>

    )
  }

  return (
    <div className="App">
      <Routes>


        <Route path='/' element={<LandingPage />} />
        <Route path='/OTP' element={<OTPPage />} />
        <Route path='/register' element={<RegisterInfo />} />
        <Route path='/dashboard' element={<PrivateLayout><Dashboard /></PrivateLayout>} />
        <Route path='//add-stock' element={<PrivateLayout><AddStock /></PrivateLayout>} />
        <Route path='/hrm' element={<PrivateLayout><Hrm /></PrivateLayout>} />
      </Routes>

    </div>
  );
}

export default App;
