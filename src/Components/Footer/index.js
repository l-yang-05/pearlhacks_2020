import React from 'react';
import Instagram from './Instagram';
import Facebook from './Facebook';
import Youtube from './Youtube';

const Footer = () => {
    return(
        <footer class="footer">
            <div className="sm-icon">
            <Instagram />
            </div>
            <div className="sm-icon">
            <Facebook />
            </div>
            <div className="sm-icon">
            <Youtube />
            </div>
        </footer>
    );
}

export default Footer;