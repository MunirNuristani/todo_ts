import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../dashboard'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />} path="/" />
      </Routes>
    </Router>
  );
}
