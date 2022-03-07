import "./App.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function App() {
  const boxControls = useAnimation();

  return (
    <>
      <main className="grid">
        {[1, 2, 3, 4,5, 6,7,8,9,10,11 ].map((item) => (
          <div key={item} className="item" data-no={item}>Box {item}</div>
        ))}
      </main>
    </>
  );
}

function Component({ item }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={item ? item.id : "empty"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {item.description}
      </motion.div>
    </AnimatePresence>
  );
}
