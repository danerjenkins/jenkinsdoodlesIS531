import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { parents } from "../data/puppies";
import { motion } from "framer-motion";
export default function ParentDetail() {
    const { id } = useParams();
    const parent = parents.find((p) => p.id === id);
    if (!parent)
        return _jsx("p", { children: "Parent dog not found." });
    return (_jsxs("div", { className: "puppy-detail", children: [_jsx(Link, { to: "/", style: { color: "var(--primary)" }, children: "\u2190 Back" }), _jsxs("div", { className: "puppy-header", children: [_jsx("div", { className: "puppy-main-image", children: _jsx(motion.img, { src: parent.mainImage, alt: parent.name, initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } }) }), _jsxs("div", { className: "puppy-info", children: [_jsxs("h1", { children: [parent.name, " ", _jsxs("span", { style: { fontSize: "1.2rem", opacity: 0.8 }, children: ["(", parent.role, ")"] })] }), _jsx("p", { className: "puppy-description", children: parent.description }), _jsx("h3", { style: { marginTop: "1rem" }, children: "DNA Summary" }), _jsx("p", { style: { marginTop: "0.25rem" }, children: parent.dnaSummary })] })] }), _jsx("h2", { className: "section-title", style: { marginTop: "2rem" }, children: "Gallery" }), _jsx("div", { className: "puppy-gallery-scroll", children: parent.gallery.map((img) => (_jsx(motion.div, { whileHover: { scale: 1.05 }, className: "puppy-gallery-image", children: _jsx("img", { src: img.src, alt: img.alt }) }, img.src))) })] }));
}
