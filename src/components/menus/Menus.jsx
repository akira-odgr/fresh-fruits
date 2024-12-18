import { MenusData } from "./MenusData";
import { motion } from "framer-motion";

export const Menus = () => {
    return (
        <section>
            <div className="container pt-12 pb-20">
                <motion.h1 className="text-2xl font-bold text-left mb-10 uppercase">
                    Our Menu
                </motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {MenusData.map((menu) => (
                        <div
                            key={menu.id}
                            className="flex justify-around items-center gap-3 bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
                        >
                            <img
                                src={menu.img}
                                alt={menu.title}
                                className="w-[60px] mb-4 scale-125 transform-translate-y-6"
                            />
                            <div>
                                <h1 className="text-lg font-semibold">
                                    {menu.title}
                                </h1>
                                <p className="text-lg font-semibold text-secondary">
                                    {menu.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
