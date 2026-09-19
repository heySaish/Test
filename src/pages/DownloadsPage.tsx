import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadsSection } from '../sections/DownloadsSection';

export const DownloadsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (path === 'changelog') {
      navigate('/changelog');
    } else {
      navigate('/' + path);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <DownloadsSection onNavigate={handleNavigate} />
    </div>
  );
};
