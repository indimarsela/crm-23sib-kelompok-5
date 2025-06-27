import React, { useState } from 'react';

function AutoEmailResponder() {
  const [email, setEmail] = useState('');
  const [jenis, setJenis] = useState('menu');
  const [pesan, setPesan] = useState('');
  const [subject, setSubject] = useState('Welcome to KIRIM.EMAIL');
  const [status, setStatus] = useState('Published');
  const [delay, setDelay] = useState(0);
  const [unit, setUnit] = useState('Day(s)');
  const [responses, setResponses] = useState([]);
  const [activeTab, setActiveTab] = useState('content');
  const [selectedResponseIndex, setSelectedResponseIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      email,
      jenis,
      subject,
      pesan,
      status,
      delay,
      unit
    };

    setResponses([...responses, newEntry]);
    setSelectedResponseIndex(responses.length);
    setActiveTab('content');

    // Reset
    setEmail('');
    setJenis('menu');
    setPesan('');
    setSubject('Welcome to KIRIM.EMAIL');
    setStatus('Published');
    setDelay(0);
    setUnit('Day(s)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-[#a52a2a] to-white flex flex-col items-center justify-center px-6 py-12 space-y-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl p-6 border border-gray-200">
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded ${activeTab === 'content' ? 'bg-[#a52a2a] text-white' : 'bg-gray-200'}`}
            >
              Content
            </button>
            <button
              onClick={() => setActiveTab('setting')}
              className={`px-4 py-2 rounded ${activeTab === 'setting' ? 'bg-[#a52a2a] text-white' : 'bg-gray-200'}`}
            >
              Setting
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {activeTab === 'content' && (
            <>
              <div className="w-full md:w-1/3 border-r pr-4">
                <ul className="space-y-3 text-sm text-[#a52a2a]">
                  {responses.map((res, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer ${selectedResponseIndex === index ? 'font-semibold' : ''}`}
                      onClick={() => setSelectedResponseIndex(index)}
                    >
                      {res.subject}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                {selectedResponseIndex !== null ? (
                  <div className="space-y-2">
                    <p><strong>Status:</strong> {responses[selectedResponseIndex].status}</p>
                    <p><strong>Delay:</strong> {responses[selectedResponseIndex].delay} {responses[selectedResponseIndex].unit}</p>
                    <p><strong>Email:</strong> {responses[selectedResponseIndex].email}</p>
                    <p><strong>Jenis:</strong> {responses[selectedResponseIndex].jenis}</p>
                    <p><strong>Subject:</strong> {responses[selectedResponseIndex].subject}</p>
                    <p><strong>Content:</strong></p>
                    <p className="whitespace-pre-wrap">{responses[selectedResponseIndex].pesan}</p>
                  </div>
                ) : (
                  <p className="text-gray-500">Pilih autoresponder di sebelah kiri untuk melihat detailnya.</p>
                )}
              </div>
            </>
          )}

          {activeTab === 'setting' && (
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <label>Status</label>
                  <select
                    className="block p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                </div>

                <div>
                  <label>Delay Sending By</label>
                  <input
                    type="number"
                    value={delay}
                    onChange={(e) => setDelay(e.target.value)}
                    className="block p-2 border rounded w-20 focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                  />
                </div>

                <div>
                  <label>Unit</label>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="block p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                  >
                    <option>Day(s)</option>
                    <option>Hour(s)</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="ml-auto px-4 py-2 bg-[#a52a2a] text-white rounded hover:bg-[#922b2b]"
                >
                  Send Preview
                </button>
              </div>

              <div>
                <label>Email Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                />
              </div>

              <div>
                <label>Email Pengirim</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                  placeholder="contoh@pelanggan.com"
                  required
                />
              </div>

              <div>
                <label>Jenis Pertanyaan</label>
                <select
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                >
                  <option value="menu">Permintaan Menu</option>
                  <option value="harga">Pertanyaan Harga</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label>Email Content</label>
                <textarea
                  rows="6"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#a52a2a]"
                  placeholder="Tulis konten email di sini..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#a52a2a] text-white font-semibold py-2 px-6 rounded hover:bg-[#922b2b]"
              >
                Simpan
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AutoEmailResponder;
