import './index.css';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard'
import About from './components/About';
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer';
import useScrollSpy from './hooks/useScrollSpy';
import Cursor2 from './components/Cursor2';

import vend_img from './assets/vend_thumbnail.png';
import inkstory_img from './assets/inkstory_thumbnail.jpg';
import CWACOP_img from './assets/CWACOP_thumbnail.png';
import spot_it_img from './assets/spot_it_thumbnail.png';

function App() {
  const {
    currentSection,
    aboutRef,
    experienceRef,
    projectsRef,
  } = useScrollSpy();
  
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
        <section ref={experienceRef} id="experience">
          <ProjectCard key="8" heading="Designer &#8212; Return Design Lab" cardType={["experience", "Sep 2025 - Present"]} caption="1 of 2 designers leveraging impactful design work for external (non-profit) partners to better our communities. Led by creative director, Tim Sauder." tags={["Illustrator", "Web Design", "Branding"]} link="None"/>
          <ProjectCard key="0" heading="Engineering Intern &#8212; Advanced Manufacturing Group at TTM Technologies" cardType={["experience", "May 2025 - Aug 2025"]} caption="Overhauled existing Industry 4.0 dashboard to a Unified Namespace structure to improve manufacturing scalability and capabilities. Re-architected databases, developed more functional UIs, and integrated live machine monitoring programs." tags={["Jython", "CSS", "SQL", "Ignition"]} link="None"/>
          <ProjectCard key="1" heading="Documentation Lead & Electrical Team Member &#8212; OAT Lab (Olin Assistive Tech)" cardType={["experience", "Jan 2025 - Present"]} caption="Created and maintained documentation site while securing regular content contributions from all sub-teams. Developing firmware for refreshable braille display incorporating ESP32 controller, solenoids, and shift registers." tags={["Circuit Design", "Docs", "C++", "UX"]} link="https://orbital-assistive-tech.github.io/documentation/"/>
          <ProjectCard key="2" heading="Course Assistant &#8212; Product & Markets" cardType={["experience", "Jan - May 2025"]} caption="Supported students’ learning by engaging teams with new perspectives and methodologies for assessing product-market fit in real-world experiments." tags={["Entrepreneurship", "Teaching", "Patience"]} link="None"/>
          <ProjectCard key="3" heading="Research Assistant &#8212; Jon Adler Identity Lab" cardType={["experience", "Jan - May 2024"]} caption="Delved into the phenomenon “Identity Theft”, furthering our understanding of its extremes and definition. Researched case studies and compiled documentation of individuals who have experienced identity theft." tags={["Narrative Identity", "Research", "Notes"]} link="None"/>
        </section>
        <section ref={projectsRef} id="projects">
          <ProjectCard key="4" heading="VEND" cardType={["project", vend_img]} caption="Table top vending machine with touchscreen interface to vend all your favorite snacks. Developed interface and firmware integration while working in a cross-disciplinary team." tags={["Python", "Arduino", "Motor circuits", "RasPI"]} link="https://coxlaurel.github.io/vend-pie24/"/>
          <ProjectCard key="5" heading="Inkstory" cardType={["project", inkstory_img]} caption="Worked with 10+ tattoo artists to deeply understand their values and pain points, then co-designed a mockup tattoo museum solution." tags={["Co-design", "User Research", "Stories"]} link="None"/>
          <ProjectCard key="6" heading="Cloudy With A Chance Of Pizza" cardType={["project", CWACOP_img]} caption="Dropper-arcade-style pizza-themed video game. Fulfill orders and skillfully catch toppings with pixel-perfect accuracy." tags={["Python", "Pygame Lib", "Game Dev"]} link="https://olincollege.github.io/Pizza-Game/"/>
          <ProjectCard key="7" heading="Spot It! Discrete Math Version" cardType={["project", spot_it_img]} caption="Custom 73-card Spot-It! deck with my discrete mathematics classmates’ faces using balanced incomplete block design theory and automated card generation." tags={["Python", "Pillow Lib", "BIBD"]} link="https://github.com/karismoon/spot-it"/>
        </section>
        <section>
          <Footer />
          </section>
      </div>
    </div>
  </div>
}

export default App;