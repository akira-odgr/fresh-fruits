import { motion } from "framer-motion";
import BannerPng from "../../assets/fruits-splash.png";
import { FadeLeft, FadeUp } from "../../utility/animation";

export const Banner = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6">
                {/* Banner Image */}
                <div>
                    <img
                        src={BannerPng}
                        alt=""
                        className="w-[300px] md:max-w-[400px] h-full"
                    />
                </div>

                {/* Brand Info */}
                <div className="flex flex-col justify-center text-center md:text-left gap-4 lg:max-w-[400px]">
                    <motion.h1
                        variants={FadeUp(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl lg:text-6xl font-bold uppercase"
                    >
                        Brand Info
                    </motion.h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima, expedita? Deleniti excepturi aut est
                        fugit, eaque beatae, quas assumenda placeat non ut hic
                        alias, sint et nesciunt ratione delectus facilis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Labore, nihil quis suscipit temporibus veniam quo.
                    </p>
                    <motion.div
                        variants={FadeUp(1.4)}
                        initial="hidden"
                        animate="visible"
                    >
                        <button className="primary-btn">Learn More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
