import Menu from "./Menu";
import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState, useCallback, useMemo } from "react";

import project1 from "../assets/fso_image1.png";

const stringsToRender = ["Software Development", "Websecurity"];
function Home() {
  const options = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true, //Event listener for hover,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            radius: 0.1,
          },
        },
      },
      fullScreen: {
        enable: false,
      },
      particles: {
        links: {
          enable: true, // creates links between particles
        },
        number: {
          value: 25, // Number of particles
        },
        size: {
          value: { min: 1, max: 5 },
        },
        move: {
          enable: true, //enables particles to move
          speed: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, //Semi-transparency effect
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    console.log("Particles engine initialized");
    loadSlim(engine);
  }, []);

  return (
    <main id={styles.home}>
      <Menu />
      <section className={styles.first_page}>
        <Particles className={styles.particles} init={particlesInit} options={options} />
        <div className={styles.introduction}>
          <p>Hi I'm Justin and I enjoy </p>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Software Development")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Websecurity")
                .deleteAll()
                .start();
            }}
          />
        </div>
      </section>

      <section className={styles.second_page}>
        <div className={styles.about_container}>
          <h3>About Me</h3>
          <p className={styles.yap}>
            I am a computer science junior attending Stony Brook University. I am interested in full
            stack development, cybersecurity, and artificial intelligence. Currently, I am exploring
            web development frameworks such as Next.js, learning about APIs, and delving into data
            visualization. In my free time, I am a running and gym enthusiast, as well as an avid
            book reader.
          </p>
        </div>
      </section>

      <section className={styles.third_page}>
        <div className={styles.projects_container}>
          <h3>Projects</h3>
          <div className={styles.projects_gallery}>
            <div className={styles.project_box}>
              <img src={project1} alt="Project 1" className={styles.project_image} />
              <p className={styles.project_description}>
                Developed a fake stackoverflow clone with user authentication, posting,
                upvoting/downvoting, and profiles.
              </p>
            </div>
            {/* <div className={styles.project_box}>
              <img src={projectImage2} alt="Project 2" className={styles.project_image} />
              <p className={styles.project_description}>Project 2 Description</p>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
