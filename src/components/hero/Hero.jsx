import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";

import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";

// import { FadeUp } from "../../utility/animation";

export const Hero = () => {
    return (
        <section>
            <div className="relative container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                {/* Brand Info */}
                <div className="relative flex flex-col justify-center py-14 md:py-0 z-10">
                    <div className="text-center space-y-6 md:text-left lg:max-w-[400px]">
                        <h1 className="text-5xl font-bold leading-relaxed font-averia xl:leading-loose">
                            Healthy
                            <br />
                            Fresh
                            <span className="text-secondary">Fruits!</span>
                        </h1>
                        <p className="text-2xl tracking-wide">
                            order Now For Fresh Healthy Life
                        </p>
                        <p className="text-gray-400">
                            Healthy and yummy food for fresh morning breakfast.
                            Eat Daily for good health and mind Order now and get
                            20% off on your first order
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="primary-btn flex items-center gap-2">
                                <span>
                                    <IoBagHandleOutline />
                                </span>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={HeroPng}
                        alt="fruit-plate"
                        className="w-[350px] md=w-[550px] drop-shadow"
                    />
                </div>

                {/* Leaf Image */}
                <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
                    <img
                        src={LeafPng}
                        alt="leaf"
                        className="w-full md:max-w-[300px]"
                    />
                </div>
            </div>
        </section>
    );
};
