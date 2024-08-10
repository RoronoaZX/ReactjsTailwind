import logo from "../assets/logo.jpeg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    
    return <nav className="mb-20 flex items-center justify-between py-2">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" className="w-12 h-12 rounded-full object-cover mr-2" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
            <FaLinkedin />
            <a href="https://github.com/RoronoaZX/ReactjsTailwind" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
        </div>
    </nav>
}

export default Navbar;