import React, { useState } from 'react';
import { Container, Form, Row, Col, FormControl, Button } from 'react-bootstrap';


export default function Search(props) {

    const [search, setSearch] = useState('');



    return (
        <Container>
            <Form className='mt-2'>
                <Row>
                    <Col xs={10} className='my-1'>
                        <FormControl 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search for Pokémon...' />
                    </Col>
                    <Col xs={2} className='my-1'>
                        <Button className='block' onClick={(e) => props.getPokemon(search)} >Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}