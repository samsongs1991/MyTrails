import React from "react";

const Footer = props => {
    return (
        <footer>
            <section>
                <p><span>Connect</span> with the developer</p>
            </section>
            <section>
                <img id="developer-img" src="/footer_images/me.jpg" alt="Photo of the website developer"/>
            </section>
            <section>
                <img className="social-link-img" src="/footer_images/github.png" alt="GitHub Icon"/>
                <img className="social-link-img" src="/footer_images/linkedin.png" alt="LinkedIn Icon"/>
                <img className="social-link-img" src="/footer_images/angellist.png" alt="AngelList Icon"/>
                <img className="social-link-img" src="/footer_images/portfolio.png" alt="Portfolio Icon"/>
            </section>
        </footer>
    );
};

export default Footer;