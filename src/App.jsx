import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Menus } from "./components/menus/Menus";

export const App = () => {
    return (
        <>
            <main className="overflow-x-hidden">
                <Navbar />
                <Hero />
                <Menus />
            </main>
        </>
    );
};
