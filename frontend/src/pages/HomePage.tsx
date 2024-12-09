import React, { useState, useEffect } from "react";
import HomeGallery from "../components/Home/HomeGallery";
import FloatUpContainer from "../components/UI/FloatUpContainer";
import CustomizedPage from "../noamExtentions/CustomizedPage";
import { useHomePageContext } from "../noamExtentions/HomePageContext";
import { useAppSelector } from "../store/hooks"; // Assuming you're using Redux
import { selectAuthentication } from "../store/reducers/auth-reducer"; // Select authentication slice
import { useHistory } from "react-router-dom"; // For redirection

function HomePage() {
  const { showHomeGallery, setShowHomeGallery } = useHomePageContext();
  const authSlice = useAppSelector(selectAuthentication);
  const history = useHistory();

  useEffect(() => {
    // Reset state when the component mounts
    setShowHomeGallery(null);
  }, [setShowHomeGallery]);

  const handleSelection = (isHomeGallery: boolean) => {
    if (!isHomeGallery && !authSlice.isLoggedIn) {
      // Redirect to login if user is not logged in and selects Custom Web
      history.push("/login");
    } else {
      setShowHomeGallery(isHomeGallery); // Set the choice
    }
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
        ) : authSlice.isLoggedIn ? (
          <CustomizedPage />
        ) : (
          <div style={{ color: "red", fontWeight: "bold" }}>
            Redirecting to login...
          </div>
        )}
      </FloatUpContainer>
    </div>
  );
}

export default HomePage;
