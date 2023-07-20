import React from 'react';
import logo from '../../assets/centime-logo.webp';

const Header = () => {
  return (
    <header className="bg-red-500 py-1">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Centime Logo" style={{ height: '4em', marginLeft: '9rem' }} />
          <p className="text-white text-sm ml-2">Cash Flow Matters</p>
        </div>
        <nav>
          {/* Add your navigation elements here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
