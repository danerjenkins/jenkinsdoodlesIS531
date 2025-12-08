import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
export default function Layout({ children }) {
    return (_jsxs(_Fragment, { children: [_jsxs("header", { children: [_jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [_jsx("img", { src: "jdoodles.png", className: "header-logo" }), _jsx(Link, { to: "/", style: { fontWeight: 700, fontSize: "1.25rem" }, children: "Jenkins Doodles" })] }), _jsxs("nav", { children: [_jsx(NavLink, { to: "/", children: "Home" }), _jsx(NavLink, { to: "/about", children: "About" }), _jsx(NavLink, { to: "/contact", children: "Contact" })] })] }), _jsx("main", { className: "container", children: children }), _jsxs("footer", { children: ["\u00A9 ", new Date().getFullYear(), " Jenkins Doodles \u2014 Family Raised Goldendoodles & Labradoodles"] })] }));
}
