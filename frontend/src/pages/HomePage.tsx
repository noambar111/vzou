import React, { useState, useEffect } from "react";
import HomeGallery from "../components/Home/HomeGallery";
import FloatUpContainer from "../components/UI/FloatUpContainer";
import CustomizedPage from "../noamExtentions/CustomizedPage";
import { useHomePageContext } from "../noamExtentions/HomePageContext";
import { useAppSelector } from "../store/hooks"; 
import { selectAuthentication } from "../store/reducers/auth-reducer";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const { showHomeGallery, setShowHomeGallery } = useHomePageContext();
  const authSlice = useAppSelector(selectAuthentication);
  const history = useHistory();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowHomeGallery(null);
  }, [setShowHomeGallery]);

  const handleSelection = (isHomeGallery: boolean) => {
    if (!isHomeGallery && !authSlice.isLoggedIn) {
      history.push("/login");
    } else {
      setShowHomeGallery(isHomeGallery);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="home-page-container">
      {showHomeGallery === null ? (
        <div className="button-container">
          <button onClick={() => handleSelection(true)} className="green-button">
            Home Gallery
          </button>
          <button onClick={togglePopup} className="info-button">
            Click Me!
          </button>
          <button onClick={() => handleSelection(false)} className="red-button">
            Custom Web
          </button>
        </div>
      ) : null}

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            <h2>What is VZOU?</h2>
            <div className="popup-section">
              <h3>Custom Web</h3>
              <p>
                This option allows you to analyze your knowledge and create a 
                personalized learning path to help you progress efficiently and effectively.
              </p>
            </div>
            <div className="popup-section">
              <h3>Home Gallery</h3>
              <p>
                The Home Gallery lets you explore all the algorithms and data 
                structures that VZOU offers in an interactive and visual way.
              </p>
            </div>
            <button onClick={togglePopup} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}

      <FloatUpContainer>
        {showHomeGallery === null ? null : showHomeGallery ? (
          <HomeGallery />
        ) : authSlice.isLoggedIn ? (
          <CustomizedPage />
        ) : (
          <div className="redirect-message">Redirecting to login...</div>
        )}
      </FloatUpContainer>
    </div>
  );
}

export default HomePage;
