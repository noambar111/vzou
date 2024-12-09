import React, { useState, useEffect } from "react";
import HomeGallery from "../components/Home/HomeGallery";
import FloatUpContainer from "../components/UI/FloatUpContainer";
import CustomizedPage from "../noamExtentions/CustomizedPage";
import { useHomePageContext } from "../noamExtentions/HomePageContext";





function HomePage() {
  const { showHomeGallery, setShowHomeGallery } = useHomePageContext();

  useEffect(() => {
    // Reset state when the component mounts
    setShowHomeGallery(null);
  }, []);

  const handleSelection = (isHomeGallery: boolean) => {
    setShowHomeGallery(isHomeGallery); // Set the choice and hide buttons
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {showHomeGallery === null ? (
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => handleSelection(true)}
            style={{
              padding: "10px 20px",
              margin: "0 10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Home Gallery
          </button>
          <button
            onClick={() => handleSelection(false)}
            style={{
              padding: "10px 20px",
              margin: "0 10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Custom Web
          </button>
        </div>
      ) : null}

      <FloatUpContainer>
        {showHomeGallery === null ? null : showHomeGallery ? (
          <HomeGallery />
        ) : (
          <CustomizedPage />
        )}
      </FloatUpContainer>
    </div>
  );
}

export default HomePage;
