import BannerPng from "../../assets/banner-bg.jpg";
import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export const Banner3 = () => {
    return (
        <section className="container mb12">
            <div
                style={bgStyle}
                className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
            >
                {/* blank div */}
                <div></div>

                {/* Brand Info */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <motion.h1
                            variants={FadeLeft(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-3xl lg:text-6xl font-bold uppercase"
                        >
                            Get Fresh Fruits Today
                        </motion.h1>
                        <motion.p
                            variants={FadeLeft(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam beatae molestias, odio reiciendis
                            unde quia quis labore consectetur! A ducimus quod
                            tempora ex adipisci sint delectus, facilis nostrum
                            facere nihil?
                        </motion.p>
                        <motion.div
                            variants={FadeLeft(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <button className="primary-btn">Order Now</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
