import React from 'react';
import Instagram from './Instagram';
import Facebook from './Facebook';
import Youtube from './Youtube';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="sm-icon">
                    <Instagram />
                </div>
                <div className="sm-icon">
                    <Facebook />
                </div>
                <div className="sm-icon">
                    <Youtube />
                </div>
            </div>
            <hr />
            <p>© Copyright 2020 | Mauve</p>
        </footer>
    );
}

export default Footer;