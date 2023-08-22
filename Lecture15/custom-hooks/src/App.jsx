import React, { useEffect } from "react";
import "./App.css";
import useLightNightMode from "./useLightNightMode";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [width, nightMode, handleMode, setNightMode] = useLightNightMode();
  const [savedMode, setSavedMode] = useLocalStorage("key", false);


  useEffect(() => {
    setNightMode(savedMode);
  }, [savedMode]);


  useEffect(() => {
    if (nightMode === true) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [nightMode]);

  return (
    <div>
      {width > 576 ? (
        <button onClick={() => handleMode()}>
          {nightMode ? `Night Mode` : `Light Mode`}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;