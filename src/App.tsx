import './index.css';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard'
import About from './components/About';
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer';
import useScrollSpy from './hooks/useScrollSpy';
import Cursor2 from './components/Cursor2';

// import { useState } from 'react';

function App() {
  const {
    currentSection,
    aboutRef,
    experienceRef,
    projectsRef,
  } = useScrollSpy();

  // const [isActive, setIsActive] = useState(false);
  
  return <div>
    <Cursor2 /> 
    {/* isActive={isActive} */}
    <div className='nav-content-container'>
      <div className='left-bar-container'>
        <div>
          <NavBar currentSection={currentSection} />
        </div>
        <SocialLinks />
      </div>
      <div className='content-container'>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={experienceRef} id="experience"> {/*style={{height: "100vh"}} */}
          <ProjectCard heading="Engineering Intern &#8212; Advanced Manufacturing Group at TTM Technologies" cardType={["experience", "May 2025 - Present"]} caption="Overhauling existing Industry 4.0 dashboard to a Unified Namespace structure to improve manufacturing scalability and capabilities. Re-architected databases, developed more functional UIs, and integrated live machine monitoring programs." tags={["Jython", "CSS", "SQL", "Ignition"]} />
          <ProjectCard heading="Documentation Lead & Electrical Team Member &#8212; ORBITAL (Olin Assistive Tech Lab)" cardType={["experience", "Jan 2025 - Present"]} caption="Created and maintained documentation site while securing regular content contributions from all sub-teams. Developing firmware for refreshable braille display incorporating ESP32 controller, solenoids, and shift registers." tags={["Circuit Design", "Docs", "C++", "UX"]} />
          <ProjectCard heading="Course Assistant &#8212; Product & Markets" cardType={["experience", "Jan - May 2025"]} caption="Supported students’ learning by engaging teams with new perspectives and methodologies for assessing product-market fit in real-world experiments." tags={["Entrepreneurship", "Teaching", "Patience"]} />
          <ProjectCard heading="Research Assistant &#8212; Jon Adler Identity Lab" cardType={["experience", "Jan - May 2024"]} caption="Delved into the phenomenon “Identity Theft”, furthering our understanding of its extremes and definition. Researched case studies and compiled documentation of individuals who have experienced identity theft." tags={["Narrative Identity", "Research", "Notes"]} />
        </section>
        <section ref={projectsRef} id="projects">
          <ProjectCard heading="VEND" cardType={["project", "src/assets/vend_thumbnail.png"]} caption="Table top vending machine with touchscreen interface to vend all your favorite snacks. Developed interface and firmware integration while working in a cross-disciplinary team." tags={["Python", "Arduino", "Motor circuits", "RasPI"]} />
          <ProjectCard heading="Inkstory" cardType={["project", "src/assets/inkstory_thumbnail.jpg"]} caption="Worked with 10+ tattoo artists to deeply understand their values and pain points, then co-designed a mockup tattoo museum solution." tags={["Co-design", "User Research", "Stories"]}/>
          <ProjectCard heading="Cloudy With A Chance Of Pizza" cardType={["project", "src/assets/CWACOP_thumbnail.png"]} caption="Dropper-arcade-style pizza-themed video game. Fulfill orders and skillfully catch toppings with pixel-perfect accuracy." tags={["Python", "Pygame Lib", "Game Dev"]} />
          <ProjectCard heading="Spot It! Discrete Math Version" cardType={["project", "src/assets/spot_it_thumbnail.png"]} caption="Custom 73-card Spot-It! deck with my discrete mathematics classmates’ faces using balanced incomplete block design theory and automated card generation." tags={["Python", "Pillow Lib", "BIBD"]} />
        </section>
        <section>
          <Footer />
          </section>
      </div>
    </div>
  </div>
}

export default App;