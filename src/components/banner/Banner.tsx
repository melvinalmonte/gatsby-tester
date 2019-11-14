import * as React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Banner: React.SFC = () => {
    return <Jumbotron fluid>
        <Container>
            <h1>Test Application</h1>
            <p>
                Guinea pig gatsby app to test in different environments.
            </p>
        </Container>
    </Jumbotron>

}

export default Banner