import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DeviceSupportSection } from '../sections/DeviceSupportSection';

export const DevicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (path === 'downloads') {
      navigate('/downloads');
    } else {
      navigate('/' + path);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <DeviceSupportSection onNavigate={handleNavigate} />
    </div>
  );
};
