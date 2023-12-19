import { Outlet, Link } from "react-router-dom";
import "../assets/styles/layout.css";

const spaceOutLinks = (length: number) => {
  let spaces = "";
  const ul = document.getElementById("ul");
  for (let i = 0; i < length; i++) {
    spaces += "1fr ";
  }
  ul!.style.gridTemplateColumns = spaces;
};

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
