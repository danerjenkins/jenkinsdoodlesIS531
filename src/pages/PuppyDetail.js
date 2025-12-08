import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { puppies } from "../data/puppies";
import { motion } from "framer-motion";
// Set your prices here
const FEMALE_PRICE = 2000;
const MALE_PRICE = 1900;
export default function PuppyDetail() {
    const { id } = useParams();
    const puppy = puppies.find((p) => p.id === id);
    if (!puppy)
        return _jsx("p", { children: "Puppy not found." });
    const price = puppy.gender === "Female" ? FEMALE_PRICE : MALE_PRICE;
    return (_jsxs("div", { className: "puppy-detail", children: [_jsx(Link, { to: "/", style: { color: "var(--primary)" }, children: "\u2190 Back" }), _jsxs("div", { className: "puppy-header", children: [_jsx("div", { className: "puppy-main-image", children: _jsx(motion.img, { src: puppy.mainImage, alt: puppy.name, initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } }) }), _jsxs("div", { className: "puppy-info", children: [_jsxs("h1", { children: [puppy.name, " - ", puppy.gender] }), _jsxs("p", { className: "puppy-card-price", children: ["$", price.toLocaleString()] }), puppy.status && (_jsx("span", { className: `badge badge-${puppy.status.toLowerCase()}`, style: { marginTop: "0.5rem", display: "inline-block" }, children: puppy.status })), _jsx("p", { className: "puppy-description", children: puppy.description })] })] }), _jsx("div", { style: {
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
                    }, children: "Thinking about adopting a puppy? Click here to learn more \u2192" }) }), _jsx("h2", { className: "section-title", style: { marginTop: "2rem" }, children: "Gallery" }), _jsx("div", { className: "puppy-gallery-scroll", children: puppy.gallery.map((img) => (_jsx(motion.div, { whileHover: { scale: 1.05 }, className: "puppy-gallery-image", children: _jsx("img", { src: img.src, alt: img.alt }) }, img.src))) })] }));
}
