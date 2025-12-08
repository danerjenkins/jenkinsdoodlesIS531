import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PuppyDetail from './pages/PuppyDetail';
import ParentDetail from './pages/ParentDetail';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
    return (_jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/puppy/:id", element: _jsx(PuppyDetail, {}) }), _jsx(Route, { path: "/parent/:id", element: _jsx(ParentDetail, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] }) }));
}
export default App;
