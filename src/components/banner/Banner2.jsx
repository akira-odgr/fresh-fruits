import { motion } from "framer-motion";
import BannerFruits2 from "../../assets/fruit-plate2.png";
import { FadeUp } from "../../utility/animation";

export const Banner2 = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image */}
                <div className="flex justify-center items-center md:order-2">
                    <motion.img
                        initial={{ opacity: 0, x: 200, rotate: 75 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        src={BannerFruits2}
                        alt="BannerFruits2"
                        className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
                    />
                </div>

                {/* Brand Info */}
                <div className="flex flex-col justify-center gap-4 md:order-1 lg:max-w-[400px] text-center md:text-left">
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Veniam veritatis error ex odio iure repellendus
                        ratione? Temporibus asperiores vero quisquam
                        perspiciatis obcaecati, totam incidunt enim labore esse
                        dicta eveniet mollitia.
                    </motion.p>
                    <motion.p
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis praesentium ad, dolores veniam ut accusamus?
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
