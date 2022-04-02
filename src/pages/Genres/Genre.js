import './genre.css'
import { NavDropdown } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { callAPI } from '../../services/movies_api'
import axios from 'axios'

function Genre() {

  const [genres, setGenres] = useState([])
  const [treatedGenres, setTreatedGenres] = useState([])
  const [genreActive, setGenreActive] = useState(null)

  useEffect(() => {
    receiveGenres()
  }, [])

  useEffect(() => {
    if (genreActive) {
      receiveMoviesByGenre()
    }
  }, [genreActive])

  // Requisição recebendo todos os resultados possiveis
  const receiveGenres = async () => {
    let genresArray = await callAPI.getMovieGenres()
    setGenres(genresArray)
  }

  // Requisição recebendo os resultados e tratando os que nao tiverem o campo nome vazio 
  const receiveMoviesByGenre = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${genreActive.id}/lists?api_key=fc45e0562ca750d5ca8a6f31cf72af4c&language=en-US&page=1`)
    data = data.results.filter(item => {
      if (item.name !== '') {
        return item
      }
    })
    setTreatedGenres(data)
  }

  // Função responsável por alterar o genero no dropdown
  function handleGenre(item) {
    setGenreActive(item)
  }

  return (
    <div className="container">
      <NavDropdown title={genreActive === null ? 'Select a genre' : genreActive.name} id="basic-nav-dropdown">
        {genres.map(item => {
          return (
            <NavDropdown.Item onClick={() =>
              handleGenre(item)} key={item.id}>{item.name}</NavDropdown.Item>
          )
        })}
      </NavDropdown>
      <main>
        <div className="movies">
          <table>
            <thead>
              <tr>
                <th> Name </th>
              </tr>
            </thead>

            <tbody>
              {treatedGenres.map(item => {
                return <tr>
                  <td> {item.name}</td>
                </tr>
              })}
            </tbody>

          </table>
        </div>
      </main>
    </div>
  )
}

export default Genre