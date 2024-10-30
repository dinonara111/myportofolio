import React from 'react';
import './kontak.css';

function Kontak() {
  return (
    <section>
      <div id="kontak" className="container-kontak">
        <h2>Kontak</h2>
        <a href="https://x.com/hoshiyuoo" className="social-icon fa fa-twitter" target="_blank" ></a>
        <a href="https://elisaambarwati@gmail.com" target="_blank" className="social-icon fa fa-google"></a>
        <a href="https://www.instagram.com/shotagf/profilecard/?igsh=MTh4bnhlY205bDM4NQ%3D%3D" target="_blank" className="social-icon fa fa-instagram"></a>
        <a href="https://pin.it/6pJJKMV6X" className="social-icon fa fa-pinterest" target="_blank" ></a>
        <a href="https://github.com/dinonara111" className="social-icon fa fa-github" target="_blank" ></a>
      </div>
    </section>
  );
}

export default Kontak;