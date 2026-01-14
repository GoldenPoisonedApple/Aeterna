import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumbs.css';

const routeNameMap: Record<string, string> = {
  'docs': 'ARCHIVE',
  'project-aeterna': 'PROJECT AETERNA',
  'codica': 'CODICA (SUMMARY)',
  'codica-charter': 'CODICA CHARTER',
  'codica-plan': 'CODICA MASTER PLAN',
  'organization': 'PERSONNEL & ORG',
  'protocols': 'ACTIVATION PROTOCOLS',
  'security': 'SECURITY PROTOCOLS',
  'the-vault': 'FACILITY: THE VAULT',
  'chronicles': 'CHRONICLES',
  'final-record': 'FINAL RECORD',
  'settings': 'SYSTEM CONFIG'
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Home (Dashboard) is handled separately as the root icon
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <Link to="/" className="breadcrumb-item home-icon">
        <Home size={14} />
      </Link>
      
      {pathnames.length > 0 && <span className="breadcrumb-separator"><ChevronRight size={14}/></span>}

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const name = routeNameMap[value] || value.toUpperCase();

        return (
          <React.Fragment key={to}>
            {last ? (
              <span className="breadcrumb-item active" aria-current="page">
                {name}
              </span>
            ) : (
              <>
                <Link to={to} className="breadcrumb-item">
                  {name}
                </Link>
                <span className="breadcrumb-separator"><ChevronRight size={14} /></span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
