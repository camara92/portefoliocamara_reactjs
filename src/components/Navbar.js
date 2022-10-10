import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';
 import logoatlas from '../assets/images/logoatlas.png'
 import skills from '../assets/images/skills.png'
 import projects from '../assets/images/project.jpg'


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
            <img className='rounded image' src={logoatlas} alt='logo_du_site'/>
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
              <a href="#"><img src={'skills'} alt='' /></a>
              <a href="#"><img src={'logoatlas'} alt='' /></a>
              <a href="#"><img src={'projects'} alt='' /></a>
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