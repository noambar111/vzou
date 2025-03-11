import React, { useEffect } from "react";
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

  return (
    <div className="home-page-container">
      {/* Main Content Row */}
      {showHomeGallery === null && (
        <div className="content-row">
          {/* Buttons for selecting the view */}
          <div className="button-container">
          <button onClick={() => handleSelection(false)} className="red-button">
              Custom Web
            </button>
            <button onClick={() => handleSelection(true)} className="green-button">
              Home Gallery
            </button>
          </div>
  
          <div className="info-section">
            <h2>What is VZOU?</h2>
            <div className="info-card custom-web">
              <h3>Custom Web</h3>
              <p>
                Dive into a personalized learning experience! Analyze your knowledge and create a unique path tailored to your progress.
              </p>
            </div>
            <div className="info-card home-gallery">
              <h3>Home Gallery</h3>
              <p>
                Explore an interactive showcase of algorithms and data structures. Visualize complex concepts with ease and clarity.
              </p>
            </div>
          </div>
        </div>
      )}
  
      {/* Main content area */}
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
