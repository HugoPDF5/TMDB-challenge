import './home.css'
import { useEffect, useState } from "react";
import { callAPI } from '../../services/movies_api'
import { Button, Modal } from 'react-bootstrap'


function Home() {

  const [movies, setMovies] = useState([])
  const [show, setShow] = useState(false);
  const [itemSelected, setItemSelected] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    receiveMovies()
  }, [])


  const receiveMovies = async () => {
    let moviesArray = await callAPI.getMoviesByRate()
    setMovies(moviesArray)
  }

  function itemSelecionado(event) {
    setItemSelected(event)
    handleShow()
  }

  return (
    <div className="container">
      <main>
        <div className="movies">
          <table>
            <thead>
              <tr>
                <th> Name </th>
                <th> Rating </th>
              </tr>
            </thead>

            <tbody>
              {movies.map(item => {
                return <tr>
                  <td onClick={e => itemSelecionado(item)}>  {item.title} </td>
                  <td> {item.vote_average} </td>
                </tr>
              })}
            </tbody>

          </table>
        </div>
        <div className="search">
          <h2>Search:</h2>
          <input type="text"></input>
        </div>
      </main>

      <>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>{itemSelected.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Rating: {itemSelected.vote_average}</p>
            <p>Release Date: {itemSelected.release_date}</p>
            <p>Overview: {itemSelected.overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default Home;
