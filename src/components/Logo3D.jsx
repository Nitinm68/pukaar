import React from "react";
import "./Logo3D.css";

export default function Logo3D({ src = "/pukaar3d.png", size = 400 }) {
  return (
    <div className="logo3d-wrapper" style={{ width: size, height: size }}>
      <div className="logo3d-glow" />
      <div className="logo3d-spin">
        <img src={src} alt="logo" className="logo3d-img" />
      </div>
    </div>
  );
}
