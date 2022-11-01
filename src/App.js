import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/login';
import { Register } from './components/register';
import { AuthProvider } from './context/authContext';
import { Home } from './components/home';
import { ProtectedRoute } from './components/protectedRoute';

function App() {
  return(
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path='/' element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            } />
          <Route path ='/login' element = {<Login/>} />
          <Route path ='/register' element = {<Register/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
