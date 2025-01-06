import React from "react";
import "../styles/AboutUs.css";
import About1 from '../styles/About1.jpg';
import About2 from '../styles/About2.jpg';
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className="about-section">
        <img src={About1} alt="Box of Clothes"/>
        <div className="about-text">
          <h2>Nam vel justo cursus faucibus lorem tortor eget</h2>
          <p>
            Maecenas eleifend erat at justo fringilla imperdiet id ac magna.
            Suspendisse vel facilisis odio, at ornare nibh. In malesuada,
            tortor eget.
          </p>
          <p>
            Sodales mollis, mauris lectus hendrerit purus, porttitor finibus
            eros lorem eget mauris. Curabitur lacinia enim at ex blandit, vel
            pellentesque odio elementum.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-text">
          <h2>Fringilla vel purus sit amet, mattis porta enim</h2>
          <p>
            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
            nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis
            porta enim.
          </p>
          <p>
            Duis fermentum faucibus est, sed vehicula velit sodales vitae.
            Mauris mollis lobortis turpis, eget accumsan ante aliquam quis.
          </p>
        </div>
        <img src={About2} alt="Team Members"/>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
