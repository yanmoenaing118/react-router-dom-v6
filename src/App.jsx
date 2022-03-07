import { motion, useAnimation } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function App() {
  const boxControls = useAnimation();

  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -500,
      opacity: 0,
      scale: 1
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
    hovered: {
      scale: 1.05
    },

    active: {
      scale: 1
    }
  };

  return (
    <main>
      <motion.ul
        style={{
          listStyle: "none",
          padding: "0",
          fontSize: "2rem",
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.li
            key={item}
            style={{
              margin: "1rem 0",
              backgroundColor: "#fff",
              color: "#333",
              padding: ".3em .6em",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            variants={itemVariants}
            whileHover="hovered"
          >
            Item {item}
          </motion.li>
        ))}
      </motion.ul>

      <style jsx>{`
        main {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: purple;
        }
      `}</style>
    </main>
  );
}
