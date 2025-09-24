import React from "react";
import Logo3D from "./components/Logo3D";

function App() {
  return (
    <div
      style={{
        // background: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo3D src="/Adobe.png" size={420} />
    </div>
  );
}

export default App;
