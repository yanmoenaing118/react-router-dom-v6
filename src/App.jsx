import "./App.css";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState, useEffect, createContext } from "react";

const AppContext = createContext();

export default function App() {
  const boxControls = useAnimation();
  const [arr, setArr] = useState([]);

  return (
    <>
      <AppContext.Provider  value={{ arr, setArr }}>
        <main>
          <Push
            total={arr.length}
            onPush={() => setArr([...arr, Math.random()])}
          />
        </main>
      </AppContext.Provider>
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
