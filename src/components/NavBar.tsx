import './styles/NavBar.css';
// import { FaStar } from 'react-icons/fa';
import { Link } from 'react-scroll';
import type { MouseEvent } from 'react';
// import { useState } from 'react';

function NavBar({ currentSection }: { currentSection: string }) {
  let items = ["about", "experience", "projects"]
  const handleClick = (event: MouseEvent) => (console.log(event))

  return(
    <>
      <h1 className="nav-bar-header" onClick={handleClick}><b>Laurel Cox</b></h1>
      <h2>Electrical & Computer Engineer</h2>
      <ul className="nav-bar-list">
        {items.map((item) => (
          <li
            className={
              currentSection === item
                ? "list-item active"
                : "list-item"
            }
            key={item}
          >
            <Link to={item} smooth={true} duration={500} offset={0}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavBar;