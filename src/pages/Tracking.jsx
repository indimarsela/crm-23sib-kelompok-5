import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icon marker default fix (Leaflet icon problem in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const steps = [
  { status: 'Dipesan', icon: '🛒' },
  { status: 'Dikemas', icon: '📦' },
  { status: 'Dikirim', icon: '🚚' },
  { status: 'Sampai', icon: '🏠' },
];

// contoh data tracking, bisa kamu sesuaikan dari API atau props
const trackingData = {
  noPesanan: 'ABC123456',
  namaPenerima: 'Budi Santoso',
  alamat: 'Jl. Melati No 23, Jakarta Selatan',
  statusIndex: 2, // contoh sudah sampai "Dikirim"
  lokasiPenerima: { lat: -6.224, lng: 106.845 }, // koordinat lokasi
  kurirLokasi: { lat: -6.220, lng: 106.840 }, // posisi kurir sekarang (contoh)
};

const Tracking = () => {
  const [statusIndex, setStatusIndex] = useState(trackingData.statusIndex);

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '24px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f5f8fb',
        borderRadius: '16px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
      }}
    >
      <h2 style={{ color: '#003d80', fontWeight: '700', marginBottom: '16px' }}>
        Tracking Pesanan: {trackingData.noPesanan}
      </h2>

      <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
        <strong>Penerima:</strong> {trackingData.namaPenerima}
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
        <strong>Alamat Pengiriman:</strong> {trackingData.alamat}
      </p>

      {/* Step Progress */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px',
          position: 'relative',
          padding: '0 12px',
        }}
      >
        {/* garis progress */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '12px',
            right: '12px',
            height: '4px',
            background: '#ddd',
            borderRadius: '4px',
            zIndex: 0,
          }}
        />
        {/* progress fill */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '12px',
            width: `${(statusIndex / (steps.length - 1)) * 100}%`,
            height: '4px',
            background: '#0056b3',
            borderRadius: '4px',
            zIndex: 1,
            transition: 'width 0.3s ease',
          }}
        />

        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              flex: 1,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                margin: '0 auto 8px',
                borderRadius: '50%',
                backgroundColor: i <= statusIndex ? '#0056b3' : '#ddd',
                color: 'white',
                lineHeight: '40px',
                fontSize: '22px',
                transition: 'background-color 0.3s ease',
              }}
              aria-label={step.status}
              title={step.status}
            >
              {step.icon}
            </div>
            <div
              style={{
                fontWeight: i === statusIndex ? '700' : '400',
                color: i <= statusIndex ? '#003d80' : '#666',
                fontSize: '0.9rem',
                userSelect: 'none',
              }}
            >
              {step.status}
            </div>
          </div>
        ))}
      </div>

      {/* Maps */}
      <div style={{ height: '350px', borderRadius: '12px', overflow: 'hidden', marginBottom: '32px' }}>
        <MapContainer
          center={trackingData.lokasiPenerima}
          zoom={15}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marker lokasi penerima */}
          <Marker position={trackingData.lokasiPenerima}>
            <Popup>Lokasi Pengiriman</Popup>
          </Marker>

          {/* Marker lokasi kurir */}
          <Marker position={trackingData.kurirLokasi} >
            <Popup>Posisi Kurir</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Info tambahan */}
      <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.5' }}>
        Pesanan kamu saat ini dalam proses <strong>{steps[statusIndex].status}</strong>. Terima kasih telah memilih layanan kami!
      </p>
    </div>
  );
};

export default Tracking;
