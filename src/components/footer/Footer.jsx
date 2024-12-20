import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="bg-primary/10 py-12 mt-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="container flex justify-between items-center"
            >
                {/* Logo Section */}
                <div className="flex items-center gap-2 text-2xl font-bold uppercase">
                    <span className="text-primary">Fruit</span>
                    <span className="text-secondary">Store</span>
                    <FaLeaf className="text-green-500" />
                </div>

                {/* Social icons section */}
                <div className="flex items-center text-3xl gap-4">
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebook />
                    <FaTwitter />
                </div>
            </motion.div>
        </footer>
    );
};
