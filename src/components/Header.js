import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <h1>
            <Link to="/">
            <img src="https://www.w3schools.com/howto/img_avatar.png
            " alt="logo" />
            </Link>
        </h1>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/schedule">Schedule</Link>
            </li>
            <li>
                <Link to="/waiver">Waiver</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            </ul>
        </nav>
        </header>
    )
}
export default Header;