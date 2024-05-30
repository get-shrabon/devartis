import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";


const header = () => {
    return (
        <header className="bg-slate-700">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <a href="/">Logo</a>
                <ul className="flex items-center gap-4 font-poppins">
                    <li><NavLink to={`/`}>Home</NavLink></li>
                    <li><NavLink to={`/about-us`}>About Us</NavLink></li>
                    <li><NavLink to={`/service`}>Services</NavLink></li>
                    <li><NavLink to={`/portfolio`}>Portfolio</NavLink></li>
                    <li><NavLink to={`/contact`}>Contacts</NavLink></li>
                </ul>
                <a className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-3 text-center me-2 mb-2 flex items-center gap-2" href="/contact">Contact Us <span className="text-2xl"><MdArrowRightAlt />
                </span></a>
            </nav>
        </header>
    );
};

export default header;