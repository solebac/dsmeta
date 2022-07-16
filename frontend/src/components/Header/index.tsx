import logo from "../../assets/img/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="linkedin.com/in/flávio-rogério-722a56159">@FlavioRogerio</a>
        </p>
      </div>
    </header>
  );
};
export default Header;
