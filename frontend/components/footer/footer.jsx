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
                <img onClick={() => window.open("https://github.com/samsongs1991/MyTrails", '_blank')} className="social-link-img" src={images.github} alt="GitHub Icon"/>
                <img onClick={() => window.open("https://www.linkedin.com/in/samsongs1991/", '_blank')} className="social-link-img" src={images.linkedin} alt="LinkedIn Icon"/>
                <img onClick={() => window.open("https://angel.co/u/samsongs", '_blank')} className="social-link-img" src={images.angellist} alt="AngelList Icon"/>
                <img onClick={() => window.open("", '_blank')} className="social-link-img" src={images.portfolio} alt="Portfolio Icon"/>
            </section>
        </footer>
    );
};

export default Footer;
