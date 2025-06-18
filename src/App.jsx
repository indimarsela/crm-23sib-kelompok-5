import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import SalesManagement from "./pages/Penjualan"
import Penjualan from "./pages/Penjualan"
import Pelanggan from "./pages/Pelanggan"
import CampaignPage from "./pages/CampaignPage"
import SignInPage from "./pages/SignInPage"
import AuthLayout from "./components/AuthLayout"
import CustomerSegmentation from "./pages/CustomerSegmentation"

function App() {

  return (

     <Routes>
      {/* Route khusus Auth (SignInPage) */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignInPage />} />
      </Route>

    
      <Route element={<MainLayout />}>
        <Route path="/" element={<SignInPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Penjualan" element={<Penjualan />} />
        <Route path="/Pelanggan" element={<Pelanggan />} />
        <Route path="/CampaignPage" element={<CampaignPage />} />
        <Route path="/CustomerSegmentation" element={<CustomerSegmentation />} />
      </Route>
    </Routes>
  )
}

export default App
