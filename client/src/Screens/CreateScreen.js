import React from 'react';
import { Container } from 'react-bootstrap';
import SubmitMemory from '../components/SubmitMemory';

const CreateScreen = () => {
    return (
        <>
            <Container className='col-md-8'>
                <SubmitMemory/>
            </Container>
        </>
    )
}

export default CreateScreen
