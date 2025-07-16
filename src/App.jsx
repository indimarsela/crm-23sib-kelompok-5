import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/MainLayout";
import CustomerLayout from "./components/CustomerLayout";

// Halaman Admin
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import Penjualan from "./pages/Penjualan"; // <--- PERBAIKAN DI SINI
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
import CustomerSegmentation from "./pages/CustomerSegmentation";
import CampaignPage from "./pages/CampaignPage";
import EmailCampaignManagement from "./pages/EmailCampaignManagement";
import VisualDashboard from "./pages/VisualDashboard";

// Halaman Customer
import HomeCustomer from "./pages/HomeCustomer";
import TentangKami from "./pages/TentangKami";
// import Layanan from "./pages/Layanan";
import MenuPaket from "./pages/MenuPaket";
import Galeri from "./pages/Galeri";
import Artikel from "./pages/Artikel";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";
import DetailPesanan from "./pages/DetailPesanan"; // <--- IMPORT BARU UNTUK DETAIL PESANAN

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
        <Route path="/customersegmentation" element={<CustomerSegmentation />} />
        <Route path="/campaignmanagement" element={<CampaignPage />} />
        <Route path="/emailcampaignmanagement" element={<EmailCampaignManagement />} />
        <Route path="/visualdashboard" element={<VisualDashboard />} />
      </Route>

      {/* ======= ROUTING CUSTOMER ======= */}
      {/* CustomerLayout akan membungkus semua halaman yang berada di bawahnya */}
      <Route path="/" element={<CustomerLayout />}>
        {/* Rute indeks akan menampilkan HomeCustomer saat berada di root path "/" */}
        <Route index element={<HomeCustomer />} />
        {/* Rute untuk halaman "Tentang Kami" */}
        <Route path="tentang" element={<TentangKami />} />
        {/* Rute untuk halaman "Menu & Paket" yang baru */}
        <Route path="menu-paket" element={<MenuPaket />} />
        {/* Jika Anda masih ingin mempertahankan rute "layanan" namun mengarah ke MenuPaket, Anda bisa pakai `element={<Navigate to="/menu-paket" replace />}` */}
        {/* <Route path="layanan" element={<MenuPaket />} /> */}
        {/* Rute untuk halaman "Galeri" */}
        <Route path="galeri" element={<Galeri />} />
        {/* Rute untuk halaman "Artikel" */}
        <Route path="artikel" element={<Artikel />} />
        {/* Rute untuk halaman "Kontak" */}
        <Route path="kontak" element={<Kontak />} />
        {/* Rute untuk halaman "Detail Pesanan" yang baru */}
        <Route path="detail-pesanan" element={<DetailPesanan />} /> {/* <--- RUTE BARU */}
      </Route>

      {/* ======= LOGIN ======= */}
      {/* Rute untuk halaman login, tidak menggunakan layout customer atau admin */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;