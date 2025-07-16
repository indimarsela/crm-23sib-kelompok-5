import { MdSpaceDashboard } from "react-icons/md"; 
import { RiListOrdered } from "react-icons/ri"; 
import { AiFillCustomerService, AiFillSchedule } from "react-icons/ai"; 
import { MdOutlineManageAccounts, MdSpatialTracking } from "react-icons/md";
import { GrUnorderedList } from "react-icons/gr";
import {
  LayoutDashboard,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  User,
  MessageCircle,
  HeadsetIcon,
  LogOut,
} from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
  { name: "Produk", icon: <Box />, path: "/produk" },
  { name: "Order Management", icon: <RiListOrdered />, path: "/ordermanagement" },
  { name: "Lead Management", icon: <GrUnorderedList />, path: "/leadmanagement" },
  { name: "Account Management", icon: <MdOutlineManageAccounts />, path: "/accountmanagement" },
  { name: "Campaign Management", icon: <MdOutlineManageAccounts />, path: "/campaignmanagement" },
  { name: "Customer Segmentation", icon: <MdOutlineManageAccounts />, path: "/customersegmentation" },
  { name: "Email Campaign Management", icon: <TfiEmail />, path: "/emailcampaignmanagement" },
  { name: "Penjualan", icon: <ShoppingCart />, path: "/penjualan" },
  { name: "Feedback", icon: <MessageCircle />, path: "/feedback" },
  { name: "Helpdesk", icon: <HeadsetIcon />, path: "/helpdesk" },
  { name: "Pelanggan", icon: <User />, path: "/pelanggan" },
  { name: "Laporan", icon: <BarChart2 />, path: "/laporan" },
  { name: "Tracking", icon: <MdSpatialTracking />, path: "/tracking" },
  { name: "Self Service", icon: <AiFillCustomerService />, path: "/selfservice" },
  { name: "Complaint Tracker", icon: <MessageCircle />, path: "/complaint-tracker" },
  { name: "Order Form", icon: <GrUnorderedList />, path: "/orderform" },
  { name: "Schedule", icon: <AiFillSchedule />, path: "/schedulingassistant" },
  { name: "Auto Email Responder", icon: <TfiEmail />, path: "/autoemailresponder" },
  { name: "Visual Dashboard", icon: <MdSpaceDashboard />, path: "/visualdashboard" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("user"); // hapus data user
    navigate("/login"); // arahkan ke halaman login
  };

  return (
    <aside className="bg-white w-64 h-screen overflow-y-auto shadow-lg px-4 py-6 hidden md:block flex-shrink-0">
      <div className="mb-10 flex items-center gap-3">
        <img
          src="/LOGO_AA.png"
          alt="AA Catering Logo"
          className="h-14 w-auto"
        />
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={`${item.name}-${item.path}`}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f2d7d5] transition ${
              isActive(item.path)
                ? "bg-[#f5b7b1] text-[#7b241c] font-semibold"
                : "text-gray-700"
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        <Link
          to="/akun"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f2d7d5] transition ${
            isActive("/akun")
              ? "bg-[#f5b7b1] text-[#7b241c] font-semibold"
              : "text-gray-700"
          }`}
        >
          <span className="w-5 h-5"><Settings /></span>
          Pengaturan Akun
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f2d7d5] transition text-gray-700"
        >
          <span className="w-5 h-5"><LogOut /></span>
          Log Out
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
