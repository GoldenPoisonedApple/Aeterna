import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { AeternaDoc } from './pages/docs/AeternaDoc';
import { CodicaDoc } from './pages/docs/codica/CodicaDoc';
import { CodicaCharter } from './pages/docs/codica/CodicaCharter';
import { CodicaPlan } from './pages/docs/codica/CodicaPlan';
import { OrganizationChart } from './pages/docs/OrganizationChart';
import { ActivationProtocols } from './pages/docs/ActivationProtocols';
import { SecurityProtocols } from './pages/docs/SecurityProtocols';
import { TheVault } from './pages/docs/TheVault';
import { Chronicles } from './pages/docs/Chronicles';
import { FinalRecordPackage } from './pages/docs/FinalRecordPackage';
import './pages/docs/Documents.css'; 

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
        <Route path="docs/codica-charter" element={<CodicaCharter />} />
        <Route path="docs/codica-plan" element={<CodicaPlan />} />
        
        {/* 実装済み文書 */}
        <Route path="docs/organization" element={<OrganizationChart />} />
        <Route path="docs/protocols" element={<ActivationProtocols />} />
        <Route path="docs/security" element={<SecurityProtocols />} />
        <Route path="docs/the-vault" element={<TheVault />} />
        <Route path="docs/chronicles" element={<Chronicles />} />
        <Route path="docs/final-record" element={<FinalRecordPackage />} />
        
        <Route path="settings" element={<DocumentPlaceholder title="SYSTEM CONFIGURATION" />} />
        <Route path="*" element={<div style={{color: 'red'}}>404: DATA NOT FOUND</div>} />
      </Route>
    </Routes>
  );
}

export default App;
