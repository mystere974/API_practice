import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <NavLink to='/'>Ho Ho Ho</NavLink>
            <ul>
                <NavLink to='/'>
                   <li>Home</li>
                </NavLink>
                <NavLink to='/characters'>
                   <li>Characters</li>
                </NavLink>
            </ul>
        </header>


    )

}

export default Header;