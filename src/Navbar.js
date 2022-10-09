import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header=()=> {
  return (
    <Navbar className="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img className='rounded' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU' alt='logo_du_site'  BorderRadius ={30} width={30}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Qui suis-je </Nav.Link>
            <NavDropdown title="Daouda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Compétences 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Passions dev  </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;