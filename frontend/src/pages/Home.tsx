import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">SYSTEM STATUS</h1>
        <p className="dashboard-subtitle">Project Aeterna Central Monitoring Interface</p>
      </div>

      <div className="info-card alert">
        <div className="card-header">
          <span className="card-title">PROJECT AETERNA</span>
          <span className="status-indicator status-active"></span>
        </div>
        <div className="card-content">
          <p>STATUS: ACTIVE / MONITORING</p>
          <p>PHASE: SURVEILLANCE</p>
          <br />
          <p>現在、プロジェクトAeternaはアクティブ状態です。主要構成員は監視下にあり、発動トリガーの予兆は検出されていません。</p>
        </div>
      </div>

      <div className="info-card">
        <div className="card-header">
          <span className="card-title">THREAT LEVEL</span>
          <span className="status-indicator status-warning"></span>
        </div>
        <div className="card-content">
          <div style={{ fontSize: '3rem', textAlign: 'center', color: '#ffaa00', fontWeight: 'bold' }}>
            III
          </div>
          <p style={{ textAlign: 'center' }}>MODERATE RISK DETECTED</p>
        </div>
      </div>

      <div className="info-card" style={{ gridColumn: '1 / -1' }}>
        <div className="card-header">
          <span className="card-title">RECENT ACTIVITY LOG</span>
        </div>
        <div className="card-content">
          <div className="log-entry">
            <span className="log-time">2026-01-15 08:30:00</span>
            <span className="log-message">システム起動確認。全セクター正常。</span>
          </div>
          <div className="log-entry">
            <span className="log-time">2026-01-14 23:45:12</span>
            <span className="log-message">暗号化通信パケットを受信。解析中...</span>
          </div>
          <div className="log-entry">
            <span className="log-time">2026-01-14 18:20:05</span>
            <span className="log-message">アーカイブ "Codica概要" へのアクセスを検知。</span>
          </div>
          <div className="log-entry">
            <span className="log-time">2026-01-14 12:00:00</span>
            <span className="log-message">定期バックアップ完了。整合性チェック通過。</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
