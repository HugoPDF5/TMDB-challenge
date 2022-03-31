import './home.css'

function Home(props){

    return (
      <div className="container">
          <main> 
            <div className="movies">
            <table>
              <tr>
                <td> Name </td>
                <td> Rating </td>
                <td> Genre </td>
              </tr>
              
          
            </table>
            </div>
            <div className="search">
            <h2>Search:</h2>
            <input type="text"></input>
            </div>
          </main>

      </div>
    )
}

export default Home;
