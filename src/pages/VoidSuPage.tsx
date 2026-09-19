import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VoidSuSection } from '../sections/VoidSuSection';

export const VoidSuPage: React.FC = () => {
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
      <VoidSuSection onNavigate={handleNavigate} />
    </div>
  );
};
