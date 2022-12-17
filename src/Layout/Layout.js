import TFooter from "./Footer";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <TFooter/>
    </>
  );
};
export default Layout;
