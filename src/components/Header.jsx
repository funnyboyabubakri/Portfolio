import React from "react";
import "./../styles/Header.css";
import myPics from "/assets/MyPic.jpeg";
const Header = () => {
  return (
    <section className="header" id="home">
      <div className="left-of-header">
        <p>I am Abubakri</p>
        <h1>Web Developer</h1>
        <span>
          I’m a passionate Web Developer and Programmer who loves turning ideas
          into powerful digital experiences. I build responsive and
          user-friendly websites using <mark>HTML, CSS, JavaScript, React.js, Node.js, Next.js</mark> <br />
          Feel free to colllaborate or reach out for your websites
        </span>
        <div className="down-of-header">
          <section id="hireMe"><button onClick={() => document.getElementById('mailer').scrollIntoView({ behavior: 'smooth' })}>Hire Me</button></section>
          <button onClick={() => window.open('/assets/Adebayo-Abubakri-CV.docx', '_blank')}>Review CV</button>
        </div>
      </div>
      <div className="right-of-header">
        <img src={myPics} alt="" />
      </div>
    </section>
  );
};

export default Header;