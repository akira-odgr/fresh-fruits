import { motion } from "framer-motion";
import BannerPng from "../../assets/fruits-splash.png";
import { BannerFruits, FadeUp } from "../../utility/animation";

export const Banner = () => {
    return (
        <section className="bg-secondary/10">
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        variants={BannerFruits()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        src={BannerPng}
                        alt="BannerFruits"
                        className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
                    />
                </div>

                {/* Brand Info */}
                <div className="flex flex-col justify-center text-center md:text-left gap-4 lg:max-w-[400px] ">
                    <motion.h1
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl lg:text-6xl font-bold uppercase"
                    >
                        Brand Info
                    </motion.h1>
                    <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima, expedita? Deleniti excepturi aut est
                        fugit, eaque beatae, quas assumenda placeat non ut hic
                        alias, sint et nesciunt ratione delectus facilis.
                    </motion.p>
                    <motion.p
                        variants={FadeUp(0.9)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Labore, nihil quis suscipit temporibus veniam quo.
                    </motion.p>
                    <motion.div
                        variants={FadeUp(1.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <button className="primary-btn">Learn More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
