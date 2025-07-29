import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <h1 className="bg-blue-600 text-white text-center py-3 text-2xl font-bold">Heroes</h1>
            <nav className="bg-gray-800 text-white">
                <ul className="flex justify-center space-x-8 py-4">
                    <li className="hover:bg-gray-700 px-3 sm:px-4 py-2 rounded transition duration-300 text-center">
                        <i className="fa-solid fa-house mr-2"></i>
                        <Link to="/" className="hover:text-blue-300">Home</Link>
                    </li>
                    <li className="hover:bg-gray-700 px-3 sm:px-4 py-2 rounded transition duration-300 text-center">
                        <i className="fa-solid fa-earth-americas mr-2"></i>
                        <Link to="/places" className="hover:text-blue-300">Places</Link>
                    </li>
                    <li className="hover:bg-gray-700 px-3 sm:px-4 py-2 rounded transition duration-300 text-center">
                        <i className="fa-solid fa-image mr-2"></i>
                        <Link to="/gallery" className="hover:text-blue-300">Gallery</Link>
                    </li>
                    <li className="hover:bg-gray-700 px-3 sm:px-4 py-2 rounded transition duration-300 text-center">
                        <i className="fa-solid fa-address-book mr-2"></i>
                        <Link to="/contact" className="hover:text-blue-300">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
