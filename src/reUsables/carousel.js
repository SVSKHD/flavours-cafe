import Carousel from "react-bootstrap/Carousel";

const Fcaroules = (props) => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image}
          alt={props.alternative}
        />
        <Carousel.Caption className="text-white">
          <div className="card">
            <div className="card-section">
              <h5>{props.title}</h5>
              <p>{props.subtitle}</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Fcaroules;
