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
  const [showForm, setShowForm] = useState(true);

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
    setShowForm(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-red-900 to-white flex flex-col items-center justify-center px-6 py-12 space-y-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl p-6 border border-gray-200">
        {showForm ? (
          <>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Autoresponder title"
                className="w-full p-3 rounded-md border border-gray-300 mb-4"
              />
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Content</button>
                <button className="px-4 py-2 bg-gray-200 rounded">Setting</button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 border-r pr-4">
                <ul className="space-y-3 text-sm">
                  <li className="font-semibold">Welcome to KIRIM.EMAIL</li>
                  <li>Educate your audience</li>
                  <li>Educate your audience + introduce the product</li>
                  <li>Soft sell</li>
                  <li>Educate your audience</li>
                  <li>Hard sell</li>
                  <li>Soft sell</li>
                </ul>
              </div>

              <form className="w-full md:w-2/3 space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <label>Status</label>
                    <select
                      className="block p-2 border rounded w-full"
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
                      className="block p-2 border rounded w-20"
                    />
                  </div>

                  <div>
                    <label>Unit</label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="block p-2 border rounded"
                    >
                      <option>Day(s)</option>
                      <option>Hour(s)</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="ml-auto px-4 py-2 bg-blue-500 text-white rounded"
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
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label>Email Pengirim</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="contoh@pelanggan.com"
                    required
                  />
                </div>

                <div>
                  <label>Jenis Pertanyaan</label>
                  <select
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)}
                    className="w-full p-2 border rounded"
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
                    className="w-full p-3 border rounded"
                    placeholder="Tulis konten email di sini..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-900 text-white font-semibold py-2 px-6 rounded hover:bg-red-800"
                >
                  Simpan
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            {responses.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Hasil Respon</h2>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2">Email</th>
                      <th className="border px-4 py-2">Jenis</th>
                      <th className="border px-4 py-2">Subject</th>
                      <th className="border px-4 py-2">Delay</th>
                      <th className="border px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responses.map((item, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{item.email}</td>
                        <td className="border px-4 py-2">{item.jenis}</td>
                        <td className="border px-4 py-2">{item.subject}</td>
                        <td className="border px-4 py-2">{item.delay} {item.unit}</td>
                        <td className="border px-4 py-2">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-center">
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
                  >
                    Tambah Respon Baru
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AutoEmailResponder;