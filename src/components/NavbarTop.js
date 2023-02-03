import React from 'react'

import { Container,Row, Col } from "react-bootstrap"

const NavbarTop = ({search}) => {

    const onSearch=(word)=>{
        search(word)
    }

  return (

    <div className='nav-style w-100' >

        <Container >

            <Row className='pt-2' >
                <Col className="d-flex align-items-center" >   
                    <div className='search w-100 ' >
                        <input onChange={(e)=> onSearch(e.target.value) } type="search" className='form-control' placeholder='cherche...' />
                    </div>
                </Col>
            </Row>

        </Container>


    </div>
  )
}

export default NavbarTop
