import "./App.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState, useEffect, createContext } from "react";

const AppContext = createContext();

export default function App() {
  const boxControls = useAnimation();

  return (
    <>
      <main>
        <div class="one">
          <div class="arrow1">
            <motion.svg width="117" height="89">
              <motion.path
                fill="none"
                stroke="#808080"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M1.5,1.5C53.82,1.5,97.718,37.559,109,86"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  transition: {
                    duration: 1,
                  },
                }}
              ></motion.path>
            </motion.svg>
          </div>

          <div class="arrow1a">
            <motion.svg width="117" height="90">
              <motion.path
                d="M116.334,74.833 109.812,86.328 98.316,79.804"
                path
                fill="none"
                stroke="#808080"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 1,
                  },
                }}
              ></motion.path>
            </motion.svg>
          </div>
        </div>

        <div class="two">
          <div class="arrow2">
            <motion.svg width="200" height="100">
              <motion.path
                fill="none"
                stroke="#808080"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M107.647,1.5C96.854,50.345,52.636,87.724,10.5,89.176"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  transition: {
                    delay: 1,
                    duration: 1,
                  },
                }}
              ></motion.path>
            </motion.svg>
          </div>
          <div class="arrow2a">
            <motion.svg width="200" height="100">
              <motion.path
                fill="none"
                stroke="#808080"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.175,98.182 6.5,89.176 16.507,79.502"
                initial={{opacity: 0}}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 2,
                    duration: 1
                  }
                }}
              ></motion.path>
            </motion.svg>
          </div>
        </div>
      </main>
    </>
  );
}

function Push({ total, onPush }) {
  return (
    <div>
      <PushButton onPush={onPush} />
      <br />
      <TotalPushs total={total} />
    </div>
  );
}

function TotalPushs({ total }) {
  return <p>Total Items in array : {total}</p>;
}

function PushButton({ onPush }) {
  return <button onClick={onPush}>Add to Item</button>;
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
