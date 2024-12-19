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
        <section>
            <div
                style={bgStyle}
                className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
            >
                {/* blank div */}
                <div></div>

                {/* Brand Info */}
                <div className="flex flex-col justify-center text-center md:text-left gap-4 lg:max-w-[400px]">
                    <motion.h1
                        variants={FadeLeft(0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl lg:text-6xl font-bold uppercase"
                    >
                        Brand Info
                    </motion.h1>
                    <motion.p
                        variants={FadeLeft(0.7)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam beatae molestias, odio reiciendis unde quia
                        quis labore consectetur! A ducimus quod tempora ex
                        adipisci sint delectus, facilis nostrum facere nihil?
                    </motion.p>
                    <motion.div
                        variants={FadeLeft(0.9)}
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
