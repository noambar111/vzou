import React, { createContext, useContext, useState } from "react";

type HomePageContextType = {
  showHomeGallery: boolean | null;
  setShowHomeGallery: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const HomePageContext = createContext<HomePageContextType | undefined>(undefined);

export const HomePageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showHomeGallery, setShowHomeGallery] = useState<boolean | null>(null);

  return (
    <HomePageContext.Provider value={{ showHomeGallery, setShowHomeGallery }}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("useHomePageContext must be used within a HomePageProvider");
  }
  return context;
};
