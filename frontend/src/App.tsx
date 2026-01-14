import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { AeternaDoc } from './pages/AeternaDoc';
import { CodicaDoc } from './pages/CodicaDoc';
import './pages/Documents.css'; 

// プレースホルダーコンポーネント (まだ実装されていないもの用)
const DocumentPlaceholder = ({ title }: { title: string }) => (
  <div style={{ padding: '2rem', border: '1px solid #333', background: '#111' }}>
    <h2 style={{ borderBottom: '1px solid #ff3333', paddingBottom: '0.5rem', color: '#e0e0e0' }}>{title}</h2>
    <div style={{ marginTop: '1rem', color: '#a0a0a0', fontFamily: 'serif' }}>
      <p>STATUS: LOCKED [ENCRYPTED]</p>
      <p>Access to this file requires higher clearance.</p>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* 主要文書ルート */}
        <Route path="docs/project-aeterna" element={<AeternaDoc />} />
        <Route path="docs/codica" element={<CodicaDoc />} />
        
        {/* プレースホルダー・その他 */}
        <Route path="docs/organization" element={<DocumentPlaceholder title="主要構成員名簿及び組織図" />} />
        <Route path="docs/protocols" element={<DocumentPlaceholder title="発動トリガー計画書" />} />
        
        <Route path="settings" element={<DocumentPlaceholder title="SYSTEM CONFIGURATION" />} />
        <Route path="*" element={<div style={{color: 'red'}}>404: DATA NOT FOUND</div>} />
      </Route>
    </Routes>
  );
}

export default App;
