import { NavLink } from "react-router-dom";
import './menu.css'


function Menu() {
    return (
        <nav>
            <NavLink className="navlink" exact to="/" activeStyle={{
            fontWeight: "bold",
            color: "black"
            }}> <span>Home</span> 
             </NavLink>

            <NavLink className="navlink" to="/genres" activeStyle={{
            fontWeight: "bold",
            color: "black"
            }}> <span>Genres</span> 
            </NavLink>
        </nav>
    )
}

export default Menu