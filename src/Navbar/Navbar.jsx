import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogUserOut = () => {

        logOutUser()
            .then(() => {
                // console.log("user")
            })
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white tracking-tight">Shongjukti</span>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        {user ? <button onClick={handleLogUserOut} type="button" className="text-white bg-[#31473a]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#31473a] dark:focus:ring-blue-800">
                            Log Out
                        </button> : <Link to={"/login"}>
                            <button type="button" className="text-white bg-[#31473a]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#31473a] dark:focus:ring-blue-800">
                                Login
                            </button>
                        </Link>}



                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/">
                                    <span href="#" className="block py-2 px-3 md:p-0  rounded md:bg-transparent hover:text-blue-700" aria-current="page">Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="about">
                                    <a href="#" className="block py-2 px-3 md:p-0  md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </NavLink>
                            </li>
                            <NavLink to={"/addBlog"}>


                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent    dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Add a blog</a>
                                </li>
                            </NavLink>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;