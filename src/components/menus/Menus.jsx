import { MenusData } from "./MenusData";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

export const Menus = () => {
    return (
        <section>
            <div className="container pt-12 pb-20">
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-2xl font-bold text-left mb-10 uppercase"
                >
                    Our Menu
                </motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {MenusData.map((menu) => (
                        <motion.div
                            key={menu.id}
                            variants={FadeLeft(menu.delay)}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.1 }}
                            className="flex justify-around items-center gap-3  bg-white rounded-3xl px-4 py-4 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
                        >
                            <img
                                src={menu.img}
                                alt={menu.title}
                                className="w-[60px] scale-125 transform-translate-y-6 object-cover"
                            />
                            <div>
                                <h1 className="menu-text">{menu.title}</h1>
                                <p className="menu-text text-secondary">
                                    {menu.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
