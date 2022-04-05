import {  Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './menu.css'


function Menu() {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link> <Link to='/genres'>Genres</Link></Nav.Link>
                        
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu