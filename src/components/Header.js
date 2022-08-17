import Nb from "./Navbar";

const Header = ({data}) => {

    return (
        <header>

        <nav>
            <Nb expand={'md'} data={data} />
        </nav>
        </header>
    )
}
export default Header;