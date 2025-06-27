import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/MainLayout";
import CustomerLayout from "./components/CustomerLayout";

// Halaman Admin
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import Penjualan from "./pages/Penjualan";
import Tracking from "./pages/Tracking";
import OrderForm from "./pages/OrderForm";
import Feedback from "./pages/Feedback";
import Helpdesk from "./pages/Helpdesk";
import Pelanggan from "./pages/Pelanggan";
import LeadManagement from "./pages/LeadManagement";
import SchedulingAssistant from "./pages/SchedulingAssistant";
import ComplaintTracker from "./pages/ComplaintTracker";
import SelfService from "./pages/SelfService";
import AutoEmailResponder from "./pages/AutoEmailResponder";
import Produk from "./pages/Product";
import OrderManagement from "./pages/OrderManagement";
import Laporan from "./pages/Laporan";
import AccountManagement from "./pages/AccountManagement";

// Halaman Customer
import HomeCustomer from "./pages/HomeCustomer";
import TentangKami from "./pages/TentangKami";
import Layanan from "./pages/Layanan";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* ======= ROUTING ADMIN ======= */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pelanggan" element={<Pelanggan />} />
        <Route path="/penjualan" element={<Penjualan />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/orderform" element={<OrderForm />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/leadmanagement" element={<LeadManagement />} />
        <Route path="/schedulingassistant" element={<SchedulingAssistant />} />
        <Route path="/complaint-tracker" element={<ComplaintTracker />} />
        <Route path="/selfservice" element={<SelfService />} />
        <Route path="/autoemailresponder" element={<AutoEmailResponder />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/ordermanagement" element={<OrderManagement />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/accountmanagement" element={<AccountManagement />} />
      </Route>

      {/* ======= ROUTING CUSTOMER ======= */}
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<HomeCustomer />} />
        <Route path="tentang" element={<TentangKami />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="kontak" element={<Kontak />} />
      </Route>

      {/* ======= LOGIN ======= */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
