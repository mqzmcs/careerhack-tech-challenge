import { Route, Routes } from "react-router-dom";
import AllPhonesPage from './pages/AllPhonesPage'
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import './App.css'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/phones" element={<AllPhonesPage />} />
        <Route path="/phones/:id" element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
