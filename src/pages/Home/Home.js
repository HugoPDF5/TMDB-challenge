import './home.css'
import { useEffect, useState } from "react";
import { callAPI } from '../../services/movies_api'
import { Button, Modal } from 'react-bootstrap'
import star from '../../assets/star.svg'
import person from '../../assets/person.svg'
import details from '../../assets/details.svg'


function Home() {

  const [movies, setMovies] = useState([])
  const [show, setShow] = useState(false);
  const [itemSelected, setItemSelected] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    receiveMovies()
  }, [])

  // Requisição recebendo todos os resultados possiveis
  const receiveMovies = async () => {
    let moviesArray = await callAPI.getMoviesByPopularity()
    setMovies(moviesArray)
  }

  function getItemSelected(event) {
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
                <th> Popularity </th>
                <th> Rating </th>
              </tr>
            </thead>

            <tbody>
              {movies.map(item => {
                return <tr>
                  <td onClick={e => getItemSelected(item)}>  {item.title} <img src={details} alt="details icon"></img> </td>
                  <td> {item.popularity} <img src={person} alt="person icon"></img> </td>
                  <td> {item.vote_average} <img src={star} alt="star icon"></img> </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </main>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>{itemSelected.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Rating: {itemSelected.vote_average} </p>
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
