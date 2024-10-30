import React, { useEffect, useRef, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './project.css';

function Project() {
    const [text] = useTypewriter({
        words: ['Beberapa project yang aku buat akhir-akhir ini'],
        typeSpeed: 70,
        delaySpeed: 200,
        deleteSpeed: 50,
    });

    return (
        <section>
            <div id="project" className="container-project">
            
                <h1 style={{ margin: '50px' }}>
                    <span className="static-text">Project </span>
                </h1>
                <p style={{color: "black"}}>
                    <span className="about-text">
                        {text}
                    </span>
                    <Cursor cursorStyle="|" cursorColor="red" />
                </p>
                <p style={{color: "black"}}>Website yang aku buat beberapa minggu lalu dengan tema beruang kutub: 
                     <a href="https://beruangkutub.vercel.app/" target="_blank" rel="noopener noreferrer"> beruang</a>
                   </p>
                   <p style={{color: "black"}}>Website promosi dengan teman: 
                        <a href="https://fess-bakery.vercel.app/" target="_blank" rel="noopener noreferrer"> bakery</a>
                    </p>
            </div>
            <div>
           
            </div>
        </section>
    );
}



export default Project;
