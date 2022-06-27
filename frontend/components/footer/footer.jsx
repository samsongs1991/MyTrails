import React from "react";

const Footer = props => {
    return (
        <footer>
            <div>Connect with the developer</div>
            <img src="/footer_images/me.jpg" alt="Photo of the website developer"/>
            <ul>
                <img src="/footer_images/github.png" alt="GitHub Icon"/>
                <img src="/footer_images/linkedin.png" alt="LinkedIn Icon"/>
                <img src="/footer_images/angellist.png" alt="AngelList Icon"/>
                <img src="/footer_images/portfolio.png" alt="Portfolio Icon"/>
            </ul>
        </footer>
    );
};

export default Footer;