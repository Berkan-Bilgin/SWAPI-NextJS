import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-background h-60 text-white flex items-end justify-center py-6 relative ">
       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-100"></div>
       <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-black opacity-100"></div>
       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black opacity-100"></div>
       <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black opacity-100"></div>
      
    </footer>
  );
};

export default Footer;