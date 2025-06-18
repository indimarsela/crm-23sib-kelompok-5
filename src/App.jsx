import { Routes, Route } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Dashboard from "./pages/Dashboard"
import CustomerManagement from "./pages/CustomerManagement"
import Feedback from "./pages/Feedback"
import Helpdesk from "./pages/Helpdesk"
import Pelanggan from "./pages/Pelanggan"
import LeadManagement from "./pages/LeadManagement"
import SchedulingAssistant from "./pages/SchedulingAssistant"
import ComplaintTracker from "./pages/ComplaintTracker"
import SelfService from "./pages/SelfService"
import AutoEmailResponder from "./pages/AutoEmailResponder"

import Produk from "./pages/Product"
import OrderManagement from "./pages/OrderManagement"
import Laporan from "./pages/Laporan"

function App() {

  return (

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        {/* <Route path="/Pelanggan" element={<CustomerManagement />} /> */}
        <Route path="/Penjualan" element={<Penjualan />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/pelanggan" element={<Pelanggan />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/LeadManagement" element={<LeadManagement />} />
        <Route path="/schedulingassistant" element={<SchedulingAssistant />} />
        <Route path="/complaint-tracker" element={<ComplaintTracker />} />
        <Route path="/selfservice" element={<SelfService />} />
        <Route path="/autoemailresponder" element={<AutoEmailResponder />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/OrderManagement" element={<OrderManagement />} />
        <Route path="/Laporan" element={<Laporan />} />

      </Route>
    </Routes>
  )
}

export default App
