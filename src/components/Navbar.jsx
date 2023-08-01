import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import * as PropTypes from "prop-types";

Navbar.propTypes = {
    onClick: PropTypes.func,
    open: PropTypes.bool
};
export default function Navbar(props) {
    return <nav
        className=" border-b py-4  shadow-sm">
        <div className="w-full  px-8 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="flex justify-between items-center w-full lg:w-auto">
                <Link to="/">
                    <img src={logo} alt="react logo" className="h-12"/>
                </Link>
                <button type="button" className="lg:hidden text-primary" onClick={props.onClick}>
                    {
                        props.open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-x-square" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        )
                    }


                </button>
            </div>
            <div className={props.open ? "w-full mt-10 " : "hidden lg:block "}>
                <ul className="flex flex-col lg:flex-row gap-8">
                    <li className="inline-block">
                        <a href="#" className="text-gray-500 hover:text-primary font-normal ">Home</a>
                    </li>
                    <li className="inline-block">
                        <a href="#" className="text-gray-500 hover:text-primary font-normal ">About Us</a>
                    </li>
                    <li className="inline-block">
                        <a href="#" className="text-gray-500 hover:text-primary font-normal ">Services</a>
                    </li>
                    <li className="inline-block">
                        <a href="#" className="text-gray-500 hover:text-primary font-normal ">Contact
                            Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}
