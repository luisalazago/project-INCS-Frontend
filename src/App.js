import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AuthProvider } from './context/authContext';
import { Home } from './components/home/home';
import Juego from './components/juego/inicio/juego';
import { ProtectedRoute } from './components/proute/protectedRoute';
import Jugando from './components/juego/Juego/jugando';
import JuegoTerm from './components/juego/terminado/terminado';

function App() {
  return(
    <div className='bg-slate-300 h-screen text-black flex fondo'>
      <AuthProvider>
        <Routes>
          <Route path='/' element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            } />
          <Route path ='/login' element = {<Login/>} />
          <Route path ='/register' element = {<Register/>} />
          <Route path ='/juego' element = { <Juego/> } />
          <Route path ='/juego/jugar' element = { <Jugando numero={1}/> } />
          <Route path ='/juego/terminado' element = { <JuegoTerm/> } />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
