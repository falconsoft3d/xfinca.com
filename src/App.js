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
