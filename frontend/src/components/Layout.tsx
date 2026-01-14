import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ShieldAlert, FileText, Database, Settings, Shield } from 'lucide-react';
import './Layout.css';
import { Breadcrumbs } from './Breadcrumbs';

import Disclaimer from './Disclaimer';

const Layout: React.FC = () => {
	return (
		<div className="layout-container">
			<Disclaimer />
			<div className="scanline"></div>

			<aside className="sidebar">
				<div className="sidebar-header">
					<h1 className="sidebar-title"><a href="/">AETERNA</a></h1>
					<span className="sidebar-subtitle">CLASSIFIED ARCHIVE</span>
				</div>

				<nav className="nav-menu">
					<NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<Shield className="nav-icon" />
						<span>DASHBOARD</span>
					</NavLink>

					<div style={{ margin: '1rem 0 0.5rem', paddingLeft: '1rem', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
						PROJECT
					</div>

					<NavLink to="/docs/project-aeterna" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<Database className="nav-icon" />
						<span>AETERNA</span>
					</NavLink>

					<div style={{ margin: '1rem 0 0.5rem', paddingLeft: '1rem', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
						CODICA
					</div>

					<NavLink to="/docs/codica" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<FileText className="nav-icon" />
						<span>概要</span>
					</NavLink>
					<NavLink to="/docs/codica-charter" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<FileText className="nav-icon" />
						<span>憲章</span>
					</NavLink>
					<NavLink to="/docs/codica-plan" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<FileText className="nav-icon" />
						<span>計画書</span>
					</NavLink>

					<div style={{ margin: '1rem 0 0.5rem', paddingLeft: '1rem', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
						REFERENCES
					</div>

					<NavLink to="/docs/organization" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<Shield className="nav-icon" />
						<span>組織図・名簿</span>
					</NavLink>
					<NavLink to="/docs/protocols" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<ShieldAlert className="nav-icon" />
						<span>発動プロトコル</span>
					</NavLink>
					<NavLink to="/docs/security" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<ShieldAlert className="nav-icon" />
						<span>保安・誓約</span>
					</NavLink>
					<NavLink to="/docs/the-vault" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<Database className="nav-icon" />
						<span>保管施設 (Vault)</span>
					</NavLink>

					<NavLink to="/docs/final-record" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<ShieldAlert className="nav-icon" style={{ color: '#ff3333' }} />
						<span style={{ color: '#ff8888' }}>最終記録パッケージ</span>
					</NavLink>

					<div style={{ margin: '1rem 0 0.5rem', paddingLeft: '1rem', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase' }}>
						OTHERS
					</div>
					<NavLink to="/docs/chronicles" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
						<FileText className="nav-icon" />
						<span>遺す言葉 (Voices)</span>
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
					<Breadcrumbs />
					<div className="header-meta">
						<div className="classification-tag">TOP SECRET // EYES ONLY</div>
						<div className="user-status">OPERATOR: ADMIN_01</div>
					</div>
				</header>

				<div className="content-area">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
