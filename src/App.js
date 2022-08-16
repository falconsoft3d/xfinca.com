import 'bootswatch/dist/flatly/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Expenses from './pages/Expenses';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {AuthProvider} from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactPage from './pages/ContactPage';
import Charges from './pages/Charges';
import Messages from './pages/Messages';
import Account from './pages/Account';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
        <ToastContainer/>
              <Routes>
              <Route path="/login" element={
                      <LoginPage />
                  }/>

              <Route path="/register" element={
                      <RegisterPage />
                  }/>  

              <Route path="/expenses" element={
                      <PrivateRoute>
                        <Expenses />
                      </PrivateRoute>
                  }/> 

              <Route path="/charges" element={
                      <PrivateRoute>
                        <Charges />
                      </PrivateRoute>
                  }/>

              <Route path="/messages" element={
                      <PrivateRoute>
                        <Messages />
                      </PrivateRoute>
                  }/>

              <Route path="/account" element={
                      <PrivateRoute>
                        <Account />
                      </PrivateRoute>
                  }/>  

              <Route path="/contact" element={
                        <ContactPage />
                  }/>  

                <Route path="/" element={
                      <HomePage />
                  }/>
              </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
