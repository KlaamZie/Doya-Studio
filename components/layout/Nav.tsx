import React, { useState, useEffect } from "react";

const Nav = () => {
  const [displayNav, setDisplayNav] = useState(false);

  useEffect(() => {
    const target = document.querySelector(".contact");
    const navbar = document.getElementById("nav");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navbar?.classList.remove("displayed");
            navbar?.classList.add("hidden");
          } else {
            navbar?.classList.remove("hidden");
            navbar?.classList.add("displayed");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNav = () => {
    document.body.classList.toggle("stop-scroll");
    setDisplayNav(!displayNav);
  };

  return (
    <nav className="nav container displayed" id="nav">
      <h1 className="nav_title">DOYA Studio</h1>
      <div
        className="nav_btn"
        onClick={() => {
          handleNav();
        }}
      >
        {displayNav ? (
          <svg
            viewBox="0 0 15 15"
            width={30}
            height={30}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            width={30}
            height={30}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div className={`nav_navbar ${displayNav ? "active" : ""}`}>
        <ul className="nav_navbar_list">
          <li className="nav_navbar_wrapper">
            <span className={`nav_navbar_item ${displayNav ? "active" : ""}`}>
              <a href="#equipe" onClick={() => handleNav()}>
                ??quipe
              </a>
            </span>
          </li>
          <li className="nav_navbar_wrapper">
            <span className={`nav_navbar_item ${displayNav ? "active" : ""}`}>
              <a href="#skills" onClick={() => handleNav()}>
                Nos Comp??tences
              </a>
            </span>
          </li>
          <li className="nav_navbar_wrapper">
            <span className={`nav_navbar_item ${displayNav ? "active" : ""}`}>
              <a href="#real" onClick={() => handleNav()}>
                Nos Projets
              </a>
            </span>
          </li>
          <li className="nav_navbar_wrapper">
            <span className={`nav_navbar_item ${displayNav ? "active" : ""}`}>
              <a href="#contact" onClick={() => handleNav()}>
                Contact
              </a>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
