import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import PuppyCard from "../components/PuppyCard";
import { puppies, parents } from "../data/puppies";
import { motion } from "framer-motion";
export default function Home() {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "hero-section", children: _jsxs(motion.div, { className: "hero-image", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("img", { src: "/IMG_4162.jpg", alt: "Family with puppies" }), _jsxs("div", { className: "hero-overlay", children: [_jsx("h2", { children: "Fall 2025 Litter" }), _jsx("p", { children: "9 puppies \u2014 raised in our home" })] })] }) }), _jsx("div", { style: {
                    marginTop: "2rem",
                    padding: "1.25rem",
                    background: "var(--bg-subtle)",
                    borderRadius: "10px",
                    textAlign: "center",
                }, children: _jsx(Link, { to: "/about", style: {
                        color: "var(--primary)",
                        fontWeight: 600,
                        fontSize: "1.15rem",
                        textDecoration: "none",
                    }, children: "Thinking about adopting a puppy? Click here to learn more \u2192" }) }), _jsxs("section", { style: { marginBottom: "3rem" }, children: [_jsx("h2", { className: "section-title", children: "Meet the Puppies" }), _jsx("div", { className: "grid grid-3", children: puppies.map((p) => (_jsx(PuppyCard, { to: `/puppy/${p.id}`, name: p.name, gender: p.gender, subtitle: `${p.gender} `, image: p.mainImage, status: p.status, variant: "puppy" }, p.id))) })] }), _jsxs("section", { children: [_jsx("h2", { className: "section-title", children: "Meet the Parents" }), _jsx("div", { className: "grid grid-3", children: parents.map((p) => (_jsx(PuppyCard, { to: `/parent/${p.id}`, name: p.name, subtitle: "Parent", image: p.mainImage, variant: "parent" }, p.id))) })] })] }));
}
