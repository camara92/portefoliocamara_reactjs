import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';

const Header=()=> {
  const [activeLink, SetactiveLink] = useState('home'); 
  const [scrolled, setScrolled] = useState(false); 
  useEffect(
    ()=>{
      const onScroll = () =>{
        if(window.scrollY> 50){
          setScrolled(true);
        }else{
          setScrolled(false); 
        }
      }
      window.addEventListener("scroll", onscroll); 
      return ()=> window.removeEventListener("scroll", onScroll); 

    }
  , [])
  const onUpdateActiveLink = (value)=>{
    SetactiveLink(value)
  }
  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home" >
            <img className='rounded image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU' alt='logo_du_site'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('projects')}>Projects </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><img src={''} alt='' /></a>
              <a href="#"><img src={''} alt='' /></a>
              <a href="#"><img src={''} alt='' /></a>
            </div>
            <button className='vvd' onClick={()=> console.log('Daouda ! ')}>
              <span>Let's connect </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;