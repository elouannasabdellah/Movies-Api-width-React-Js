
import NavbarTop from "./components/NavbarTop"
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

import { Container } from "react-bootstrap"
 
import axios from "axios"
import { useEffect, useState } from "react";

function App() {

  const [movies, setMovies]= useState([])
  const [pageCount, setPageCount]=useState(0)

    const getAllMovies= async ()=>{

        const res= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=180d721838e04c7361635498f35363d3&language=en-US')

        console.log(res.data.results)
        setMovies(res.data.results)
        // console.log(res.data.total_pages)
        setPageCount(res.data.total_pages)
    }

    // get Current page
    const getPage= async(page)=>{

      const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=180d721838e04c7361635498f35363d3&language=en-US&page=${page}`)

      setMovies(res.data.results) 
      setPageCount(res.data.total_pages)

    }

    useEffect( ()=>{

      getAllMovies()
      
    },[] )
    console.log(movies)

    // search input Api
    const search =async (word)=>{
      if(word===""){
        getAllMovies()
      }

      const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=180d721838e04c7361635498f35363d3&query=${word}&language=en-US&`)
      setMovies(res.data.results)
      // search et changer le nombre de page dans le pagination
      setPageCount(res.data.total_pages)
    }

  return (
    <div className="App">
       
        <NavbarTop search= {search} />
        <Container>
            <MovieList  movies= {movies}  getPage={getPage} pageCount={pageCount} />

    

        </Container>
    </div>
  );
}

export default App;
