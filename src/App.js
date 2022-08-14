import 'bootswatch/dist/flatly/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Expenses from './pages/Expenses';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
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

              <Route path="/" element={
                    <HomePage />
                }/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
