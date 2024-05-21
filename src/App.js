import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './pages/register/Registration';
import Dashboard from './Dashboard';
import NewTicket from './pages/newticket/NewTicket';
import Login from './pages/login/Login';
import Search from './pages/search/search';
import Preference from './pages/preference/preference';
import Companytickets from './pages/companytickets/companytickets';
function App() {
  return (
    <div className="App">
      <Routes path='/'>
        <Route index element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/newticket' element={<NewTicket/>}/>
        <Route path='/companytickets'element={<Companytickets/>}/>
        <Route path='/preference' element={<Preference/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
