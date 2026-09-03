import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                StudyFlow
            </NavLink>

            <ul className="navLinks">
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>

                <li>
                    <a href="#about">
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/HussBTWYT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    );
}