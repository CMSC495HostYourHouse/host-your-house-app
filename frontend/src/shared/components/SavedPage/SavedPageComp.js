import React from 'react';
import './SavedPage.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Savedprop from './SavedProp/saved-prop.js'
import Property from '../PropertyCards/Property'

// need to get what properties user saved and use the properties information to display the properties with thier information
class SavedPageComp extends React.Component{
    
    // Test Houses
    state = {
        house1_id : '626755f52b362e4bbac37904',
        house2_id : '626755f52b362e4bbac37906',
        house3_id : '626755f52b362e4bbac37907'
    }  

    render() {
        return (
            <section>
                <Container className='d-flex p-2 justify-content-center flex-row'>
                    <Card className='saved-card' bg='dark' text='light'>
                        <Card.Header><h1>Saved Properties</h1>
                        </Card.Header>
                        {/* need to dynamically create rows based on how many properties saved */}
                        <Card.Body>
                            <Row>
                                <Property featHouse = {this.state.house1_id} />
                                <Property featHouse = {this.state.house2_id} />
                                <Property featHouse = {this.state.house3_id} />
                                {/* <Col><Savedprop /></Col>
                                <Col><Savedprop /></Col> */}
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        )
    }
}

export default SavedPageComp;