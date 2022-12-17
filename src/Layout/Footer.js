import LOGO from "../assests/FLM.png";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {FaFacebookF , FaInstagram , FaYoutube} from "react-icons/fa"


const TFooter = () => {
  return (
    <>
      <div className="card t-footer">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
                <div className="t-align">
                <img src={LOGO} alt="Flavours COLOR" height="150" />
                </div>
                <div className="t-align">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="outline-light"><FaFacebookF size={25}/></Button>
                  <Button variant="outline-light"><FaInstagram size={25}/></Button>
                  <Button variant="outline-light"><FaYoutube size={25}/></Button>
                </ButtonGroup>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12"></div>
              <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TFooter;
