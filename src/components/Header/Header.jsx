
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <h2>Header</h2> */}
            <h1>My Website</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                {/* <a href="/">Home</a> */}
                {/* <a href="/about">About us</a> */}
                {/* <a href="/contact">Contact us</a> */}
            </nav>
        </div>
    );
};

export default Header;