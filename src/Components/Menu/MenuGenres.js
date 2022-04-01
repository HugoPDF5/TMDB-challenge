import { callAPI } from '../../services/movies_api'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useEffect, useState } from "react";



function MenuGenres() {
    const [genres, setGenres] = useState([])
    const [genreActive, setGenreActive] = useState(null)

    useEffect(() => {
        receiveGenres()
    }, [])

    const receiveGenres = async () => {
        let genresArray = await callAPI.getMovieGenres()
        setGenres(genresArray)
    }

    function handleGenre(item) {
        setGenreActive(item)
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
                        <NavDropdown title={genreActive === null ? 'Select a genre' : genreActive.name} id="basic-nav-dropdown">
                            {genres.map(item => {
                                return (
                                    <NavDropdown.Item onClick={() => 
                                        handleGenre(item)} key={item.id}>{item.name}</NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuGenres