import { MdOutlineManageAccounts } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { GrUnorderedList } from "react-icons/gr";
import { MdSpatialTracking } from "react-icons/md";
import {
    LayoutDashboard,
    Users,         // untuk pelanggan
    ShoppingCart,  // untuk penjualan
    Box,           // untuk produk
    BarChart2,     // untuk laporan
    Settings,      // untuk pengaturan akun
    User,
    LogIn,
    UserPlus,
    MessageCircle,
    Headset,
    HeadsetIcon,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
    { name: 'Produk', icon: <Box />, path: '/produk' },
    { name: 'Order Management', icon: <Box />, path: '/ordermanagement' },
    { name: 'Lead Management', icon: <GrUnorderedList />, path: '/leadmanagement' },
    { name: 'Account Management', icon: <MdOutlineManageAccounts />, path: '/accountmanagement' },
    { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
    { name: 'feedback', icon: <MessageCircle />, path: '/feedback' },
    { name: 'helpdesk', icon: <HeadsetIcon />, path: '/helpdesk' },
    { name: 'Penjualan', icon: <ShoppingCart />, path: '/Penjualan' },
    { name: 'Pelanggan', icon: <User />, path: '/pelanggan' },
    { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
    { name: 'Tracking', icon: <MdSpatialTracking />, path: '/tracking' },
    { name: 'OrderForm', icon: <GrUnorderedList />, path: '/orderform' },
    { name: 'Schedule', icon: <AiFillSchedule />, path: '/schedulingassistant' },
]

const accountItems = [
    { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
    { name: 'Sign In', icon: <LogIn />, path: '/signin' },
    { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
]

const Sidebar = () => {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <aside className="bg-white w-87 h-screen shadow-lg px-4 py-6 hidden md:block">
            <div className="mb-10 flex items-center gap-3">
                <img
                    src="/LOGO_AA.png"
                    alt="AA Catering Logo"
                    className="h-20 w-auto"
                />
                {/* <span className="text-xl font-bold text-red-600">A.A Catering</span> */}
            </div>
            <nav className="space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${isActive(item.path)
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
                {accountItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${isActive(item.path)
                            ? 'bg-purple-200 text-purple-800 font-semibold'
                            : 'text-gray-700'
                            }`}
                    >
                        <span className="w-5 h-5">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
