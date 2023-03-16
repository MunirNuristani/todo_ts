import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/dashboard'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />} path="/" />
      </Routes>
    </Router>
  );
}
