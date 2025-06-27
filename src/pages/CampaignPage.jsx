import React, { useState, useEffect } from 'react';
import TriggerMarketing from './TriggerMarketing';

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    namaPromo: '', tipePromo: '', besarDiskon: '', viewers: 0, leads: 0, trend: [], status: 'On Going', link: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('campaigns');
    if (stored) setCampaigns(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  const filteredCampaigns = campaigns.filter(c => statusFilter === 'All' || c.status === statusFilter);
  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => sortOrder === 'desc' ? b.viewers - a.viewers : a.viewers - b.viewers);

  const renderStatusBadge = (status) => {
    const base = 'text-xs font-semibold px-3 py-1 rounded-full';
    if (status === 'On Going') return <span className={base + ' bg-green-100 text-green-800'}>{status}</span>;
    if (status === 'Expired') return <span className={base + ' bg-red-100 text-red-800'}>{status}</span>;
    return <span className={base + ' bg-gray-100 text-gray-800'}>{status}</span>;
  };

  const handlePlay = (id) => {
    setCampaigns(campaigns.map(c => c.id === id ? { ...c, status: 'On Going' } : c));
  };

  const handleStop = (id) => {
    setCampaigns(campaigns.map(c => c.id === id ? { ...c, status: 'Expired' } : c));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCampaigns([...campaigns, { ...form, id: Date.now(), viewers: 0, leads: 0, trend: [5, 10, 15, 20, 25] }]);
    setForm({ namaPromo: '', tipePromo: '', besarDiskon: '', viewers: 0, leads: 0, trend: [], status: 'On Going', link: '' });
    setShowForm(false);
  };

  const totalPages = Math.ceil(sortedCampaigns.length / itemsPerPage);
  const displayedCampaigns = sortedCampaigns.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
        <TriggerMarketing />

      <h1 className="text-2xl font-bold mb-6 text-[#7b241c]">Campaign Dashboard</h1>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter} className="border px-2 py-1 rounded text-[#7b241c]">
            <option value="All">All</option>
            <option value="On Going">On Going</option>
            <option value="Expired">Expired</option>
          </select>
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder} className="border px-2 py-1 rounded text-[#7b241c]">
            <option value="desc">Viewers ↓</option>
            <option value="asc">Viewers ↑</option>
          </select>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-[#7b241c] hover:bg-[#922b21] text-white px-4 py-2 rounded">Tambah Promo</button>
      </div>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="bg-white p-4 rounded shadow mb-6">
          <input type="text" name="namaPromo" value={form.namaPromo} onChange={handleFormChange} placeholder="Nama Promo" className="w-full mb-2 p-2 border rounded" required />
          <input type="text" name="tipePromo" value={form.tipePromo} onChange={handleFormChange} placeholder="Tipe Promo" className="w-full mb-2 p-2 border rounded" required />
          <input type="text" name="besarDiskon" value={form.besarDiskon} onChange={handleFormChange} placeholder="Besar Diskon" className="w-full mb-2 p-2 border rounded" required />
          <input type="text" name="link" value={form.link} onChange={handleFormChange} placeholder="Link" className="w-full mb-2 p-2 border rounded" required />
          <button type="submit" className="bg-[#7b241c] hover:bg-[#922b21] text-white px-4 py-2 rounded">Simpan</button>
        </form>
      )}

      <div className="bg-white rounded-lg shadow">
        {displayedCampaigns.map((c) => (
          <div key={c.id} className="flex items-center justify-between px-6 py-4 border-b hover:bg-gray-50">
            <div className="w-1 bg-[#7b241c] h-10 rounded-full mr-4"></div>
            <div className="flex-1">
              <h2 className="font-semibold text-sm text-[#7b241c]">{c.namaPromo}</h2>
              <p className="text-xs text-gray-500">{c.tipePromo} - {c.besarDiskon}</p>
            </div>
            <div className="text-center text-sm w-24">
              <div className="font-bold text-[#7b241c]">{c.viewers.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Today’s Reach</div>
            </div>
            <div className="text-center text-sm w-24">
              <div className="w-16 h-2 bg-gradient-to-r from-[#f5b7b1] to-[#922b21] rounded"></div>
            </div>
            <div className="text-center text-sm w-24">
              <div className="font-bold text-[#7b241c]">+{c.leads}</div>
              <div className="text-xs text-gray-500">Leads</div>
            </div>
            <div className="w-24 text-center">{renderStatusBadge(c.status)}</div>
            <div className="flex gap-2">
              <a href={c.link} target="_blank" rel="noreferrer" className="text-xs text-[#7b241c] underline">Visit</a>
              <button onClick={() => handlePlay(c.id)} className="bg-[#239b56] text-white px-2 py-1 rounded text-xs">Play</button>
              <button onClick={() => handleStop(c.id)} className="bg-[#c0392b] text-white px-2 py-1 rounded text-xs">Stop</button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center px-6 py-4 text-sm text-[#7b241c]">
          <div>Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, sortedCampaigns.length)} of {sortedCampaigns.length} results</div>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-2 py-1 border rounded ${p === currentPage ? 'bg-[#7b241c] text-white' : 'bg-white text-[#7b241c]'}`}>{p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CampaignPage;
