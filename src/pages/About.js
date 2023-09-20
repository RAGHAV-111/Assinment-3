import React from 'react';

import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.section}>
     
      <h2>ABOUT US</h2>
      <div>
        <img
          src='https://c8.alamy.com/comp/2BYGJK0/young-and-joyful-caucasian-musicians-performing-on-gradient-studio-background-in-neon-light-concept-of-music-hobby-festival-colorful-portrait-of-modern-artist-inspiring-art-cover-band-shadows-2BYGJK0.jpg'
          alt='Musical Band'
        />
        <p>
          Jonatha Brooke and Jennifer Kimball first met in 1981 while first-year students at Amherst College in Amherst, Massachusetts. Originally called simply "Jonatha and Jennifer", they performed regularly throughout the Boston area until graduation, at which time Brooke started working in a dance company and Kimball went to a publishing firm.[1]
          Known for their ethereal and dissonant vocal harmonies, both Brooke and Kimball have gone on to critically acclaimed solo careers. 
        </p>
      </div>
    </section>
  );
};

export default About;
