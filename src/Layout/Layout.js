import TFooter from "./Footer";
import Nav from "./Nav";
import Seo from "./SeoHead/Seo";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <Seo title={props.title} description={props.description} />
      {props.children}
      <TFooter/>
    </>
  );
};
export default Layout;
