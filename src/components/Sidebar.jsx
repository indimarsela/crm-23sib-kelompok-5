import { AiFillCustomerService, AiFillSchedule } from "react-icons/ai";
import { MdOutlineManageAccounts, MdSpatialTracking } from "react-icons/md";
import { GrUnorderedList } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  User,
  MessageCircle,
  HeadsetIcon,
  LogOut,
} from 'lucide-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Order Management', icon: <Box />, path: '/ordermanagement' },
  { name: 'Lead Management', icon: <GrUnorderedList />, path: '/leadmanagement' },
  { name: 'Account Management', icon: <MdOutlineManageAccounts />, path: '/accountmanagement' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Feedback', icon: <MessageCircle />, path: '/feedback' },
  { name: 'Helpdesk', icon: <HeadsetIcon />, path: '/helpdesk' },
  { name: 'Pelanggan', icon: <User />, path: '/pelanggan' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Tracking', icon: <MdSpatialTracking />, path: '/tracking' },
  { name: 'Self Service', icon: <AiFillCustomerService />, path: '/selfservice' },
  { name: 'Complaint Tracker', icon: <MessageCircle />, path: '/complaint-tracker' },
  { name: 'OrderForm', icon: <GrUnorderedList />, path: '/orderform' },
  { name: 'Schedule', icon: <AiFillSchedule />, path: '/schedulingassistant' },
  { name: 'Auto Email Responder', icon: <TfiEmail />, path: '/autoemailresponder' },
];

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Log Out', icon: <LogOut />, path: '/logout' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("user"); // hapus data login
    navigate("/login"); // redirect ke login
  };

  return (
    <aside className="bg-white w-87 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="mb-10 flex items-center gap-3">
        <img
          src="/LOGO_AA.png"
          alt="AA Catering Logo"
          className="h-20 w-auto"
        />
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={`${item.name}-${item.path}`}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => {
          if (item.name === "Log Out") {
            return (
              <button
                key={`${item.name}-${item.path}`}
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition text-gray-700"
              >
                <span className="w-5 h-5">{item.icon}</span>
                {item.name}
              </button>
            );
          }

          return (
            <Link
              key={`${item.name}-${item.path}`}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
                isActive(item.path)
                  ? 'bg-purple-200 text-purple-800 font-semibold'
                  : 'text-gray-700'
              }`}
            >
              <span className="w-5 h-5">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
