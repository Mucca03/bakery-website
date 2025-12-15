import {flowersHeader} from "../assets/index.js"

const HeaderAgape = () => {
    return (
        <nav className="bg-bg-primary border-gray-200 px-4 lg:px-6 py-2.5 font-poppins z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a className="flex items-center">
                    <img src={flowersHeader} className="h-10 sm:h-17" alt="Flowers"/>
                </a>
                <div className="flex items-center lg:order-2">
                    <a className="flex items-center">
                        <img src={flowersHeader} className="h-10 sm:h-17" alt="Flowers"/>
                    </a>
                </div>
                <div className="bg-white font-normal rounded-full inset-shadow-sm inset-shadow-neutral-400 px-7 py-3 text-xl hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                     id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-24 lg:mt-0">
                        <li>
                            <a href="#"
                               className="text-primary-dark hover:text-accent-hover">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-primary-dark hover:text-accent-hover">
                                Productos
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-primary-dark hover:text-accent-hover">
                                Contactos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default HeaderAgape
