import NavBar from "./components/NavBar";
import ProgrammingParachute from "./components/ProgrammingParachute";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from './components/EditUser';
import NotFound from './components/NotFound'; 


import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
       <Route path='/' element={<ProgrammingParachute />}/>
       <Route path='/all' element={<AllUsers />}/>
       <Route path='/add' element={<AddUser />}/>
       <Route path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
