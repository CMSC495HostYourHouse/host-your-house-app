import React from 'react';
import './ReservedProperties.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Property from "../PropertyCards/Property"

// need to check what properties user reserved, and then create the components with the properties data

class ReservedPageComp extends React.Component {

    // Test Houses
    state = {
        house1_id : '626755f52b362e4bbac37904',
        house2_id : '626755f52b362e4bbac37906',
        house3_id : '626755f52b362e4bbac37907',
				fullDate: 'a-a-a',
				fullDate2: 'a-a-a',
    } 

    render() {
        return (
            <section>
                <Container className='d-flex p-2 justify-content-center flex-row'>
                    <Card className='reserved-card' bg='primary' text='light'>
                        <Card.Header><h1>Reserved Properties</h1>
                        </Card.Header>
                        {/* will need to dynamicly create rows based on how many properties are reserved */}
                        <Card.Body>
                            <Row>
                                <Property featHouse = {this.state.house1_id} startDate = {this.state.fullDate} endDate = {this.state.fullDate2} />
                                <Property featHouse = {this.state.house2_id} startDate = {this.state.fullDate} endDate = {this.state.fullDate2}/>
                                <Property featHouse = {this.state.house3_id} startDate = {this.state.fullDate} endDate = {this.state.fullDate2}/>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        )
    }
}

export default ReservedPageComp;