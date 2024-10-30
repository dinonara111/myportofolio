import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './about.css';



function About() {
    const [text] = useTypewriter({
        words: ['Aku adalah seorang pelajar di SMK Telekomunikasi Tunas Harapan di jurusan PPLG. Melihat bagaimana sekumpulan kode dapat diubah menjadi aplikasi fungsional yang dapat menyelesaikan masalah sehari-hari adalah hal yang sangat menginspirasi. aku ingin terus belajar dan mengembangkan kemampuan coding ku untuk menciptakan solusi-solusi inovatif yang dapat bermanfaat bagi banyak orang.'],
        typeSpeed: 70,
        delaySpeed: 200,
        deleteSpeed: 50,
    });

    return (
        <section>
            <div id="about" className="container-about">
            <img src="/images/2.png" alt="poto profil" />
                <h1 style={{ margin: '50px' }}>
                    <span className="static-text">Hii Aku Elisa Ambarwati  </span>
                </h1>
                <p style={{color:"white"}}>
                    <span className="about-text">
                        {text}
                    </span>
                    <Cursor cursorStyle="|" cursorColor="red" />
                </p>
                
            </div>
            <div>
           
            </div>
        </section>
    );
}

export default About;

