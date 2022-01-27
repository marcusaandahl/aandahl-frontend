import React from 'react';
import {ReactComponent as MAALogo} from './assets/MAALogo.svg';
import {ReactComponent as CVIcon} from './assets/cvIcon.svg';
import './Navbar.scss';

function Navbar() {

    return (
        <nav id="navbar" className="navbar navbar-scrollspy fixed-top navbar-expand-md navbar-dark">
            <div className="container-fluid">
                <div className="navbar-brand" id="logoLink">
                    <MAALogo className="MAAlogo"/>
                </div>
                <button id="navbarToggler" className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav m-auto">
                        <div id='navbar-projects' className="nav-link">Projects</div>
                        <div id='navbar-skills' className="nav-link">Skills</div>
                        <div id='navbar-contact' className="nav-link">Contact</div>
                    </div>
                </div>
                <a className="navbar-brand d-none d-md-block d-lg-block" target="_blank" rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/portfolio-336519.appspot.com/o/portfolio%2Fcv%2FCV%20Light.pdf?alt=media&token=39284b36-486c-40fb-b9ee-6283a576ba17">
                    <CVIcon className="cvIcon"/>
                </a>
            </div>
    </nav>
    );
}

export default Navbar;