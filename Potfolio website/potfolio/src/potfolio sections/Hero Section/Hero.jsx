import './Hero.css';

export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi,
          <br />
          I'm Nishu
        </h1>
        <h3>
          I'm <span className="multiple-text">Frontend Developer</span>
        </h3>
        <p>
          Hi, I'm Nishu Rajput, a Software Engineer currently pursuing a Bachelor's degree in Computer Applications and working as a Frontend Developer. Follow my journey, get in touch, and let's connect to create something amazing together!
        </p>
        <div className="socials-icons">
          <a href="#"><i className="fa-brands fa-whatsapp" /></a>
          <a href="https://in.linkedin.com/in/nishu-rajput-b011612a6" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://x.com/Nishurajput70" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="https://t.me/nishuiit" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram" />
          </a>
          <a href="https://github.com/NishuRajput12" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
          </a>
        </div>
        <a href="/nishurajputr.pdf" className="btn" download>
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Nishu Rajput" />
      </div>
    </section>
  );
}
