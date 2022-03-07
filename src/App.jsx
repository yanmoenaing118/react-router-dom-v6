import "./App.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function App() {
  const boxControls = useAnimation();

  const [show, setShow] = useState(false);

  return (
    <main onClick={() => setShow(!show)}>
      <Component isVisible={show} />
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

function Component({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
        key="item"
          initial={{
            opacity: 0,
            y: "-100vh"
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: "-100vh"
          }}
          className="item"
        >
          Box
        </motion.div>
      )}
    </AnimatePresence>
  );
}
