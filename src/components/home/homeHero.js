import TextLoop from "../commonUsables/typeWriter"
const HomeHero = () => {
  return (
    <>
    <div className="home-hero">
      <div className="container">
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
          <h5>Want to taste differently</h5>
          <hr className="home-hero-line"/>
          <h1 className="display-3">Flavours Tirupati</h1>
          <TextLoop/>
        </div>
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
      </div>
    </div>
    </>
  );
};
export default HomeHero;
