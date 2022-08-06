import React from "react";

const Footer = props => {
    return (
        <footer>
            <section>
                <p><span>Connect</span> with the developer</p>
            </section>
            <section>
                <img id="developer-img" src={images.developer} alt="Photo of the website developer"/>
            </section>
            <section>
                <img className="social-link-img" src={images.github} alt="GitHub Icon"/>
                <img className="social-link-img" src={images.linkedin} alt="LinkedIn Icon"/>
                <img className="social-link-img" src={images.angellist} alt="AngelList Icon"/>
                <img className="social-link-img" src={images.portfolio} alt="Portfolio Icon"/>
            </section>
        </footer>
    );
};

export default Footer;
