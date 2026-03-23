import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@asgardeo/react-router';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import './App.css'

function App() {
  return (
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </header>
  )
}
export default App
