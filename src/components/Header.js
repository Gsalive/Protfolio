import NavLinks from "./NavLinks";
import download from "../images/download.jpg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={download}  />
      <NavLinks />
    </header>
  );
};

export default Header;
