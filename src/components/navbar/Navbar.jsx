import { useState } from "react";
import { FaLeaf } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { ResponsiveMenu } from "./ResponsiveMenu";

const NavBarMenu = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Product",
        link: "#",
    },
    {
        id: 3,
        title: "About",
        link: "#",
    },
    {
        id: 4,
        title: "Shop",
        link: "#",
    },
    {
        id: 5,
        title: "Contacts",
        link: "#",
    },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const clickOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <nav>
                <div className="container flex justify-between py-4 md:pt-4">
                    {/* Logo section */}
                    <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                        <p className="text-primary">Fruit</p>
                        <p className="text-secondary">Store</p>
                        <FaLeaf className="text-green-500" />
                    </div>

                    {/* Menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-600">
                            {NavBarMenu.map((menu) => {
                                return (
                                    <li key={menu.id}>
                                        <a
                                            href={menu.link}
                                            className="inline-block py-1 px-3 font-semibold duration-300 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] "
                                        >
                                            {menu.title}
                                        </a>
                                    </li>
                                );
                            })}
                            <button className="text-2xl rounded-full p-2 duration-300 hover:bg-primary hover:text-white">
                                <MdOutlineShoppingCart />
                            </button>
                        </ul>
                    </div>

                    {/* Mobile Hamburger section */}
                    <div className="md:hidden" onClick={clickOpen}>
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>

            {/* // Mobile Menu section */}
            <ResponsiveMenu open={open} />
        </>
    );
};
