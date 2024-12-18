import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";

export const App = () => {
    return (
        <>
            <main className="overflow-x-hidden">
                <Navbar />
                <Hero />
            </main>
        </>
    );
};
