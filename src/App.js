
import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="header">
            <div className="item-1">
                <img src={process.env.PUBLIC_URL + '../images/hcmute.png'} className="image-hcmute" alt="logo hcmute" />
                <p className="item-1-text">HCMC UNIVERSITY OF TECHNOLOGY AND EDUCATION</p>
            </div>
            <div className="item-2">
                <img src={process.env.PUBLIC_URL + '../images/ute.jpg'} className="image-ute" alt="ute hcmute" />
                <img src={process.env.PUBLIC_URL + '../images/utecong.jpg'} className="image-utecong" alt="cong hcmute" />
                <img src={process.env.PUBLIC_URL + '../images/utecenter.jpg'} className="image-utecenter" alt="center hcmute" />
                <img src={process.env.PUBLIC_URL + '../images/images.jpg'} className="image-images" alt="images hcmute" />
            </div>
        </header>
    );
}

function MainContent() {
    return (
        <>
            <p className="text-1">Welcome to my personal website</p>
            <div className="container1">
                <div className="text-block">
                    <p className="text-2">
                        Hello everyone, my name is <strong>Ngo Do Tan Thanh</strong>.<br />
                        I am a 4th year student at Ho Chi Minh City 
                        University of Technology and Education.<br />
                        Welcome to my personal website!
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + '../images/avatar.png'} className="image-avatar" alt="avatar" />
            </div>

            <div className="container2">
                <div className="container2-text">Personal Information</div>
                <div className="table-web">
                    <div className="web">Full name: Ngo Do Tan Thanh</div>
                    <div className="web">Major: Software Technology</div>
                    <div className="web">Year: 4th</div>
                    <div className="web">University: HCMUTE</div>
                    <div className="web">Location: Ho Chi Minh City</div>
                </div>
            </div>
        </>
    );
}

function Footer() {
    return (
        <footer className="contact">
            <h2>Contact me</h2>
            <p className="contact1">Phone: 086273827</p>
            <p className="contact2">Email: ngodotanthanh270904@gmail.com</p>
        </footer>
    );
}

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <MainContent />
            </main>
            <Footer />
        </div>
    );
}

export default App;