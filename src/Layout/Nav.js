import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaUser} from "react-icons/fa"
import LOGO from "../assests/FLM.png"

const TNav = () =>{
return(
    <>
    <Navbar collapseOnSelect expand="lg" variant='dark' className='t-nav'>
      <Container>
        <Navbar.Brand href="/">
          <img src={LOGO} height="80" className="navbar-brand" alt="Flasvours Tirupati"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/layout2">Layout 2</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaUser size={25}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
)
} 
export default TNav