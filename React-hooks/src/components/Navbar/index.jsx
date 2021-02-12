import './index.scss';
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <header className="Navbar">
        <NavLink to="/" exact>Accueil</NavLink>
        <NavLink to="/stations">Stations de Vélib</NavLink>
    </header>
);

export default Navbar;
