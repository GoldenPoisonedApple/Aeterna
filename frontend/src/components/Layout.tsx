import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ShieldAlert, FileText, Database, Settings, Shield } from 'lucide-react';
import './Layout.css';

import Disclaimer from './Disclaimer';

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <Disclaimer />
      <div className="scanline"></div>
      
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">AETERNA</h1>
          <span className="sidebar-subtitle">CLASSIFIED ARCHIVE</span>
        </div>

        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Shield className="nav-icon" />
            <span>DASHBOARD</span>
          </NavLink>
          
          <div style={{ margin: '1rem 0 0.5rem', paddingLeft: '1rem', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
            Documents
          </div>
          
          <NavLink to="/docs/project-aeterna" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Database className="nav-icon" />
            <span>PROJECT AETERNA</span>
          </NavLink>
          <NavLink to="/docs/codica" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText className="nav-icon" />
            <span>CODICA (概要)</span>
          </NavLink>
          <NavLink to="/docs/codica-charter" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText className="nav-icon" />
            <span>CODICA (憲章)</span>
          </NavLink>
          <NavLink to="/docs/codica-plan" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <FileText className="nav-icon" />
            <span>CODICA (計画書)</span>
          </NavLink>
          
          <div style={{ margin: '1rem 0 0.5rem', paddingLeft: '1rem', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
            Reference
          </div>

          <NavLink to="/docs/organization" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Shield className="nav-icon" />
            <span>組織図・名簿</span>
          </NavLink>
          <NavLink to="/docs/protocols" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
             <ShieldAlert className="nav-icon" />
            <span>発動プロトコル</span>
          </NavLink>
          
          <div style={{ marginTop: 'auto' }}></div>
          
          <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Settings className="nav-icon" />
            <span>SYSTEM CONFIG</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <p>SECURE CONNECTION: ESTABLISHED</p>
          <p>ID: 8829-X-ALPHA</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <div className="classification-tag">TOP SECRET // EYES ONLY</div>
          <div className="user-status">OPERATOR: ADMIN_01 | CLEARANCE: LEVEL 5</div>
        </header>

        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
