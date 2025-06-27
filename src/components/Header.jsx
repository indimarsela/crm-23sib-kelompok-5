import { Search, User } from 'lucide-react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Produk', path: '/produk' },
  { name: 'Order Management', path: '/ordermanagement' },
  { name: 'Lead Management', path: '/leadmanagement' },
  { name: 'Account Management', path: '/accountmanagement' },
  { name: 'Campaign Management', path: '/campaignmanagement' },
  { name: 'Customer Segementation', path: '/customersegmentation' },
  { name: 'Email Campaign Management', path: '/emailcampaignmanagement' },
  { name: 'Penjualan', path: '/penjualan' },
  { name: 'Feedback', path: '/feedback' },
  { name: 'Helpdesk', path: '/helpdesk' },
  { name: 'Pelanggan', path: '/pelanggan' },
  { name: 'Laporan', path: '/laporan' },
  { name: 'Tracking', path: '/tracking' },
  { name: 'Self Service', path: '/selfservice' },
  { name: 'Complaint Tracker', path: '/complaint-tracker' },
  { name: 'OrderForm', path: '/orderform' },
  { name: 'Schedule', path: '/schedulingassistant' },
  { name: 'Auto Email Responder', path: '/autoemailresponder' },
]

const Header = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const currentPage = menuItems.find(item => item.path === location.pathname)?.name || 'Unknown'
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleNavigate = (path) => {
    setQuery('')
    navigate(path)
  }

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#a52a2a] shadow-sm border-b sticky top-0 z-10 text-white">
      {/* Breadcrumb */}
      <div className="text-sm text-white/80">
        Pages / <span className="font-semibold">{currentPage}</span>
      </div>

      <div className="flex items-center gap-4 relative">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari menu..."
            className="px-4 py-2 pl-10 text-sm bg-white/10 border border-white rounded-full text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#d2691e]"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-white/80" />

          {query && (
            <ul className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto text-sm text-gray-800">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <li
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className="px-4 py-2 hover:bg-[#f2dede] cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-400">Menu tidak ditemukan</li>
              )}
            </ul>
          )}
        </div>

        {/* Sign In */}
        
      </div>
    </header>
  )
}

export default Header
