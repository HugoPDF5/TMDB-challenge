import {  Container, Nav, Navbar } from 'react-bootstrap'


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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/genres">Genre</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu