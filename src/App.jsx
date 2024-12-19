import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Menus } from "./components/menus/Menus";
import { Banner } from "./components/banner/Banner";
import { Banner2 } from "./components/banner/Banner2";
import { Banner3 } from "./components/banner/Banner3";

export const App = () => {
    return (
        <>
            <main>
                <Navbar />
                <Hero />
                <Menus />
                <Banner />
                <Banner2 />
                <Banner3 />
            </main>
        </>
    );
};
