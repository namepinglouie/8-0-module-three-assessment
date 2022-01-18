import { Component } from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
                <nav>
                    <Link to="/"><img src="https://via.placeholder.com/50" alt="dummy img" /></Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/people">People</Link> 
                    <Link to="/locations">Locations</Link>
                </nav>  
        )
    }
}

export default Navbar;