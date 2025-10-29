import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import students1 from './assets/students-01.jpeg';
//import students2 from './assets/students-02.jpg';
//import ist_process_gif from './assets/indicator-selection-tool-process.gif'

//import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'


const App = () => {

    return (
        
        
    //START//
    <div>

    <Navbar />
        

    {/* Contect panel = Start */}
        
    <div class="content p-5">
        
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-4 text-center p-3">
                    <div class="rounded-panel p-4 d-flex align-items-center">
                    <p class="mb-0">
                        <big>Hello, I’m Steven,</big><br/> a Senior Graphic Designer based in Sydney, NSW.
                    </p>
                    </div>
                </div>
                <div class="col-lg-8">
                    <p>
                        With over 15 years of experience in digital design, I’ve had the privilege of working on creative projects for leading organisations including Reader’s Digest, Telstra, Australia Post, and the NSW Government. 
                    </p>
                    <p>
                        My work spans concept development, visual storytelling, and user-focused design solutions that bring ideas to life across digital platforms.
                    </p>
                    <p>
                        While digital design is my specialty, I’m also passionate about music, soccer, and spending quality time with my family — all of which inspire my creativity and keep me grounded.
                    </p>
                </div>
            </div>
        </div>

        <div class="container pt-5">
        
            <div class="row">
        
                <div class="col-lg-4 col-sm-6 text-left">
        
                    <div class="position-sticky top-0 end-0">
                        <h2>
                            User interface
                        </h2>
                        <p>
                            Is my current discipline, combining the web and marketing experience I have accrued over the course of my career. This includes optimising design for best user experience, utilising research and best practices as a guide, and also translating mock up designs into HTML code and CSS styling. 
                        </p>
                    </div>
                </div>

                <div class="col-lg-8 col-sm-6 text-left">
                        <img class="col-md-6 col-sm-12" alt="Portfolio piece 01" src="https://cdn.myportfolio.com/d2b535fc3eee6bfea5e300a810238ac7/f73c0eeb-ec0e-41c8-9a59-c2398fa2bf45_rw_1920.jpg?h=ed6023291be69e7c125b1db26e63e81e" />
                        <img class="col-md-6 col-sm-12" alt="Portfolio piece 02" src="https://cdn.myportfolio.com/d2b535fc3eee6bfea5e300a810238ac7/7d1a2ed6-53fe-445f-b91e-96b0590f674c_rw_600.jpg?h=1f936913c627e5a89c007252759c8fee" />
                        <img class="col-md-6 col-sm-12" alt="Portfolio piece 03" src="https://cdn.myportfolio.com/d2b535fc3eee6bfea5e300a810238ac7/28bbdc25-2828-4444-a7bc-c1dcc90e856e_rw_1200.jpg?h=9b3600f67bc5d044ab293a3274c73872" />
                        <img class="col-md-6 col-sm-12" alt="Portfolio piece 04" src="https://cdn.myportfolio.com/d2b535fc3eee6bfea5e300a810238ac7/0bf4a00e-27c4-44d5-8805-bd5ef71be650_rw_1200.jpg?h=df478b10bf394f34a54fb70a36f00b50" />
                        <img class="col-md-6 col-sm-12" alt="Portfolio piece 05" src="https://cdn.myportfolio.com/d2b535fc3eee6bfea5e300a810238ac7/81570270-2c40-4e46-a8d7-bec68066958c_rw_600.jpg?h=cb7bf62f2ce030d76b50647052b89f85" />
                        <img class="col-md-6 col-sm-12" alt="Portfolio piece 06" src="https://cdn.myportfolio.com/d2b535fc3eee6bfea5e300a810238ac7/05dee21a-b0b0-4792-ad1c-7fcb22f86ee2_rw_600.jpg?h=0766cf3b0a2294cc07dc3579c04f34f9" />
                </div>
        
            </div>
        
        </div>

    </div>
        
    {/* Contect panel = End */}


    <Footer />

    </div>
    //END//
        
  );
};

export default App;