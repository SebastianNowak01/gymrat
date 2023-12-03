import { Outlet, Link } from "react-router-dom";
import "../assets/styles/layout.css";

const links = ["Home", "Blogs", "Contact"];

const linkItems = links.map((link) => (
  <li key={link.toLowerCase()}>
    {link === links[0] ? (
      <Link to={"/"}>{link}</Link>
    ) : (
      <Link to={link.toLowerCase()}>{link}</Link>
    )}
  </li>
));

const Layout = () => {
  return (
    <>
      <nav>
        <ul>{linkItems}</ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
