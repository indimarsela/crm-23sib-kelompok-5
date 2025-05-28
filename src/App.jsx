import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import CustomerManagement from "./pages/CustomerManagement"
import SalesManagement from "./pages/Penjualan"
import Penjualan from "./pages/Penjualan"
import Tracking from "./pages/Tracking"
import OrderForm from "./pages/OrderForm"

function App() {

  return (

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Pelanggan" element={<CustomerManagement />} />
        <Route path="/Penjualan" element={<Penjualan />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/OrderForm" element={<OrderForm />} />
      </Route>
    </Routes>
  )
}

export default App
