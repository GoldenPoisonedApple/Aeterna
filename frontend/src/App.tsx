import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// プレースホルダーコンポーネント
const DocumentViewer = ({ title }: { title: string }) => (
  <div style={{ padding: '2rem', border: '1px solid #333', background: '#111' }}>
    <h2 style={{ borderBottom: '1px solid #ff3333', paddingBottom: '0.5rem', color: '#e0e0e0' }}>{title}</h2>
    <div style={{ marginTop: '1rem', color: '#a0a0a0', fontFamily: 'serif' }}>
      <p>アクセス承認...</p>
      <p>データの復号化中...</p>
      <br/>
      <p>[ここに文書内容が表示されます]</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="docs/organization" element={<DocumentViewer title="主要構成員名簿及び組織図" />} />
        <Route path="docs/protocols" element={<DocumentViewer title="発動トリガー計画書" />} />
        <Route path="docs/history" element={<DocumentViewer title="Codica計画概要" />} />
        <Route path="settings" element={<DocumentViewer title="システム設定" />} />
        <Route path="*" element={<div style={{color: 'red'}}>404: DATA NOT FOUND</div>} />
      </Route>
    </Routes>
  );
}

export default App;
