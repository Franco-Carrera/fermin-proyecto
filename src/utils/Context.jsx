import { createContext /*useEffect*/ } from "react";
export const Context = createContext();

export const ContextWrapper = ({ children }) => {
  const htmlWeb = document.scrollingElement;

  window.addEventListener("load", function () {
    htmlWeb.setAttribute("class", "sectionChangeAnimationLoad");
  });

  window.addEventListener("scroll", function () {
    htmlWeb.setAttribute("class", "sectionChangeAnimationScroll");
  });

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
