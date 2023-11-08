import { createContext, useContext, useState } from "react";

const SlideInSectionContext = createContext();

export const SlideInSectionContextProvider = ({ children }) => {
  const [formPost, setFormPost] = useState(false);
  const [postPreview, setPostPreview] = useState([]);
  const [imgPostPreview, setImgPostPreview] = useState(null);
  return (
    <SlideInSectionContext.Provider
      value={{
        formPost,
        setFormPost,
        postPreview,
        setPostPreview,
        imgPostPreview,
        setImgPostPreview,
      }}
    >
      {children}
    </SlideInSectionContext.Provider>
  );
};
export const SlideInSection = () => {
  return useContext(SlideInSectionContext);
};
