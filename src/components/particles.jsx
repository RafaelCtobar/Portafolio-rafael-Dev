import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function MyParticles() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
  <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: "tranparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              particles_nb: 3,
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            grab: {
              "distance": 200,
              "line_linked": {
                "opacity": 1
              }
            }
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },

          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 6,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        }
      }}
    />
    
  );
}