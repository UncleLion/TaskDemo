import { Routes, Route } from 'react-router-dom';
import LoginPage from './Header/LoginPage';
import ForgotPage from './Header/ForgotPage';
// import NotFound from './NotFound/NotFoundPage';
// import NotWorkingPage from './NotFound/NotWorkingPage';



function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<ForgotPage />} />
            {/* <Route path="/" element={<NotWorkingPage/>} /> */}
            {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>
    )
}

export default App