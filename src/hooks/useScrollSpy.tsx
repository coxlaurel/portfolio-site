import { useState, useEffect, useRef } from "react";

function useScrollSpy() {
  const [currentSection, setCurrentSection] = useState("");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setCurrentSection("about")
          }
          if (entry.target === experienceRef.current) {
            setCurrentSection("experience")
          }
          if (entry.target === projectsRef.current) {
            setCurrentSection("projects")
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return { currentSection, aboutRef, experienceRef, projectsRef };
}

export default useScrollSpy;