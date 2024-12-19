import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Menus } from "./components/menus/Menus";
import { Banner } from "./components/banner/Banner";

export const App = () => {
    return (
        <>
            <main>
                <Navbar />
                <Hero />
                <Menus />
                <Banner />
            </main>
        </>
    );
};
