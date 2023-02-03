import React from 'react'
import { Row } from "react-bootstrap"
import CardMovie from './CardMovie'
import Pagination from './Pagination'

const MovieList = ( {movies ,getPage, pageCount} ) => {
  return (
    
    <Row className='my-5'  >

        {movies.length >= 1 ? (movies.map((mov)=>{
            return (
                <CardMovie key={mov.id} mov= {mov} />
            )
        })) : <h2 className='text-center p-3' >No Movies</h2>}

        
        <Pagination  getPage={getPage} pageCount={pageCount} />


 </Row>

  )
}

export default MovieList
