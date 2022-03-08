import "./App.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function App() {
  const boxControls = useAnimation();

  return (
    <>
      <main>
        <div class="wrapper">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
          <div>Six</div>
          <div>Seven</div>
          <div>Eight</div>
          <div>Nine</div>
          <div>Ten</div>
          <div>Eleven</div>
          <div>Twelve</div>
        </div>
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
