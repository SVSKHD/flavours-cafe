import { Helmet } from "react-helmet";
const Seo = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
      </Helmet>
    </>
  );
};
export default Seo;
