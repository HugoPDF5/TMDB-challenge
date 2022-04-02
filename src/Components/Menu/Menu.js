import { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { callAPI } from '../../services/movies_api'


function Menu() {

    const [wishMovie, setWishMovie] = useState('')


    const relatedMovies = async () => {
        const response = await callAPI.getMovieByName(wishMovie)
        console.log(response)
    }

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
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search a movie"
                            className="me-2"
                            aria-label="Search"
                            onChange= {e => setWishMovie(e.target.value) }
                            />
                            {console.log(wishMovie)}
                        <Button onClick={relatedMovies} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu