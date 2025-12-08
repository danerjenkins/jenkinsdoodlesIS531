import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function PuppyCard({ to, name, subtitle, image, gender, status, variant = "puppy", }) {
    //* Auto pricing only for puppies
    const FEMALE_PRICE = 1500;
    const MALE_PRICE = 1500;
    const price = variant === "puppy"
        ? gender === "Female"
            ? FEMALE_PRICE
            : MALE_PRICE
        : undefined;
    return (_jsx(motion.div, { whileHover: { y: -6, scale: 1.02 }, transition: { duration: 0.25 }, className: `card ${variant === "puppy" ? "puppy-card-wrapper" : ""}`, children: _jsxs(Link, { to: to, style: { textDecoration: "none" }, children: [variant === "puppy" && status && (_jsx("span", { className: `badge badge-${status.toLowerCase()} puppy-card-status-badge`, children: status })), _jsx("img", { src: image, alt: name, className: variant === "puppy" ? "puppy-card-image" : "" }), _jsxs("div", { className: "puppy-card-info", children: [_jsx("p", { className: "puppy-card-name", children: name }), variant === "puppy" && (_jsxs(_Fragment, { children: [_jsxs("p", { className: "puppy-card-meta", children: [gender, " \u2022 ", status ?? "Available"] }), _jsxs("p", { className: "puppy-card-price", children: ["$", price.toLocaleString()] })] })), variant === "parent" && (_jsx("p", { className: "card-subtitle", children: subtitle }))] })] }) }));
}
