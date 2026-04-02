import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing";
import Hub from "./components/Hub";
import DivisionPage from "./components/DivisionPage";
import ErrorBoundary from "./components/ErrorBoundary";
import divisions from "./data/divisions";

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [activeDivision, setActiveDivision] = useState(null);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {screen === "landing" && <Landing onEnter={() => setScreen("hub")} />}
        {screen === "hub" && (
          <Hub
            divisions={divisions}
            onSelect={(division) => {
              setActiveDivision(division);
              setScreen("division");
            }}
          />
        )}
        {screen === "division" && (
          <DivisionPage division={activeDivision} onBack={() => setScreen("hub")} />
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
