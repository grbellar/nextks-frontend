import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { CareerSelectionPage } from './pages/CareerSelectionPage';
import { LoadingPage } from './pages/LoadingPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding/career" element={<CareerSelectionPage />} />
        <Route path="/onboarding/loading" element={<LoadingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
