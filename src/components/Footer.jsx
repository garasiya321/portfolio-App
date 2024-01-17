import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div>
        <hr style={{ borderColor: '#777' }} />
        <p style={{ margin: '10px 0', fontSize: '14px' }}>
          © {new Date().getFullYear()} <a href="https://www.example.com" style={{ color: '#fff', textDecoration: 'underline' }}>Dinesh Garashiya</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
